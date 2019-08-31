import SpotifyWebApi from "spotify-web-api-node";
import { clientID, redirectURI } from "../../common/constants";

export const setSpotifyApiAction = accessToken => dispatch => {
  let spotifyApi = new SpotifyWebApi({
    clientId: clientID,
    redirectUri: redirectURI
  });

  spotifyApi.setAccessToken(accessToken);

  debugger;

  dispatch({
    type: "SET_SPOTIFY_API",
    payload: spotifyApi
  });
};
