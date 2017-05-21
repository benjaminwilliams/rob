import React from 'react';
import './board.scss';


export default class Board extends React.Component{



  componentWillReceiveProps(nextProps){
    //check for incoming Prop changes
  }


  render(){

    const currentPos = this.props.robotPos.currentPos;


    return (
      <div>
        <div>Board, current position: {currentPos}</div>
      </div>
    )
  }

}
