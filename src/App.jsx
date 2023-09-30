/*
Hooks: 
  -any functions that startts with "use" is called a hook.
  -they are special functions that are only available while Reach is rendering

To create a counter, where the value is increased as a function of time or at the click of the button

*/

import React, {useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  
  setTimeout(()=>{
    setCounter(counter+1);
  },1000)
  


  return (
    <div>{counter}</div>
  )
}

export default App;