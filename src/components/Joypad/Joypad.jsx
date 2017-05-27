import React from 'react';
import movement from '../Robot/movement';
import './JoyPad.css';



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
      parseInt(this.refs.x.value, 10),
      parseInt(this.refs.y.value, 10),
      this.refs.f.value.toUpperCase()
    ];

    // check to make sure placement is valid
    if(movement.moveIsValid(values[0], values[1])){
      if(!(values[2] === "N" || values[2] === "E" || values[2] === "S" || values[2] === "W")){
        this.props.printToLog("Invalid Direction, please use N, E, S, or W");
        return;
      }
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
        <form onSubmit={this.placeRobot} className="joypad__place">
          <h2>Place Robot</h2>
          <div className="joypad__input-group">
            <label htmlFor="x">Position X</label>
            <input type="text" id="x" ref="x" defaultValue="0" className="t-x-input"/>
          </div>
          <div className="joypad__input-group">
            <label htmlFor="y">Position Y</label>
            <input type="text" id="y" ref="y" defaultValue="0" className="t-y-input"/>
          </div>
          <div className="joypad__input-group">
            <label htmlFor="f">Direction</label>
            <input type="text" id="f" ref="f" defaultValue="N" className="t-f-input"/>
          </div>
          <input className="btn__place t-place" type="submit" value="Place" />

        </form>
        <div className="joypad__move-wrapper">
          <h2> Control Robot </h2>
          <div className="joypad__move">
            <div className="move__direction move__direction--left t-left" onClick={()=>this.props.sendInput("LEFT")}>LEFT</div>
            <div className="move__direction move__direction--right t-right" onClick={()=>this.props.sendInput("RIGHT")}>RIGHT</div>
            <div className="move__direction move__direction--forward t-move" onClick={()=>this.props.sendInput("MOVE")}>MOVE</div>
            <div className="move__report t-report" onClick={()=>this.props.sendInput("REPORT")}>REPORT</div>
          </div>
        </div>
      </div>
    )
  }

}