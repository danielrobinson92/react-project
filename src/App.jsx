import { Component } from "react";

class Hello extends Component{
  render(){
    let {name} = this.props; 
    return <div>Hello {name}!</div>
  }
}

class App extends Component{
  render() {
    return(
      <div>
        <Hello name = "Daniel"/>
      </div>
    )
  }
}

export default App;