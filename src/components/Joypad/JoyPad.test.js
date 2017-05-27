import React from 'react';
import { shallow } from 'enzyme';
import JoyPad from './Joypad';

const mock = {
  input: "",
  currentPos: "",
  log: ""
};

const setInput = (input) => mock.input = input;
const printToLog = (text) => mock.log = text;
const setPos = (input) => mock.currentPos = input;

describe('Joypad', ()=>{

  const joypad = shallow(
    <JoyPad  sendInput={setInput} setCurrentPos={setPos} printToLog={printToLog}/>
  );

  it('should load with correct defaults', ()=>{
    expect(joypad.find('.t-x-input').props().defaultValue).toEqual("0");
    expect(joypad.find('.t-y-input').props().defaultValue).toEqual("0");
    expect(joypad.find('.t-f-input').props().defaultValue).toEqual("N");
    expect(mock.log).toBe("");

  });
  it('should send MOVE when clicked', ()=>{
    joypad.find('.t-move').simulate('click');
    expect(mock.input).toBe("MOVE");
  });
  it('should send LEFT when clicked', ()=>{
    joypad.find('.t-left').simulate('click');
    expect(mock.input).toBe("LEFT");
  });
  it('should send RIGHT when clicked', ()=>{
    joypad.find('.t-right').simulate('click');
    expect(mock.input).toBe("RIGHT");
  });
  it('should send REPORT when clicked', ()=>{
    joypad.find('.t-report').simulate('click');
    expect(mock.input).toBe("REPORT");
  });
});
