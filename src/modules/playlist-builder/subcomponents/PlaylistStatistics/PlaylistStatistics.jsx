import React, { useCallback, useEffect, useState } from 'react'
import { deepCamelCaseKeys, msToHM } from '../../../../common/constants';

import './PlaylistStatistics.css'

const PlaylistStatistics = ({ playlist, api }) => {

  const [loading, setLoading] = useState(true);
  const [playlistStats, setPlaylistStats] = useState({})

  const [activeView, setActiveView] = useState('song_information')

  /**
   * Calculates the average music statistics from Spotify for this playlist.
   */
  const calculateAverageStatistics = useCallback(async () => {
    let { tracks } = playlist
    let statistics = {
      tempo: null,
      danceability: null,
      valence: null,
      energy: null,
      durationMs: null,
      popularity: null
    };

    let trackIds = [];

    tracks.forEach(playlistTrack => {
      trackIds.push(playlistTrack.track.id);
      statistics.popularity =
        statistics.popularity + playlistTrack.track.popularity;
    });

    let haveToLoop = trackIds.length > 100;

    let trackStatistics = [];

    if (trackIds.length !== 0) {
      await api
        .getAudioFeaturesForTracks(trackIds.splice(0, 100))
        .then(data => {
          let response = deepCamelCaseKeys(data.body);

          if (response.audioFeatures) {
            trackStatistics = trackStatistics.concat(response.audioFeatures);
          }
        });

      if (haveToLoop) {
        let numOfStatisticsReceived = 100;

        while (haveToLoop) {
          let data = await api.getAudioFeaturesForTracks(trackIds.splice(0, 100))
          let response = deepCamelCaseKeys(data.body);
          trackStatistics = trackStatistics.concat(response.audioFeatures);
          numOfStatisticsReceived += response.audioFeatures.length;

          if (numOfStatisticsReceived === tracks.length) {
            haveToLoop = false;
          }
        }
      }

      trackStatistics.forEach(trackStatistic => {
        if (trackStatistic !== null) {
          statistics.tempo = statistics.tempo + trackStatistic.tempo;
          statistics.danceability =
            statistics.danceability + trackStatistic.danceability;
          statistics.valence = statistics.valence + trackStatistic.valence;
          statistics.energy = statistics.energy + trackStatistic.energy;
          statistics.durationMs =
            statistics.durationMs + trackStatistic.durationMs;
        }
      });

      setPlaylistStats({
        tempo: statistics.tempo / tracks.length,
        danceability: statistics.danceability / tracks.length,
        valence: statistics.valence / tracks.length,
        energy: statistics.energy / tracks.length,
        durationMs: statistics.durationMs,
        popularity: statistics.popularity / tracks.length
      })
      setLoading(false)
    }
  }, [api, playlist]);


  const renderPercetangeBar = (percent) => {
    return (
      <div className='percentage-bar-container'>
        <div className='percent-full' style={{ width: `${percent}%` }} />
      </div>
    )
  }


  const renderSongInformationView = () => {

    return (
      <React.Fragment>
        <div className='playlist-stats-row'>
          <span className='playlist-stats-label'>Tempo</span>
          <span className='playlist-stats-font'>{Math.round(playlistStats.tempo)} BPM</span>
        </div>
        <div className='playlist-stats-row'>
          <span className='playlist-stats-label'>Energy</span>
          {renderPercetangeBar(playlistStats.energy.toFixed(2) * 100)}
        </div>
        <div className='playlist-stats-row'>
          <span className='playlist-stats-label'>Danceability</span>
          {renderPercetangeBar(playlistStats.danceability.toFixed(2) * 100)}
        </div>
        <div className='playlist-stats-row'>
          <span className='playlist-stats-label'>Valence</span>
          {renderPercetangeBar(playlistStats.valence.toFixed(2) * 100)}
        </div>
        <div className='playlist-stats-row'>
          <span className='playlist-stats-label'>Average Song Popularity</span>
          {renderPercetangeBar(playlistStats.popularity.toFixed(0))}
        </div>
      </React.Fragment>
    )
  }

  const renderPlaylistInformationView = () => {
    let duration = msToHM(Math.round(playlistStats.durationMs));

    return (
      <React.Fragment>
        <div className='playlist-stats-row'>
          <span className='playlist-stats-label'>Owner</span>
          <span className='playlist-stats-font'>{playlist.owner.display_name}</span>
        </div>
        <div className='playlist-stats-row'>
          <span className='playlist-stats-label'>Duration</span>
          <span className='playlist-stats-font'>
            {duration.hours > 0 ? duration.hours + " hours" : ""}
            {" "}
            {duration.minutes > 0 ? duration.minutes + " minutes" : ""}
          </span>
        </div>
        <div className='playlist-stats-row'>
          <span className='playlist-stats-label'>Followers</span>
          <span className='playlist-stats-font'>{playlist.followers.total} Followers</span>
        </div>
        <div className='playlist-stats-row'>
          <span className='playlist-stats-label'>Visibility</span>
          <span className='playlist-stats-font'>{playlist.public ? 'Public' : 'Private'}</span>
        </div>
        <div className='playlist-stats-row'>
          <span className='playlist-stats-label'>Collaborative</span>
          <span className='playlist-stats-font'>{playlist.collaborative ? 'Yes' : 'No'}</span>
        </div>
      </React.Fragment>
    )

  }

  useEffect(() => {
    calculateAverageStatistics()
  }, [calculateAverageStatistics])


  if (loading) {
    return 'Loading...'
  }

  return (
    <div className='playlist-stats-container'>
      <span className='playlist-stats-header'>Playlist Statistics</span>
      <div className='playlist-stats-button-row'>
        <div
          className={`playlist-stats-button ${activeView === 'song_information' ? 'active' : ''}`}
          onClick={() => { setActiveView('song_information') }}
        >
          Song Information
        </div>
        <div
          className={`playlist-stats-button ${activeView === 'playlist_information' ? 'active' : ''}`}
          onClick={() => { setActiveView('playlist_information') }}
        >
          Playlist Information
        </div>
      </div>
      <div className='playlist-stats-content card-style'>
        {activeView === 'song_information' ? renderSongInformationView() : renderPlaylistInformationView()}
      </div>
    </div>
  )
}

export default PlaylistStatistics;