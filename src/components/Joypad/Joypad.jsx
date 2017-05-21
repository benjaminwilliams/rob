import React from 'react';
import movement from '../Robot/movement';



export default class Joypad extends React.Component{

  constructor(props){
    super(props);
    this.placeRobot = this.placeRobot.bind(this);
  }

  componentWillMount(){
  }



  placeRobot(event){
    event.preventDefault();

    //get the x,y,f coordinates
    const values = [
      parseInt(this.refs.x.value),
      parseInt(this.refs.y.value),
      this.refs.f.value
    ];

    // check to make sure placement is valid
    if(movement.moveIsValid(values[0], values[1])){
      this.props.setCurrentPos(values); // move robot to position
      this.props.sendInput("PLACE"); // set isPlaced status
    }
    else {
      this.props.printToLog("Can not place here");
    }

  }

  render(){

    return (
      <div className="joypad">
        <form onSubmit={this.placeRobot}>
          <label htmlFor="x">Position X</label>
          <input type="text" id="x" ref="x" defaultValue="0" />
          <label htmlFor="y">Position Y</label>
          <input type="text" id="y" ref="y" defaultValue="0" />
          <label htmlFor="f">Direction</label>
          <input type="text" id="f" ref="f" defaultValue="N" />
          <input type="submit" value="Place" />
        </form>
        <div onClick={()=>this.props.sendInput("LEFT")}>LEFT</div>
        <div onClick={()=>this.props.sendInput("RIGHT")}>RIGHT</div>
        <div onClick={()=>this.props.sendInput("MOVE")}>MOVE</div>
        <div onClick={()=>this.props.sendInput("REPORT")}>REPORT</div>
      </div>
    )
  }

}