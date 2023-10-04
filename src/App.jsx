import React from 'react'

function Hello(props){
  return(
    <div>Hello, {props.name}!</div>

  )

}



function App() {
  return (
    <div>
      <Hello name = "Krish" />
    </div>
  )
}

export default App