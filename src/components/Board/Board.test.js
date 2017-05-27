import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';

const mock = {
  pos: {
    isPlaced: false,
    currentPos: [0,0,'N']
  }
};


describe('Board', ()=>{

  const wrapper = shallow(
    <Board robotPos={mock.pos}/>
  );

  it('should generate the correct number of tiles', ()=>{
    expect(wrapper.find('.board__tile').length).toEqual(25);
  });
  it('should load with Rob hidden', ()=>{
    expect(wrapper.find('.rob').props().className).toEqual("rob hidden N");
  });
  it('should show Rob when unhidden', ()=>{
    mock.pos.isPlaced = true;
    wrapper.setProps({robotPos: mock.pos});
    expect(wrapper.find('.rob').props().className).toEqual("rob  N");
  });
  it('should show Rob South when facing that way', ()=>{
    mock.pos.currentPos = [0,0,'S'];
    wrapper.setProps({robotPos: mock.pos});
    expect(wrapper.find('.rob').props().className).toEqual("rob  S");
  });
  it('should display Rob at the correct position when at 0,0', ()=>{
    expect(wrapper.find('.rob').props().style.left).toEqual("0%");
    expect(wrapper.find('.rob').props().style.top).toEqual("100%");
  });
  it('should display Rob at the correct position when at 3,3', ()=>{
    mock.pos.currentPos = [3,3,'E'];
    wrapper.setProps({robotPos: mock.pos});
    expect(wrapper.find('.rob').props().style.left).toEqual("60%");
    expect(wrapper.find('.rob').props().style.top).toEqual("40%");
  });
});
