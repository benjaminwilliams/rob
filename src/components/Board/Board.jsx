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
        <div className="board__tile">{row},0</div>
        <div className="board__tile">{row},1</div>
        <div className="board__tile">{row},2</div>
        <div className="board__tile">{row},3</div>
        <div className="board__tile">{row},4</div>
      </div>
    )
  }

  render(){

    const currentPos = this.props.robotPos.currentPos;
    const robStyle = {
      left: currentPos[0] * 20 + '%',
      top: 100 - (currentPos[1] * 20) + '%',
      backgroundColor: "blue"
     };

    return (
      <div>
        <div className="board">
          {this.renderBoardRow(4)}
          {this.renderBoardRow(3)}
          {this.renderBoardRow(2)}
          {this.renderBoardRow(1)}
          {this.renderBoardRow(0)}
          <div className="rob" style={robStyle}></div>
        </div>
      </div>
    )
  }

}
