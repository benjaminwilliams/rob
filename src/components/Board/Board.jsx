import React from 'react';



export default class Board extends React.Component{

  constructor(props){
    super(props);
  }


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