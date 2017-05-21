import React from 'react';



export default class Robot extends React.Component{

  constructor(props){
    super(props)
  }


  componentWillReceiveProps(nextProps){
    //check for incoming Prop changes
    if(this.props.inputs !== nextProps.inputs){
      console.log(nextProps.inputs);
    }
  }

  render(){

    const currentPos = this.props.currentPos;


    return (
      <div>
        <div>Robot, current position: {currentPos}</div>
        <div onClick={()=> this.props.inputFinished()}>finished</div>
      </div>
    )
  }

}