/*
Hooks: 
  -any functions that startts with "use" is called a hook.
  -they are special functions that are only available while Reach is rendering

To create a counter, where the value is increased as a function of time or at the click of the button

*/

import React from "react";

function GrandChildComponent({parentData}){
  console.log(`from grand child componenet :${parentData}`);

  return(
    <div>
      <h3>Grand Child Component</h3>
    </div>
  )
}



function ChildComponent({parentData}){
  console.log(`from Child Component ${parentData}`);
  return (
    <div>
        <h1>Child Component</h1>
        <GrandChildComponent parentData={parentData} />
    </div>
  )
}



function App() {

  const parentData = 'Hello from Parent';
  return(
    <div>
        <h1>Parent Component</h1>
        <ChildComponent parentData={parentData} />;
    </div>
  )
}

export default App;