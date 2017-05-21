import React from 'react';
import { shallow } from 'enzyme';
import Log from './log';

const mockLog = [
  'test log',
  'test log 2'
];

it('displays logs', ()=>{

  const logs = shallow(
    <Log log={mockLog} />
  );

  expect(logs.text()).toEqual("Message log > test log > test log 2");
});

