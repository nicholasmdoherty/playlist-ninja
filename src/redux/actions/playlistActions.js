export const setSelectedPlaylist = (
  playlistId,
  spotifyApi
) => async dispatch => {
  let playlistResponse = null;

  await spotifyApi.getPlaylist(playlistId).then(
    data => {
      playlistResponse = data.body;
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
