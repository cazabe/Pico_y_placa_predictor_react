import React from 'react';
import './App.css';
import Predictor from './components/Predictor';

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center"><strong>"PICO Y PLACA" PREDICTOR</strong></h1>
      <h3 className="mt-4">On this app you would know if you can or can't take your car out for a spin</h3>
      <h3><strong>Rules of pico y placa</strong></h3>
      <ul>
        <li>Cars that have the plate number can't go out between hours <strong>7:00 to 9:30 and 16:00 to 19:30</strong></li>
        <h3>Days:</h3>
        <li>Monday |1-2|</li>
        <li>Tuesday |3-4|</li>
        <li>Wednesday |5-6|</li>
        <li>Thursday|7-8|</li>
        <li>Friday |9-0|</li>
      </ul>
      <Predictor/>
    </div>
  );
}

export default App;
