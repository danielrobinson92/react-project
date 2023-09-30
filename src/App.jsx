/*
Hooks: 
  -any functions that startts with "use" is called a hook.
  -they are special functions that are only available while Reach is rendering

To create a counter, where the value is increased as a function of time or at the click of the button

*/

import React, {useState} from "react";
import Button from './components/Button'
import Display from './components/Display'


function App() {
  const [counter, setCounter] = useState(0);

  const handleClick=()=>{
    setCounter(counter+1);
  }
  const handleZero=()=>{
    setCounter(0);
  }
  const handleMinus=()=>{
  setCounter(counter-1);
  }
  

  return (
    <div>
      <Display counter={counter}/>
      <Button text='plus' handleClick = {handleClick}/>
      <Button text='minus' handleClick = {handleMinus}/>
      <Button text='zero' handleClick = {handleZero}/>
    </div>
  )
}

export default App;