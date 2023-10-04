// Statefull Components
import { Component } from "react";

// Stateful Components
class App extends Component{
  constructor(props){
    super(props); //To call the parent class constructor
  // define the state
    this.state = {
      count : 0,
    }
}

increament=()=>{
  this.setState({
    count:this.state.count + 1,
  })
}

  render(){
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increament}>Increment</button>
      </div>
    )
  }
}

export default App;