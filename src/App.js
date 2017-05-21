import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';

import Robot from "./components/Robot/Robot";
import './App.css';

function mapStateToProps(state){
  return{
    currentPos: state.currentPos
  }
}


function mapDispatchToProps(dispach){
  return bindActionCreators(actionCreators, dispach);
}


class Main extends React.Component {
  render() {
    return (
        <div className="App">
          {this.props.currentPos}
          <Robot currentPos={this.props.currentPos}/>
        </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);


export default App;
