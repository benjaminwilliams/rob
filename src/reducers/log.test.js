import logReducer from './log';

describe('log reducer', ()=>{

  it('should do nothing with unknown action', ()=>{
    let state = [];
    state = logReducer(state,{type: "TEST", input: "MOVE"});
    expect(state).toEqual([]);
  });
  it('should add message to the log', ()=>{
    let state = ["one", "two"];
    state = logReducer(state,{type: "PRINT_TO_LOG", message: "three"});
    expect(state).toEqual(["one", "two", "three"]);
  });
  it('should truncate the first message when there is more than 5', ()=>{
    let state = ["one", "two","three","four","five"];
    state = logReducer(state,{type: "PRINT_TO_LOG", message: "six"});
    expect(state).toEqual(["two", "three","four","five","six"]);
  });
});
