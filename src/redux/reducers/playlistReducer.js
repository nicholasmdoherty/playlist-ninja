export default (state = {}, action) => {
  switch (action.type) {
    case "SET_SELECTED_PLAYLIST":
      return {
        ...state,
        selectedPlaylist: action.payload
      };
    case "LOAD_EDITABLE_PLAYLISTS":
      return {
        ...state,
        editablePlaylists: action.payload
      };
    default:
      return state;
  }
};
