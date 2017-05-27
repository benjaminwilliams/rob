import robotPosReducer from './robotPos';

describe('robotPos reducer', ()=>{

  let state = {};
  it('should do nothing with unknown action', ()=>{
    state = robotPosReducer(state,{type: "TEST", input: "MOVE"});
    expect(state).toEqual({});
  });
  it('should set current position', ()=>{
    state = robotPosReducer(state,{type: "SET_CURRENT_POS", currentPos: [0,0,'N']});
    expect(state.currentPos).toEqual([0,0,'N']);
  });
  it('should set robot position to be placed', ()=>{
    state = robotPosReducer(state,{type: "PLACE_ROBOT", isPlaced: true});
    expect(state.isPlaced).toEqual(true);
  });
});
