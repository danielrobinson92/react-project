/*
Hooks: 
  -any functions that startts with "use" is called a hook.
  -they are special functions that are only available while Reach is rendering

To create a counter, where the value is increased as a function of time or at the click of the button

*/

import React, { useEffect, useState } from "react";


function App() {

  const [count,setCount] = useState(0);
  
  useEffect(()=>{
    document.title = `Count: ${count}`;
  },[count])

  const handleIncrement =()=>{
    setCount(count +1);
  }

  console.log(count);

  return(
    <div>
      <h1>Document Title Change</h1>
      <button onClick={handleIncrement}>Change Count</button>
    </div>
  )
}

export default App;