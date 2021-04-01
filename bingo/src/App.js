import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function bingoCell() {
  return (<button class="bingoButton">error</button>);
}

function BingoGrid(props) {
  return (
    <table id="bingoGrid">
      <tr>
        <td id="A1">{props.bingoData["A1"]}</td>
        <td id="A2">{props.bingoData["A2"]}</td>
        <td id="A3">{props.bingoData["A3"]}</td>
      </tr>
      <tr>
        <td id="B1">{props.bingoData["B1"]}</td>
        <td id="B2">{props.bingoData["B2"]}</td>
        <td id="B3">{props.bingoData["B3"]}</td>
      </tr>
      <tr>
        <td id="C1">{props.bingoData["C1"]}</td>
        <td id="C2">{props.bingoData["C2"]}</td>
        <td id="C3">{props.bingoData["C3"]}</td>
      </tr>
    </table>
  )
}

function App() {
  const [bingoData, setBingoData] = useState({
    A1: "error",
    A2: "error",
    A3: "error",
    B1: "error",
    B2: "error",
    B3: "error",
    C1: "error",
    C2: "error",
    C3: "error",
  });

  return (
    <div className="App">
      <h1>Gus and Eddy Podcast Bingo</h1>
      <p>I like the Gus and Eddy Podcast. Eddy Burback is very cool!</p>
      <button>randomize!</button>
      <span>Bingo ID: </span><input id="bingoId"></input>
      <BingoGrid bingoData={bingoData}/>
    </div>
  );
}

export default App;
