import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';

import Robot from "./components/Robot/Robot";
import Joypad from "./components/Joypad/Joypad";
import Board from "./components/Board/Board";
import Log from "./components/Log/Log";
import './App.css';

function mapStateToProps(state){
  return{
    robotPos: state.robotPos,
    setCurrentPos: state.setCurrentPos,
    inputs: state.inputs,
    sendInput: state.sendInput,
    inputFinished: state.inputFinished,
    placeRobot: state.placeRobot,
    log: state.log,
    printToLog: state.printToLog
  }
}


function mapDispatchToProps(dispach){
  return bindActionCreators(actionCreators, dispach);
}


class Main extends React.Component {
  render() {
    return (
        <div className="App">
          <Board robotPos={this.props.robotPos} />
          <Robot
            robotPos={this.props.robotPos}
            inputs={this.props.inputs}
            inputFinished={this.props.inputFinished}
            setCurrentPos={this.props.setCurrentPos}
            placeRobot={this.props.placeRobot}
            printToLog={this.props.printToLog}
          />
          <Joypad
            sendInput={this.props.sendInput}
            setCurrentPos={this.props.setCurrentPos}
            printToLog={this.props.printToLog}
          />

          <Log log={this.props.log} />
        </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);


export default App;
