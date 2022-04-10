# PLAYLIST NINJA
 
This is a web app that uses the Spotify Web API to create a better tool for editing playlists for specific moods or events based on track statistics given from Spotify.

<br/>

### You can edit playlists and search tracks based on a few different statistics:
  -  Danceability: A measure of how danceable a track / playlist is (rythmatic, consistent beat)
  -  Energy: A measure of how much energy the song / playlist has (upbeat, fast, etc)
  -  Valence: A measure of positivity in the song / playlist (low valence is sad & angry, high valence is cheerful & happy)
  -  Tempo: The tempo of the song or average tempo of the playlist.
  -  Popularity: The current popularity of the song / playlist on a scale from 0-100.
  
<br/>
<br/>
  
This is written fully in React, using `spotify-web-api-node` by `thelinmichael` (https://github.com/thelinmichael/spotify-web-api-node) to handle the Spotify API calls. We also are using Redux to store an instance of the authorized API in the store so that components can easily have access to the API and make requests.

<br/>

This is an active project, and still a work in progess. If you find a bug in the web app or have a suggestion, please write up an issue in this repo and I'll take a look. :)



