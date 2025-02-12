import React, { useState } from 'react'
import Keypad from './keypad'
import './App.css'

const App = () => {
  const [input,setInput]=useState("");
  const onClickbutton=(value)=>{
    setInput(input+value);
  }
  const onClearbutton=()=>{
    setInput("");

  }
  const onResult=()=>{
    const output=eval(input)

    setInput(output)
  }
  return (
    <div className='container'>
      <h1> Calculator App</h1>
      <div className="calculator">
       <input type="text"  value={input} className="inputContainer"/>
       <Keypad onClickbutton={onClickbutton} onClearbutton={onClearbutton} onResult={onResult}/>
      </div>
    </div>
  )
}

export default App
