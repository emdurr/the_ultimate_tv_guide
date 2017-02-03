const initialState = {};

export default function movies(state = initialState, action) {
  switch(action.type){
    case 'GET_MOVIES':
      return state;

    default:
      return state;
  }
}