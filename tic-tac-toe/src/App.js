import './App.css';
import { useState, useEffect } from 'react'


function Box(props) {
  return (<button className="cell" onClick={() => props.handleClick(props.index)}>{props.children}</button>); 
}
function PlayGrid(props){
  
  //console.log("props in playgrid: " ,props);

  return (
    <div className="grid" id="playGrid">
        {props.history.squares.map( (cell, index) => {
          //console.log("cell: ", cell);
          return (<Box index={index} handleClick={props.squareClick} key={index} className="cell">{cell}</Box>);
        })}
    </div>
    );
}

function Game() {
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [turnCount, setTurnCount] = useState("X");
  const [winner, setWinner] = useState(null);
  useEffect(()=>{
      setTurnCount(history.length % 2 === 0 ? "O" : "X");   
  }, [history])

  const moves = history.map((object, index) => {
    const description = index === 0 ? "Go to start" :  "Go to move " + (index);
    return(<li>
      <button onClick = {() => jumpTo(index + 1)} className="jumpButton">{description}</button>
      </li>);
  }); //we will use a map feature that maps each move to a button.
  
  function didSomeoneWin(squares){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [6,4,2],
    ];
    lines.forEach((line) => {
      const [a,b,c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
        setWinner(squares[a]); // return the winner: X or O
      }
    })
  }

  function squareClick(i){
    console.log("Turncount: ", turnCount, " history.length: ",history.length);
    if (winner !== "X" && winner !== "O"){
      setTurnCount(history.length % 2 === 0 ? "X" : "O");   
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (squares[i]){
        return;
      }
      squares[i] = turnCount;
      console.log(i);
      setHistory(history.concat([{ squares: squares }]));
      didSomeoneWin(squares);
    }
  }

  function jumpTo(i) {
    const newHistory = history.slice(0, i);
    setHistory(newHistory);
    setWinner(null);
    setTurnCount(newHistory.length % 2 === 0 ? "X" : "O");   
  }

  return (
  <div className="row">
    <div className="column">
      <div>Current Turn: {turnCount}</div>
      <ol>{moves}</ol>
    </div>
    <div className="column">
      <PlayGrid squareClick={squareClick} history={history[history.length - 1]}/>
    </div>
  </div>
  );
}

function App(){
  return(<Game/>);
}

export default App;
