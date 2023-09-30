/*
Hooks: 
  -any functions that startts with "use" is called a hook.
  -they are special functions that are only available while Reach is rendering

To create a counter, where the value is increased as a function of time or at the click of the button

*/

import React, {useEffect, useState} from "react";


function App() {
const [data, setData] = useState(null);  

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json())
    .then(result=>setData(result));
},[]);

console.log(data);

  return (
    <div>App</div>
  )
}

export default App;