import React from 'react' 
import ReactDOM from 'react-dom'
import Fader from './Fader'
import Todo from './Todo'
import BaseComponent from "./youtube/Base"

ReactDOM.render(
  <BaseComponent />, 
  // <Todo />,
  document.querySelector("#root")
)