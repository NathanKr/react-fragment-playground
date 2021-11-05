import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Person from './Person'

function App() {

  return (
    <div className="App">
      <Person firstName='Nathan' lastName='Krasney'/>
    </div>
  )
}

export default App
