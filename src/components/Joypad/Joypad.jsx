import React from 'react';



export default class Joypad extends React.Component{

  constructor(props){
    super(props)
  }

  componentWillMount(){
  }


  render(){

    return (
      <div>
        <div onClick={()=>this.props.sendInput("LEFT")}>LEFT</div>
        <div onClick={()=>this.props.sendInput("RIGHT")}>RIGHT</div>
        <div onClick={()=>this.props.sendInput("MOVE")}>MOVE</div>
        <div onClick={()=>this.props.sendInput("PLACE")}>PLACE 0,0,N</div>
        <div onClick={()=>this.props.sendInput("REPORT")}>REPORT</div>
      </div>
    )
  }

}