/*
Hooks: 
  -any functions that startts with "use" is called a hook.
  -they are special functions that are only available while Reach is rendering

To create a counter, where the value is increased as a function of time or at the click of the button

*/

import React, {useState} from "react";

function Display(props){
  console.log(props);
  return(
   <div>{props.counter}</div> 
  )
}


function App() {
  const [counter, setCounter] = useState(0);

  const handleClick=()=>{
    setCounter(counter+1);
  }
  const handleZero=()=>{
    setCounter(0);
  }
  const handleMinus=()=>{
  setCounter(counter--);
  }
  

  return (
    <div>
      <Display counter={counter}/>
      <button onClick={handleClick}>Plus</button>
      <button onClick={handleMinus}>Minus</button>
      <button onClick={handleZero}>Zero</button>
    </div>
  )
}

export default App;