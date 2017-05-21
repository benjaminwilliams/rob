

function robotPos(state = {}, action){
  switch (action.type){
    case 'SET_CURRENT_POS':
      state.currentPos = action.currentPos;
      return state;
    case 'PLACE_ROBOT':
      state.isPlaced = action.isPlaced;
      return state;
    default:
      return state;
  }
}

export default robotPos;