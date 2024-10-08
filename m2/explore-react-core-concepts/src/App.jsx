import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from '../BookStore'

function App() {

  const actors = ['Sakib', 'Shoriful Raj', 'Jasim', 'Rubel', 'Salman Shah']
  const books = [
    {id: 1, name: 'Physics', price: 100},
    {id: 2, name: 'Math', price: 120},
    {id: 3, name: 'Chemistry', price: 130},
    {id: 4, name: 'Biology', price: 150}
  ]

  const singers = [
    {name: 'Dr. Mahfuj', age: 68},
    {name: 'Dr. Eva', age: 38},
    {name: 'Dr. Suvro Dev', age: 58},
    {name: 'Dr. Pritom', age: 28}
  ]

  return (
    <>

      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      {
        singers.map(singer => <Singer
          singer={singer}
        ></Singer>)
      }

      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      
      {/* <Device name="Laptop" price="55" ></Device>
      <Device name="Mobile" price="17" ></Device>
      <Device name="Watch" price="3" ></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="12" score="85"></Student>
      <Student ></Student>
      <Developer></Developer>
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Learn JS" isDone={false}></Todo> */}
      <Actor name={"Bappa Raj"}></Actor>


    </>
  )
}

function Device(props) {
  console.log(props)
  return (
    <h2>This device: {props.name} price: {props.price}</h2>
  )
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'Sakib', age: 12 }
  return <h3>I am {person.name} with age: {person.age + age}</h3>
}

const { grade, score } = { grade: '7', score: '99' };
function Student({ grade = 1, score = 0 }) {
  console.log(grade, score)
  return (

    <div className='student'>
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>score: {score}</p>
    </div>

  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '14px'
  }
  return (
    <div style={developerStyle}>
      <h5>Developers den</h5>
      <p>Coding: React</p>
    </div>

    // OR

    // <div style={{
    //   margin: '20px',
    //   padding: '20px',
    //   border: '2px solid purple',
    //   borderRadius: '14px'
    // }}>
    //   <h5>Developers den</h5>
    //   <p>Coding: React</p>
    // </div>
  )
}

export default App
