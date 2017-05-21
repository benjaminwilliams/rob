import React from 'react';
import './board.css';


export default class Board extends React.Component{


  constructor(props){
    super(props);
    this.renderBoardRow = this.renderBoardRow.bind(this);
  }

  componentWillReceiveProps(nextProps){
    //check for incoming Prop changes
  }

  renderBoardRow(row){
    return (
      <div className="board__row">
        <div className="board__tile">0,{row}</div>
        <div className="board__tile">1,{row}</div>
        <div className="board__tile">2,{row}</div>
        <div className="board__tile">3,{row}</div>
        <div className="board__tile">4,{row}</div>
      </div>
    )
  }

  render(){

    const currentPos = this.props.robotPos.currentPos;
    const isPlaced = this.props.robotPos.isPlaced;

    const robStyle = {
      left: currentPos[0] * 20 + '%',
      top: 100 - (currentPos[1] * 20) + '%'
     };

    return (
      <div>
        <div className="board">
          {this.renderBoardRow(4)}
          {this.renderBoardRow(3)}
          {this.renderBoardRow(2)}
          {this.renderBoardRow(1)}
          {this.renderBoardRow(0)}
          <div className={`rob ${isPlaced ? "": "hidden"} ${currentPos[2]}`} style={robStyle}></div>
        </div>
      </div>
    )
  }

}
