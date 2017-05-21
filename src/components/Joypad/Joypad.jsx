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
        <form onSubmit={this.placeRobot} className="joypad__place">
          <h2>Place Robot</h2>
          <div className="joypad__input-group">
            <label htmlFor="x">Position X</label>
            <input type="text" id="x" ref="x" defaultValue="0" />
          </div>
          <div className="joypad__input-group">
            <label htmlFor="y">Position Y</label>
            <input type="text" id="y" ref="y" defaultValue="0" />
          </div>
          <div className="joypad__input-group">
            <label htmlFor="f">Direction</label>
            <input type="text" id="f" ref="f" defaultValue="N" />
          </div>
          <input type="submit" value="Place" />

        </form>
        <div className="joypad__move-wrapper">
          <h2> Control Robot </h2>
          <div className="joypad__move">
            <div className="move__direction move__direction--left" onClick={()=>this.props.sendInput("LEFT")}>LEFT</div>
            <div className="move__direction move__direction--right" onClick={()=>this.props.sendInput("RIGHT")}>RIGHT</div>
            <div className="move__direction move__direction--forward" onClick={()=>this.props.sendInput("MOVE")}>MOVE</div>
            <div className="move__report" onClick={()=>this.props.sendInput("REPORT")}>REPORT</div>
          </div>
        </div>
      </div>
    )
  }

}