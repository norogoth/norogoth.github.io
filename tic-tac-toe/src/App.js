import './App.css';
import { useState } from 'react'

function Box(props) {
  return (<button className="cell" onClick={() => props.handleClick(props.index)}>{props.children}</button>); 
}
function PlayGrid(props){
  
  console.log("props in playgrid: " ,props);

  return (
    <div className="grid" id="playGrid">
        {/* <Box y/>
        <Box handleClick={props.squareClick} className="cell" number="2"/>
        <Box handleClick={props.squareClick} className="cell" number="3"/>
        <Box handleClick={props.squareClick} className="cell" number="4"/>
        <Box handleClick={props.squareClick} className="cell" number="5"/>
        <Box handleClick={props.squareClick} className="cell" number="6"/>
        <Box handleClick={props.squareClick} className="cell" number="7"/>
        <Box handleClick={props.squareClick} className="cell" number="8"/>
        <Box handleClick={props.squareClick} className="cell" number="9"/> */}
        {props.history.squares.map( (cell, index) => {
          console.log("cell: ", cell);
          return (<Box index={index} handleClick={props.squareClick} key={index} className="cell">{cell}</Box>);
        })}
    </div>
    );
}

function Game() {
  //debugger;
  // const [history, setHistory] = useState({0: Array(9).fill(null)});
  // const [stepNumber, setStepNumber] = useState(1);
  // const [xIsNext, setXIsNext] = useState(true);

  // function squareClick(i) {
  //   console.log("History: " + JSON.stringify(history));
  //   let historyCopy = {}
  //   for (let key in history){
  //     historyCopy[key] = history[key];
  //   }
  //   let latestHistory = historyCopy[stepNumber - 1].slice();
  //   latestHistory[i] = xIsNext ? "X" : "O";
  //   console.log("latestHistory: ",latestHistory);
  //   historyCopy[stepNumber] = latestHistory; //This is where the new history should be inserted
  
  //   setHistory(historyCopy);
  //   setStepNumber(stepNumber + 1);
  //   setXIsNext(!xIsNext);

  //     console.log("New History: " + JSON.stringify(history));
  // }

  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  
  const turnCount = history.length % 2 == 0 ? "O" : "X";

  function squareClick(i){
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    squares[i] = turnCount;
    console.log(i);
    setHistory(history.concat([{ squares: squares }]));
  }


    //OLD SQUARES CLICKED function
    // let latestStep = history[history.length-1];//copy latest history from state
    // latestStep["squares"][i] = history.length % 2 == 0 ? "O":"X"//edit latest history with latest move
    // const newHistory = history.concat(latestStep); //append the latest history to my copy of history.
    // console.log(newHistory);
    // setHistory(newHistory); //Set history to that ^



  return (<PlayGrid squareClick={squareClick} history={history[history.length - 1]}/>);
}

function App(){
  return(<Game/>);
}

export default App;
