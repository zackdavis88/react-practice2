import React from 'react';

class TimeInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    this.inputChange = this.inputChange.bind(this);
    this.submitTime = this.submitTime.bind(this);
  }

  inputChange(element){
    switch(element.target.id){
      case 'day-input':
        this.setState({days: element.target.value});
        break;
      case 'hour-input':   
        this.setState({hours: element.target.value});
        break;
      case 'minute-input': 
        this.setState({minutes: element.target.value});
        break;
      case 'second-input': 
        this.setState({seconds: element.target.value});
        break;
      default:
        console.log('this case should never happen');
    }
  }

  submitTime(element){
    element.preventDefault();
    let timeInSeconds = 0;
    const days = Number(this.state.days);
    const hours = Number(this.state.hours);
    const minutes = Number(this.state.minutes);
    const seconds = Number(this.state.seconds);

    timeInSeconds += (days * (60 * 60 * 24));
    timeInSeconds += (hours * (60 * 60));
    timeInSeconds += (minutes * 60);
    timeInSeconds += seconds;

    this.props.updateTime(timeInSeconds);
    // Maybe I should zero out the input? Maybe not.
    // this.setState({
    //   days: 0,
    //   hours: 0,
    //   minutes: 0,
    //   seconds: 0
    // });
  }

  render(){
    return (
      <div id="input-panel" className="container jumbotron">
        <div className="row">
          <div className="col-sm-3 text-center">
            <label htmlFor="day-input">Days: </label>
            <input id="day-input"
                   className="time-input" 
                   type="number" 
                   min="0" 
                   max="60"
                   value={this.state.days}
                   onChange={this.inputChange}/>
          </div>
          <div className="col-sm-3 text-center">
            <label htmlFor="hour-input">Hours: </label>
            <input id="hour-input" 
                   className="time-input" 
                   type="number" 
                   min="0" 
                   max="23"
                   value={this.state.hours}
                   onChange={this.inputChange}/>
          </div>
          <div className="col-sm-3 text-center">
            <label htmlFor="minute-input">Mins: </label>
            <input id="minute-input" 
                   className="time-input" 
                   type="number" 
                   min="0" 
                   max="59"
                   value={this.state.minutes}
                   onChange={this.inputChange}/>
          </div>
          <div className="col-sm-3 text-center">
            <label htmlFor="second-input">Secs: </label>
            <input id="second-input" 
                   className="time-input" 
                   type="number" 
                   min="0" 
                   max="59"
                   value={this.state.seconds}
                   onChange={this.inputChange}/>
          </div>
        </div>
        <div className="row">
          <br />
          <div className="col-sm-12 text-center">
            <button id="input-button" className="btn btn-outline-success font-weight-bold" onClick={this.submitTime}><i className="fas fa-plus-circle"></i> Submit Time</button>
          </div>
        </div>
      </div>
    );
  }
};

export default TimeInput;
