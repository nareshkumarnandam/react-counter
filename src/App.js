import React, { useRef, useState } from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);
  const step = useRef(1);
  const setStep = (count) => {
    step.current = count;
  };


  const increment = () => {
    setCount((prev) => prev + step.current);
  }
  const decrement = () => {
    setCount((prev) => prev - step.current);
  }
  return (
    <div className='App'>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <label htmlFor="step">Increment/Decrement by</label>
      <input type="number"
          id="step" 
          defaultValue={step.current}
          onChange={(e) => setStep(e.target.valueAsNumber)} />
      <button onClick={()=>{
        setCount(0);
      }}>Reset</button>
    </div>
  )
}

export default App
