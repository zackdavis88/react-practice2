import React from 'react';
import TimeInput from './TimeInput';
import TimeDisplay from './TimeDisplay';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      timeInSeconds: 0
    };
    this.formatTime = this.formatTime.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  formatTime(){
    let timeInSeconds = this.state.timeInSeconds;
    const days = Math.floor(timeInSeconds / (60 * 60 * 24)); //Divide by seconds-in-a-day
    timeInSeconds -= days * (60 * 60 * 24); //Subtract the number of days-in-seconds from the total

    const hours = Math.floor(timeInSeconds / (60 * 60)); //Divide remainder by seconds-in-a-hour
    timeInSeconds -= hours * (60 * 60); //Subtract the number of hours-in-seconds from total

    const minutes = Math.floor(timeInSeconds / 60); //Divide by remainder by seconds-in-a-minute
    timeInSeconds -= minutes * 60; //Subtract the number of minutes-in-seconds from total

    const seconds = timeInSeconds; //Remainder of everything is seconds left.
    return `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  }

  updateTime(timeInSeconds){
    this.setState({
      timeInSeconds: timeInSeconds
    });
  }

  startTimer(){
    let timeInSeconds = this.state.timeInSeconds;
    const updateTime = this.updateTime;
    let interval = setInterval(function(){
      timeInSeconds--;
      updateTime(timeInSeconds);
      if(timeInSeconds === 0)
        clearInterval(interval);
    }, 1000);
  }

  render(){
    return (
      <div className="container text-center">
        <h1 className="font-weight-bold text-primary">ReactJS Countdown Timer</h1>
        <TimeInput updateTime={this.updateTime}/>
        <TimeDisplay formatTime={this.formatTime} startTimer={this.startTimer}/>
      </div>
    );
  }
};

export default App;
