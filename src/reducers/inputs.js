function inputs(state = [], action){
  switch (action.type){
    case 'SEND_INPUT':
      return [...state, action.input];
    case 'INPUT_FINISHED':
      return state.slice(1);
    default:
      return state;
  }
}

export default inputs;
