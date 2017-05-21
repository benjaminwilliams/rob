import React from 'react';



export default class Robot extends React.Component{

  constructor(props){
    super(props)
  }

  componentWillMount(){
  }


  render(){

    const currentPos = this.props.currentPos;


    return (
      <div>Robot, current position: {currentPos}</div>
    )
  }

}