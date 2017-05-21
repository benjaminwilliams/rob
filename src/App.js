import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';

import Robot from "./components/Robot/Robot";
import Joypad from "./components/Joypad/Joypad";
import './App.css';

function mapStateToProps(state){
  return{
    currentPos: state.currentPos,
    inputs: state.inputs,
    sendInput: state.sendInput,
    inputFinished: state.inputFinished
  }
}


function mapDispatchToProps(dispach){
  return bindActionCreators(actionCreators, dispach);
}


class Main extends React.Component {
  render() {
    return (
        <div className="App">
          {this.props.inputs}
          <Robot
            currentPos={this.props.currentPos}
            inputs={this.props.inputs}
            inputFinished={this.props.inputFinished}
          />
          <Joypad sendInput={this.props.sendInput} />
        </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);


export default App;
