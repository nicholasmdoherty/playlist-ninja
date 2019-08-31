export default (state = {}, action) => {
  switch (action.type) {
    case "SET_SPOTIFY_API":
      debugger;
      return {
        ...state,
        spotifyApi: action.payload
      };
    default:
      return state;
  }
};
