import './App.css';
import React, { useState, useRef } from 'react'


// **** helper functions 
const padTime = (time) => {
  return time.toString().padStart(2, '0');
}

console.log('before the component')

const App = () => {
  let timerInterval = useRef(null);

  // time left is in seconds 
  const [timeLeft, settimeLeft] = useState(25 * 60); 
  const [running, setrunning] = useState(false);

  const handleStart = () => {
    setrunning(true);
    timerInterval.current = setInterval(() => {
      settimeLeft((timeLeft) => {
        if (timeLeft === 0) {
          clearInterval(timerInterval.current);
          return 0
        }
        else return timeLeft - 1;
      });
    }, 1000);
  }


  const handleStop = () => {
    setrunning(false);
    clearInterval(timerInterval.current);
  }
  const handleReset = () => {
    setrunning(false);
    clearInterval(timerInterval.current);
    settimeLeft(25 * 60)
  }
  
  // calculating minutes from total time left
  const minutes = padTime(Math.floor(timeLeft / 60))

  // calculatind seconds from the total time left
  const seconds = padTime(timeLeft - (minutes*60));

  return (
    <div>
        <div style={{ fontSize : "2rem", margin :"10px" }}>
            <span>{minutes}</span>
            <span>:</span>
            <span>{ seconds }</span>
        </div>
      <div>
        {!running && <button style={{ margin : "10px"}} onClick={handleStart}>Start</button>}
        {running && <button style={{ margin: "10px" }} onClick={handleStop}>Stop</button>}
        {timeLeft !== 25 * 60 && <button style={{ margin: "10px" }} onClick={handleReset}>Reset</button> }
      </div>
    </div>
  )
}

export default App

