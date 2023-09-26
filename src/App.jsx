import './App.css';

const price = (plan,price)=>{
  return(
    <div className='header-div'><p className='plan'>{plan}</p>
      <h2>${price}/Month</h2>
    </div> 
  )
}

const free_plan = ()=>{
  return(
  <div>
    <ul style={{listStyleType:"none"}}>
      <li>Single User</li>
      <li>50GB Storage</li>
      <li>Unlimited Public Projects</li>
      <li>Community Access</li>
    </ul>
    <ul style={{listStyleType:"none"}}>
      <li>Unlimited Private Projects</li>
      <li>Dedicated Phone Support</li>
      <li>Free Subdomain</li>
      <li>Monthly Status Reports</li>
    </ul>
  </div>
)}

const plus_plan = ()=>{
  return(
  <div>
    <ul style={{listStyleType:"none"}}>
      <li>Single User</li>
      <li>50GB Storage</li>
      <li>Unlimited Public Projects</li>
      <li>Community Access</li>
      <li>Unlimited Private Projects</li>
      <li>Dedicated Phone Support</li>
      <li>Free Subdomain</li>
    </ul>
    <ul style={{listStyleType:"none"}}>
      <li>Monthly Status Reports</li>
    </ul>
  </div>
)}

const pro_plan = ()=>{
  return(
  <div>
    <ul style={{listStyleType:"none"}}>
      <li>Single User</li>
      <li>50GB Storage</li>
      <li>Unlimited Public Projects</li>
      <li>Community Access</li>
      <li>Unlimited Private Projects</li>
      <li>Dedicated Phone Support</li>
      <li>Free Subdomain</li>
      <li>Monthly Status Reports</li>
    </ul>
  </div>
)}





const App = ()=>{

  // Returns HTML
  return (
  <div id = 'flex' className='flex'>
      <div className='box'>
        {price('FREE',0)}
        {free_plan()}
      </div>
    <div className='box'>
        {price('PLUS',9)}
        {plus_plan()}
    </div>
    <div className='box'>
        {price('PRO',49)}
        {pro_plan()}
    </div> 
  </div>
)
}
export default App;

  // let inlineStyle = {
  //   color:'white',
  //   background:'red'
  // }
