import React from 'react';



export default class Log extends React.Component{

  constructor(props){
    super(props);
  }


  componentWillReceiveProps(nextProps){
    //check for incoming Prop changes
  }


  render(){

    const log = this.props.log;


    return (
      <div>
        <div>log: {log}</div>
      </div>
    )
  }

}
