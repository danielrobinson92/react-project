import './App.css';

const Hello = (props)=>{
  console.log(props);
  return(
    <div>
      <p>Hello {props.name}, your age is {props.age}</p>
    </div>
  )
}

const App = ()=>{

  let inlineStyle = {
    color:'white',
    background:'red'
  }

  // Returns HTML
  return (
  <div>
    <h1 style={{color:"white", background:"green"}}> Greetings</h1>
    <Hello style={inlineStyle}name ="Daniel" age ="30" />
    <Hello name ="Darwin" age ="28" />
  </div>
)
}
export default App;