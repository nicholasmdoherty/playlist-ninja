import SpotifyWebApi from "spotify-web-api-node";
import { clientID, redirectURI } from "../../common/constants";

export const setSpotifyApiAction = accessToken => dispatch => {
  let spotifyApi = new SpotifyWebApi({
    clientId: clientID,
    redirectUri: redirectURI
  });

  spotifyApi.setAccessToken(accessToken);

  dispatch({
    type: "SET_SPOTIFY_API",
    payload: spotifyApi
  });
};

export const setUserId = userId => dispatch => {
  dispatch({
    type: "SET_USER_ID",
    payload: userId
  });
};
