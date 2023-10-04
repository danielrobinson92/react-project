import { Component } from "react";

class App extends Component{
// ComponentDidMount : Called after the component has been rendered to the DOM

  componentDidMount() {
    console.log('Component Mounted');
  }

//  called immediately after the component updated in DOM
// Called on state or prop changes
  componentDidUpdate(){
    console.log("Component state updated");
  }

  componentWillUnmount(){
    // invoked just before the compnent is removed from the DOM
    // Releasing memory of resources 
    // Detaching the events
    // Cancelling timers
  }

  render (){
    return <div>Hello</div>
  }
}

export default App;