import React from 'react';



export default class Log extends React.Component{

  render(){

    const log = this.props.log;


    return (
      <div className="message-log">

        <div>log: {log}</div>
      </div>
    )
  }

}
