export const setSelectedPlaylist = (
  playlistId,
  spotifyApi
) => async dispatch => {
  let playlistResponse = null;

  await spotifyApi
    .getPlaylist(playlistId)
    .then(
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
    )
    .then(() => {
      window.location.hash = "#/playlist-builder";
    });

  dispatch({
    type: "SET_SELECTED_PLAYLIST",
    payload: playlistResponse
  });
};
export const loadUsersEditablePlaylists = (
  userId,
  spotifyApi
) => async dispatch => {
  let playlistsResponse = null;

  await spotifyApi.getUserPlaylists(userId, { limit: 50 }).then(
    async response => {
      playlistsResponse = response.body.items;
      let notAllPlaylists = response.body.next;

      if (notAllPlaylists) {
        let offset = 50;

        while (notAllPlaylists) {
          await spotifyApi
            .getUserPlaylists(userId, { limit: 50, offset })
            .then(morePlaylistsResponse => {
              if (!morePlaylistsResponse.body.next) {
                notAllPlaylists = false;
              }

              offset += 50;

              playlistsResponse = playlistsResponse.concat(
                morePlaylistsResponse.body.items
              );
            });
        }
      }

      playlistsResponse = playlistsResponse.filter(playlist => {
        return playlist.owner.id == userId || playlist.collaborative;
      });
    },
    error => {
      playlistsResponse = error;
    }
  );

  dispatch({
    type: "LOAD_EDITABLE_PLAYLISTS",
    payload: playlistsResponse
  });
};
