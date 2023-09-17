// First component program
// Javascript program
// for now it does not receive any arguments
const App = ()=>{
  const now = new Date();
  const a = 10;
  const b = 20;

  console.log(a+b);
  //  it can also execute or contain js code
  // console.log("Hello from component app")

  // Returns HTML
  return (
  <div>
    <p>Hello world, it is {now.toString()}</p>
    <p> {a} + {b} = {a+b}</p>
  </div>
)
}
export default App;