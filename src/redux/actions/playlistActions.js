export const setSelectedPlaylist = (
  playlistId,
  spotifyApi
) => async dispatch => {
  let playlistResponse = null;

  await spotifyApi.getPlaylist(playlistId).then(
    async data => {
      playlistResponse = data.body;

      let notAllTracks = playlistResponse.tracks.next;

      playlistResponse.tracks = playlistResponse.tracks.items;

      if (notAllTracks) {
        let offset = 100;

        while (notAllTracks) {
          await spotifyApi
            .getPlaylistTracks(playlistId, { offset })
            .then(data => {
              if (!data.body.next) {
                notAllTracks = false;
              }

              offset += 100;

              playlistResponse.tracks = playlistResponse.tracks.concat(
                data.body.items
              );
            });
        }
      }
    },
    error => {
      playlistResponse = error;
    }
  );

  dispatch({
    type: "SET_SELECTED_PLAYLIST",
    payload: playlistResponse
  });
};
