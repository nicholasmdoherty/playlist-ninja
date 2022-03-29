export default (state = {}, action) => {
  switch (action.type) {
    case "SET_SPOTIFY_API":
      return {
        ...state,
        spotifyApi: action.payload
      };
    case "SET_USER_ID":
      return {
        ...state,
        userId: action.payload
      }
    default:
      return state;
  }
};
