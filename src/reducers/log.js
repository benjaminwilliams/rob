function inputs(state = [], action){
  switch (action.type){
    case 'PRINT_TO_LOG':
      let newState = state.slice();
      // remove the oldest message if there are more than 4 messages in log
      if(newState.length > 4){
        newState = newState.slice(1);
      }
      return [...newState, action.message];
    default:
      return state;
  }
}

export default inputs;
