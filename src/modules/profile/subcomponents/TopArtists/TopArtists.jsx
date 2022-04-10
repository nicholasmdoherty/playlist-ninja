import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import './TopArtists.css'

const TopArtists = ({ api }) => {

  const [topArtists4Weeks, setTopArtists4Weeks] = useState([])
  const [topArtists6Months, setTopArtists6Months] = useState([])
  const [topArtistsAllTime, setTopArtistsAllTime] = useState([])
  const [activeView, setActiveView] = useState('short_term')
  const [error, setError] = useState(null)

  useEffect(() => {
    api.getMyTopArtists({ limit: 5, time_range: 'short_term' }).then(
      data => {
          setTopArtists4Weeks(data.body.items)
      },
      error => {
        setError(error)
      }
    );

    api.getMyTopArtists({ limit: 5, time_range: 'medium_term' }).then(
      data => {
          setTopArtists6Months(data.body.items)
      },
      error => {
        setError(error)
      }
    );

    api.getMyTopArtists({ limit: 5, time_range: 'long_term' }).then(
      data => {
          setTopArtistsAllTime(data.body.items)
      },
      error => {
        setError(error)
      }
    );
  }, [api])

  const renderTopArtists = () => {

    const renderArtist = (artist) => {
      return (
        <div className="artist-row">
          <img className='top-artist-image' width={40} height={40} src={artist.images.length > 0 ? artist.images[0].url : ''} />
          <span className="artist-name">{artist.name}</span>
        </div>
      )
    }

    if (error) {
      return 'Error loading top artists.'
    } else if (!topArtists4Weeks || !topArtists6Months || !topArtistsAllTime) {
      return 'Loading...'
    } else if (activeView === 'short_term') {
      return (
        <React.Fragment>
          {topArtists4Weeks.map((artist) => {
            return renderArtist(artist)
          })}
        </React.Fragment>
      )
    } else if (activeView === 'medium_term') {
      return (
        <React.Fragment>
          {topArtists6Months.map((artist) => {
            return renderArtist(artist)
          })}
        </React.Fragment>
      )
    } else if (activeView === 'long_term') {
      return (
        <React.Fragment>
          {topArtistsAllTime.map((artist) => {
            return renderArtist(artist)
          })}
        </React.Fragment>
      )
    }
  }

  return (
    <div className='top-artists-container'>
      <span className="top-artists-header">Top Artists</span>
      <div className='top-artists-button-row'>
        <div 
          className={`top-artists-button ${activeView === 'short_term' ? 'active' : ''}`}
          onClick={() => { setActiveView('short_term') }}
        >
          4 Weeks
        </div>
        <div 
          className={`top-artists-button ${activeView === 'medium_term' ? 'active' : ''}`}
          onClick={() => { setActiveView('medium_term') }}
        >
          6 Months
        </div>
        <div 
          className={`top-artists-button ${activeView === 'long_term' ? 'active' : ''}`}
          onClick={() => { setActiveView('long_term') }}
        >
          All Time
        </div>
      </div>
      <div className='card-style top-artists-card'>
        {renderTopArtists()}
      </div>
    </div>
  )
}

let mapStateToProps = state => {
  return {
    api: state.api.spotifyApi
  };
};

export default connect(mapStateToProps)(TopArtists);
