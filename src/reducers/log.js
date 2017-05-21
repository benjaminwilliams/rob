function inputs(state = [], action){
  switch (action.type){
    case 'PRINT_TO_LOG':
      return [...state, action.message];
    default:
      return state;
  }
}

export default inputs;
