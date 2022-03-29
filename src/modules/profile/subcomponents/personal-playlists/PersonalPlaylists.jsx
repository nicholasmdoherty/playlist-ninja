import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import FeatherIcon from 'feather-icons-react'

import { loadUsersEditablePlaylists, setSelectedPlaylist } from '../../../../redux/actions/playlistActions';

import './PersonalPlaylists.css'
import { deepCamelCaseKeys } from '../../../../common/constants';
import { setUserId } from '../../../../redux/actions/apiActions';

const MyPlaylists = ({ title, userId, api, playlists, loadEditablePlaylists, updateSelectedPlaylist, setUserIdInRedux}) => {
  const numPerPage = 11;

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  const [activePage, setActivePage] = useState(1);
  const [numPages, setNumPages] = useState(1)  

  useEffect(() => {
    if (userId) {
      loadEditablePlaylists(userId, api);
    } else {

      let newUserID = ''

      if (!userId) {
        api.getMe().then(
          data => {
            newUserID = deepCamelCaseKeys(data.body).id
            setUserIdInRedux(newUserID)
          }
        );
      }
    }
  }, [api, loadEditablePlaylists, setUserIdInRedux, userId])

  useEffect(() => {
    if (playlists.length !== 0) {
      setNumPages(Math.ceil(playlists.length / numPerPage))
      setLoading(false)
    }
  }, [playlists])

  if (error) {
    console.log(error)
    return 'Error'
  }



  const renderPaginationButton = () => {
    return (
      <div className='playlists-pagination'>
        <FeatherIcon 
          width={16} 
          height={16} 
          icon="chevron-left" 
          onClick={activePage === 1 ? null : () => { setActivePage(activePage - 1) }}
          className={`playlists-pagination-arrow ${activePage === 1 ? 'disabled' : ''}`}
        />
        Page {activePage} / {numPages}
        <FeatherIcon 
          width={16} 
          height={16} 
          icon="chevron-right"
          onClick={activePage === numPages ? null : () =>  { setActivePage(activePage + 1) } }
          className={`playlists-pagination-arrow ${activePage === numPages ? 'disabled' : ''}`}
        />
      </div>
    )
  }

  const renderSearchBar = () => {
    return (
      <div className='playlists-search'>
        <FeatherIcon 
          width={16} 
          height={16} 
          icon="search" 
        />
        Search
      </div>
    )
  }

  const renderSortDropdown = () => {
    return (
      <div className='playlists-sort'>
        Sort
        <FeatherIcon 
          width={16} 
          height={16} 
          icon="chevron-down" 
        />
      </div>
    )
  }

  const renderPlaylistPage = () => {
    const startNumber = (activePage - 1) * numPerPage
    const playlistsToShow = playlists.slice(startNumber, startNumber + numPerPage);

    return (
      <React.Fragment>
        {playlistsToShow.map((playlist, index) => {
          return <div className={`playlist-row ${ index % 2 === 1 ? 'odd' : '' }`}>
            <div className='playlist-img-name'>
              <img 
                className='playlist-image' 
                width={60} 
                height={60}
                src={playlist.images.length > 0 ? playlist.images[0].url : ''}
                alt={`"${playlist.name}" Cover`} 
                onError={( { currentTarget } ) =>{
                  currentTarget.onerror = null;
                  currentTarget.src = '/assets/generic-image.png'
              }} 
              />
              <span className='playlist-name'>{playlist.name}</span>
            </div>
            <div className="edit-button" onClick={() => updateSelectedPlaylist(playlist.id, api)}>
              <FeatherIcon 
                icon='edit'
                width={16}
                height={16}
              />
              Edit
            </div>
          </div>
        })}
      </React.Fragment>
    )
  }

  return (
    <div className='playlists-container'>
      <span className='playlists-header'>{title}</span>
      <div className='playlists-nav-row'>
        {!loading && renderPaginationButton()}
        {/*renderSearchBar()}
        {renderSortDropdown()*/}
      </div>
      <div className='card-style playlists-card'>
        {!loading && renderPlaylistPage()}
        {loading && <div className='playlist-row'>Loading...</div>}
      </div>
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    api: state.api.spotifyApi,
    playlists: state.playlist.editablePlaylists
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    loadEditablePlaylists: (userId, spotifyApi) =>
      dispatch(loadUsersEditablePlaylists(userId, spotifyApi)),
    updateSelectedPlaylist: (playlistId, spotifyApi) =>
      dispatch(setSelectedPlaylist(playlistId, spotifyApi)),
    setUserIdInRedux: (userId) => {
        dispatch(setUserId(userId))
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPlaylists);
