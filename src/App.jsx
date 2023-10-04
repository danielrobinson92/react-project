import { Component } from "react";

class Hello extends Component{
  render(){
    let {name, age} = this.props; 
    return <div>Hello {name}!, your age is {age}</div>
  }
}

class App extends Component{
  render() {
    return(
      <div>
        <Hello name = "Daniel" age = "25"/>
      </div>
    )
  }
}

export default App;