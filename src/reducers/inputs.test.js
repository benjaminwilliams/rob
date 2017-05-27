import inputReducer from './inputs';

describe('input reducer', ()=>{

  let state = [];
  it('should do nothing with unknown action', ()=>{
    state = inputReducer(state,{type: "TEST", input: "MOVE"});
    expect(state).toEqual([]);
  });
  it('should add an input to the input queue', ()=>{
    state = inputReducer(state,{type: "SEND_INPUT", input: "MOVE"});
    expect(state).toEqual(["MOVE"]);
  });
  it('should add a 2nd input to the input queue', ()=>{
    state = inputReducer(state,{type: "SEND_INPUT", input: "PLACE"});
    expect(state).toEqual(["MOVE", "PLACE"]);
  });
  it('should add a 3rd input to the input queue', ()=>{
    state = inputReducer(state,{type: "SEND_INPUT", input: "LEFT"});
    expect(state).toEqual(["MOVE", "PLACE", "LEFT"]);
  });
  it('should remove the oldest input from the queue', ()=>{
    state = inputReducer(state,{type: "INPUT_FINISHED"});
    expect(state).toEqual(["PLACE", "LEFT"]);
  });
  it('should add a 3rd input', ()=>{
    state = inputReducer(state,{type: "SEND_INPUT", input: "RIGHT"});
    expect(state).toEqual(["PLACE", "LEFT", "RIGHT"]);
  });
});
