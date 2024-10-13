
import Friends from '../Friends'
import Posts from '../Posts'
import Team from '../Team'
import Users from '../Users'
import './App.css'
import Counter from './Counter'

function App() {

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  } 

  return (
    <>
     
      <h3>React Core Concepts 2</h3>

      <Posts></Posts>

      <Friends></Friends>

      <Users></Users>
      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() =>{alert('third clicked')}}>third</button>
      {/* how to pass parameter */}
      <button onClick={()=>addToFive(3)}>Four</button>
      
    </>
  )
}

export default App
