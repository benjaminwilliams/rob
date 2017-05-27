import React from 'react';
import { shallow } from 'enzyme';
import Robot from './Robot';

const mock = {
  inputs: "",
  robotPos: {
    isPlaced: false,
    currentPos: [0,0,'N']
  },
  log: "",
  isFinished: false
};
const print = (text) => mock.log = text;
const setPos = (input) => mock.robotPos.currentPos = input;
const placeRobot = () => mock.robotPos.isPlaced = true;
const inputFinished = (isFinished) => mock.isFinished = true;
describe('Robot', ()=>{

  const wrapper = shallow(
    <Robot
      robotPos={mock.robotPos}
      inputs={mock.inputs}
      printToLog={print}
      setCurrentPos={setPos}
      inputFinished={inputFinished}
      placeRobot={placeRobot}
    />
  );

  it('should load with no DOM', ()=>{
    expect(wrapper.props()).toEqual({});
  });
  it('should not allow move if not placed', ()=>{
    wrapper.setProps({inputs: ["MOVE"]});
    expect(mock.log).toEqual('Robot is not placed on board');
  });
  it('should be placed at default position', ()=>{
    expect(mock.robotPos.currentPos).toEqual([0,0,'N']);
  });
  it('should be able to change the position', ()=>{
    mock.robotPos.currentPos = [1,1,'S'];
    wrapper.setProps({robotPos: mock.robotPos});
    expect(mock.robotPos.currentPos).toEqual([1,1,'S']);
  });
  it('should allow move when placed', ()=>{
    wrapper.setProps({inputs: ["PLACE","MOVE"]});
    expect(mock.robotPos.isPlaced).toEqual(true);
  });
  it('should report the correct location', ()=>{
    wrapper.setProps({inputs: ["REPORT", "PLACE", "MOVE"]});
    expect(mock.log).toEqual("current position: 1,1,S");
  });
});
