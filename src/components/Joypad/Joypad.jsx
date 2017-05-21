import React from 'react';



export default class Joypad extends React.Component{

  constructor(props){
    super(props);
    this.placeRobot = this.placeRobot.bind(this);
  }

  componentWillMount(){
  }



  placeRobot(event){
    event.preventDefault();

    const values = [
      parseInt(this.refs.x.value),
      parseInt(this.refs.y.value),
      this.refs.f.value
    ];

    this.props.setCurrentPos(values);
    this.props.sendInput("PLACE");


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