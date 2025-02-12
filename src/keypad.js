import React from 'react'

const Keypad = ({onClickbutton,onClearbutton,onResult}) => {
  return (
    <div>
      <div>
      <button class="button-style" onClick={()=>{onClickbutton("7")}}>7</button>
      <button class="button-style" onClick={()=>{onClickbutton("8")}}>8</button>
      <button class="button-style" onClick={()=>{onClickbutton("9")}}>9</button>
      <button class="button-style operator" onClick={()=>{onClickbutton("/")}}>/</button>
      </div>
      <div>
      <button class="button-style" onClick={()=>{onClickbutton("4")}}>4</button>
      <button class="button-style" onClick={()=>{onClickbutton("5")}}>5</button>
      <button class="button-style" onClick={()=>{onClickbutton("6")}}>6</button>
      <button class="button-style operator" onClick={()=>{onClickbutton("*")}}>*</button>
      </div>
      <div>
      <button class="button-style" onClick={()=>{onClickbutton("1")}}>1</button>
      <button class="button-style" onClick={()=>{onClickbutton("2")}}>2</button>
      <button class="button-style" onClick={()=>{onClickbutton("3")}}>3</button>
      <button class="button-style operator" onClick={()=>{onClickbutton("+")}}>+</button>
      </div>
      <div>
      <button class="button-style" onClick={()=>{onClickbutton("0")}}>1</button>
      <button class="button-style operator" onClick={()=>{onResult()}}>=</button>
      <button class="button-style operator" onClick={()=>{onClearbutton()}}>C</button>
      <button class="button-style operator" onClick={()=>{onClickbutton("-")}}>-</button>
      </div>
    </div>
  )
}

export default Keypad
