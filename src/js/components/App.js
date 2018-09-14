import React from 'react';
import TimeInput from './TimeInput';

class App extends React.Component{
  render(){
    return (
      <div className="container text-center">
        <h1 className="font-weight-bold text-gold">ReactJS Countdown Timer</h1>
        <TimeInput />
      </div>
    );
  }
};

export default App;
