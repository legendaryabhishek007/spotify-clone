export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after developing.....
  // token:"BQDElKegrLcXuUM1Dre5l2SLs9EIOprAw9B3qYaN3pAGO2nrBgRUK99J21VHKEHc8YVS9ekTHgDbATHi-O6zdXCwpgKTUelEcn29xN01rzdsW5F5JymvGMJrMibxa5WBptDbZvV5mVQ1vfuVTHm0QzZwHG_0lsv_qWh5RXKrC8GYEwyO"
  
};

const reducer = (state, action) => {
  console.log(action);
    //Action -> type, [payload]
    switch(action.type){
      case 'SET_USER':
        return {
          ...state,
          user: action.user,
        };
        case 'SET_TOKEN':
          return{
            ...state,
            token: action.token,
          }
        case 'SET_PLAYLISTS':
          return {
            ...state,
            playlists: action.playlists,
          };
        case 'SET_DISCOVER_WEEKLY':
          return {
            ...state,
            discover_weekly: action.discover_weekly,
          }
      default:
        return state;
    }


}

export default reducer;