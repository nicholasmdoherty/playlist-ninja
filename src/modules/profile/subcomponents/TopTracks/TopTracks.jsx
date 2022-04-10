import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import './TopTracks.css'

const TopTracks = ({ api }) => {

  const [topTracks4Weeks, setTopTracks4Weeks] = useState([])
  const [topTracks6Months, setTopTracks6Months] = useState([])
  const [topTracksAllTime, setTopTracksAllTime] = useState([])
  const [activeView, setActiveView] = useState('short_term')
  const [error, setError] = useState(null)

  useEffect(() => {
    api.getMyTopTracks({ limit: 5, time_range: 'short_term' }).then(
      data => {
        setTopTracks4Weeks(data.body.items)
      },
      error => {
        setError(error)
      }
    );

    api.getMyTopTracks({ limit: 5, time_range: 'medium_term' }).then(
      data => {
        setTopTracks6Months(data.body.items)
      },
      error => {
        setError(error)
      }
    );

    api.getMyTopTracks({ limit: 5, time_range: 'long_term' }).then(
      data => {
        setTopTracksAllTime(data.body.items)
      },
      error => {
        setError(error)
      }
    );
  }, [api])

  const renderTopTracks = () => {

    const renderTrack = (track) => {
      return (
        <div className="top-track-row">
          <img className="top-track-image" width={40} height={40} src={track.album.images.length > 0 ? track.album.images[0].url : ''} />
          <span className="top-track-name">{track.name}</span>
        </div>
      )
    }

    if (error) {
      return 'Error loading top tracks.'
    } else if (!topTracks4Weeks || !topTracks6Months || !topTracksAllTime) {
      return 'Loading...'
    } else if (activeView === 'short_term') {
      return (
        <React.Fragment>
          {topTracks4Weeks.map((track) => {
            return renderTrack(track)
          })}
        </React.Fragment>
      )
    } else if (activeView === 'medium_term') {
      return (
        <React.Fragment>
          {topTracks6Months.map((track) => {
            return renderTrack(track)
          })}
        </React.Fragment>
      )
    } else if (activeView === 'long_term') {
      return (
        <React.Fragment>
          {topTracksAllTime.map((track) => {
            return renderTrack(track)
          })}
        </React.Fragment>
      )
    }
  }

  return (
    <div className='top-tracks-container'>
      <span className="top-tracks-header">Top Tracks</span>
      <div className='top-tracks-button-row'>
        <div
          className={`top-tracks-button ${activeView === 'short_term' ? 'active' : ''}`}
          onClick={() => { setActiveView('short_term') }}
        >
          4 Weeks
        </div>
        <div
          className={`top-tracks-button ${activeView === 'medium_term' ? 'active' : ''}`}
          onClick={() => { setActiveView('medium_term') }}
        >
          6 Months
        </div>
        <div
          className={`top-tracks-button ${activeView === 'long_term' ? 'active' : ''}`}
          onClick={() => { setActiveView('long_term') }}
        >
          All Time
        </div>
      </div>
      <div className='card-style top-tracks-card'>
        {renderTopTracks()}
      </div>
    </div>
  )
}

let mapStateToProps = state => {
  return {
    api: state.api.spotifyApi
  };
};

export default connect(mapStateToProps)(TopTracks);
