import React from 'react';



export default class Robot extends React.Component{

  constructor(props){
    super(props);
    this.executeInput = this.executeInput.bind(this);
    this.moveIsValid = this.moveIsValid.bind(this);
    this.moveRobot = this.moveRobot.bind(this);
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

  moveIsValid(x,y) {
    return x >= 0 && x <= 5 && y >= 0 && y <= 5;
  }

  moveRobot(currentPos){
    let x = currentPos[0];
    let y = currentPos[1];
    const f = currentPos[2];
    let newPos;
    switch(f){
      case "N":
        y = y+1;
        break;
      case "E":
        x = x+1;
        break;
      case "S":
        y = y-1;
        break;
      case "W":
        x = x-1;
        break;
    }


    if(this.moveIsValid(x,y)){
      return [x,y,f];
    }
    else {
      console.log('move is invalid!');
      return currentPos;
    }

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
        newPos = [x,y,f];
        break;
      case 'RIGHT':
        f = this.rotateRight(f);
        newPos = [x,y,f];
        break;
      case 'LEFT':
        f = this.rotateLeft(f);
        newPos = [x,y,f];
        break;
      case 'REPORT':
        console.log("current position- x: " + x + ", y: " + y + ", Direction: " + f);
        newPos = [x,y,f];
        break;
      case 'MOVE':
        this.moveRobot(currentPos);
        newPos = this.moveRobot(currentPos);
    }


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
    return (
      <div>
        <div>{this.props.robotPos.isPlaced ? "Robot is placed" : "Robot is not placed"}</div>
      </div>
    )
  }

}