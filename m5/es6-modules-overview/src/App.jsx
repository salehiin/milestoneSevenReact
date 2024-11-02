
import Sunglass from './components/Sunglass/Sunglass'
import Watch from './components/Watch/Watch'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [watches, setWatches] = useState([]);

  useEffect(() =>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data));
  }, [])

  // const watches = [
  //   {id: 1, name: 'Apple Watch', price: 200},
  //   {id: 2, name: 'Samsu Watch', price: 200},
  //   {id: 3, name: 'MI Watch', price: 200},
  // ]

  return (
    <>
      <h1>Module 5</h1>
      {
        watches.map(watch =><Watch key={watch.id} watch={watch}></Watch>)
      }
      {/* <Sunglass></Sunglass> */}
      {/* <Watch></Watch> */}
    </>
  )
}

export default App
