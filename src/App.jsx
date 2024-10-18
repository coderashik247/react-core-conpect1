import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer  from './Singer'
import BookStore  from './BookStore'

function App() {
  const books= [
    {id: 1, name: 'Physics', teacherName: 'Ariful'},
    {id: 2, name: 'Math', teacherName: 'Ashik'},
    {id: 3, name: 'Chemistry', teacherName: 'Shawon'},
    {id: 4, name: 'Biology', teacherName: 'Mg Tanmoy'}
  ]


  const actors = ['Shakib Khan', 'Shariful Raj', 'Jasim', 'Rubel', 'Salman Shah', 'Superstar JEET']

  const singers =[
    {id:"1", name: 'Dr. Mahzarul', age: 26},
    {id:"2", name: 'Shawon', age: 25},
    {id:"3", name: 'Ariful', age: 28},
    {id:"4", name: 'Mg Tanmoy', age: 24}
  ]

  return (
    <>
      <h3>Vite + React</h3>
      <BookStore books={books}></BookStore>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Todo
        task="learn React"
        isDone={true}></Todo>
      <Todo
        task="Core Concepts"
        isDone={false}></Todo>
      <Todo
        task="Try JSX"
        isDone={true}></Todo> */}

      {/* <Device name="Laptop" price="36K" ></Device>
      <Device name="Mobile" price="19K"></Device>
      <Device name="Watch" price="3K" ></Device>
      <Developer></Developer>
      <Person></Person>
      <Student grade="7" score="99" ></Student>
      <Student grade="10" score="89" ></Student>
      <Student grade="11" score="79" ></Student>
      <Student></Student> */}
    </>
  )
}

function Person() {
  const age = 25;
  const money = 300;
  const person = { name: "Ashik", age: 24 }
  return (
    <h3>I am {person.name}. I am {person.age} years old. Now I have {money} TK only </h3>
  )
}

function Device(props) {

  return (
    <div>
      <h2>This device: {props.name}, Price: {props.price}</h2>
    </div>
  )
}

function Student({ grade = 1, score = 50 }) {
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }

  return (
    <div style={developerStyle}>
      <h4>Developer</h4>
      <p>Coding</p>
    </div>
  )
}


export default App
