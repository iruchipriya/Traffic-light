import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations:

//     Red light: 4000ms
//     Yellow light: 500ms
//     Green light: 3000ms

function App() {
  const [currentLight, setCurrentLight] = useState('red');

  useEffect(() => {
    const lightDuration = {
      red: 4000,
      yellow: 500,
      green: 3000,
    };

    const nextLight = {
      red: 'green',
      yellow: 'red',
      green: 'yellow',
    };

    const timer = setTimeout(() => {
      setCurrentLight(nextLight[currentLight]);
    }, lightDuration[currentLight]);

    return () => clearTimeout(timer);
  }, [currentLight]);

  return (
    <div className="traffic-light">
      <div
        className={`light red ${currentLight === 'red' ? 'active' : ''}`}
      ></div>
      <div
        className={`light yellow ${currentLight === 'yellow' ? 'active' : ''}`}
      ></div>
      <div
        className={`light green ${currentLight === 'green' ? 'active' : ''}`}
      ></div>
    </div>
  );
}

export default App;
