import React from 'react';

import movement from './movement';


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
        break;
      default:

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
        break;
      default:

    }
    return newDirection;
  }



  executeInput(input){

    console.log('hi');
    // ignore input if robot is not on the table
    if(!this.props.robotPos.isPlaced){
      this.props.printToLog('Robot has not been placed yet');
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
        this.props.printToLog(`current position: ${x},${y},${f.toUpperCase()}`);
        newPos = [x,y,f];
        break;
      case 'MOVE':
        newPos = movement.moveRobot(currentPos);
        if(newPos === currentPos){
          this.props.printToLog("move is invalid");
        }
        break;
      default:
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
        this.props.printToLog('Robot is not placed on board');
        this.props.inputFinished();
      }
    }
  }



  render() {
    return false;
  }

}