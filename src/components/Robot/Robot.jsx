import React from 'react';



export default class Robot extends React.Component{

  constructor(props){
    super(props);
    this.executeInput = this.executeInput.bind(this);
  }

  rotateRight(current){

    let newDirection = "";
    switch(current){
      case "N":
        newDirection = "E";
        break;
      case "E":
        newDirection = "S";
        break;
      case "S":
        newDirection = "W";
        break;
      case "W":
        newDirection = "N";

    }
    return newDirection;
  }
  rotateLeft(current){

    let newDirection = "";
    switch(current){
      case "N":
        newDirection = "W";
        break;
      case "E":
        newDirection = "N";
        break;
      case "S":
        newDirection = "E";
        break;
      case "W":
        newDirection = "S";

    }
    return newDirection;
  }

  executeInput(input){

    // ignore input if robot is not on the table
    if(!this.props.robotPos.isPlaced){
      this.props.inputFinished();
      return false;
    }

    const currentPos = this.props.robotPos.currentPos;
    let newPos;
    let x = currentPos[0];
    let y = currentPos[1];
    let f = currentPos[2];

    switch (input){
      case 'PLACE':
        this.props.placeRobot(true);
        break;
      case 'RIGHT':
        f = this.rotateRight(f);
        break;
      case 'LEFT':
        f = this.rotateLeft(f);
        break;
      case 'REPORT':
        console.log("current position- x: " + x + ", y: " + y + ", Direction: " + f);
        break;
      default:
    }

    newPos = [x,y,f];

    this.props.setCurrentPos(newPos);
  }

  componentWillReceiveProps(nextProps){

    //check for incoming Prop changes
    if(this.props.inputs.length < nextProps.inputs.length){ //if the list of inputs grows
      if(nextProps.inputs[0] === "PLACE"){
        this.props.placeRobot(true);
        this.props.inputFinished();
        return false;
      }
      if(this.props.robotPos.isPlaced) {
        this.executeInput(nextProps.inputs[0]); // execute the first input in queue
        this.props.inputFinished(); // and then delete the first input in queue
      }
      else{
        this.props.inputFinished();
      }
    }
  }



  render(){

    const currentPos = this.props.robotPos.currentPos;


    return (
      <div>
        <div>{this.props.robotPos.isPlaced ? "Robot is placed" : "Robot is not placed"}</div>
        <div>Robot, current position: {currentPos}</div>
      </div>
    )
  }

}