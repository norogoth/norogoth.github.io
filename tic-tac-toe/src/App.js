import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function Box(props) {
  return (<button>{props.number}</button>); 
}
function PlayGrid(props){
  return (
    <div>
      <div>
        <Box number="1"/>
        <Box number="1"/>
        <Box number="1"/>
      </div>
      <div>
        <Box number="1"/>
        <Box number="1"/>
        <Box number="1"/>
      </div>
      <div>
        <Box number="1"/>
        <Box number="1"/>
        <Box number="1"/>
      </div>
    </div>
    );
}

function Game() {
  return (<PlayGrid/>);
}

function App(){
  return(<Game/>);
}

export default App;
