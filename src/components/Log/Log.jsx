import React from 'react';
import './log.scss';


export default class Log extends React.Component{

  constructor(props){
    super(props);
    this.renderLogItem = this.renderLogItem.bind(this);
  }


  renderLogItem(message){
    return (
      <div> > {message}</div>
    )

  }

  render(){

    const log = this.props.log;


    return (
      <div className="message-log">
        <h2>Message log</h2>
        {log.map(message => this.renderLogItem(message))}
      </div>
    )
  }

}
