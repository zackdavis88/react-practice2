import React from 'react';

class TimeDisplay extends React.Component{
  render(){
    return (
      <div className="container">
        <h2 className="text-gold">{this.props.formatTime()}</h2>
        <button className="btn btn-outline-warning" onClick={this.props.startTimer}><i className="fas fa-clock"></i> Start Timer</button>
      </div>
    );
  }
};

export default TimeDisplay;
