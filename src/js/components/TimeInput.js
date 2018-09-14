import React from 'react';

class TimeInput extends React.Component{
  render(){
    return (
      <div id="input-panel" className="container jumbotron">
        <div className="row">
          <div className="col-sm-3 text-center">
            <label htmlFor="day-input">Days: </label>
            <input id="day-input" className="time-input" type="number" min="0" max="60"/>
          </div>
          <div className="col-sm-3 text-center">
            <label htmlFor="hour-input">Hours: </label>
            <input id="hour-input" className="time-input" type="number" min="0" max="23"/>
          </div>
          <div className="col-sm-3 text-center">
            <label htmlFor="minute-input">Mins: </label>
            <input id="minute-input" className="time-input" type="number" min="0" max="59"/>
          </div>
          <div className="col-sm-3 text-center">
            <label htmlFor="second-input">Secs: </label>
            <input id="second-input" className="time-input" type="number" min="0" max="59"/>
          </div>
        </div>
        <div className="row">
          <br />
          <div className="col-sm-12 text-center">
            <button id="input-button" className="btn btn-outline-success font-weight-bold"><i class="fas fa-plus-circle"></i> Submit Time</button>
          </div>
        </div>
      </div>
    );
  }
};

export default TimeInput;
