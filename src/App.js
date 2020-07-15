import React from 'react';
import './App.css';
import Predictor from './components/Predictor';

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center"><strong>"PICO Y PLACA" PREDICTOR</strong></h1>
      <h3 className="mt-4">On this app you would know if you can or can't take your car for a spin</h3>
      <Predictor/>
    </div>
  );
}

export default App;
