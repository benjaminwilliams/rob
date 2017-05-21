

function currentPos(state = {}, action){
  switch (action.type){
    case 'SET_CURRENT_POSITION':
      state = action.currentPosition;
      return state;
    default:
      return state;
  }
}

export default currentPos;