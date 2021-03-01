import './App.css';
import { useState } from 'react'


function Box(props) {
  return (<button className="cell" onClick={() => props.handleClick(props.index)}>{props.children}</button>); 
}
function PlayGrid(props){
  
  console.log("props in playgrid: " ,props);

  return (
    <div className="grid" id="playGrid">
        {props.history.squares.map( (cell, index) => {
          console.log("cell: ", cell);
          return (<Box index={index} handleClick={props.squareClick} key={index} className="cell">{cell}</Box>);
        })}
    </div>
    );
}

function Game() {
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [turnCount, setTurnCount] = useState("X");
  const [winner, setWinner] = useState(null);

  const moves = history.map((object, index) => {
    const description = index === 0 ? "Go to start" :  "Go to move " + (index - 1);
    return(<li>
      <button>{description}</button>
      </li>);
  }); //we will use a map feature that maps each move to a button.
  
  function didSomeoneWin(){
    const squares = history[history.length - 1].squares;
    console.log("history: ", history, " squares: ", squares);
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
        return squares[a]; // return the winner: X or O
      }
    })
    return null;
  }

  function squareClick(i){
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (squares[i]){
      return;
    }
    squares[i] = turnCount;
    console.log(i);
    setHistory(history.concat([{ squares: squares }]));
    if (!didSomeoneWin()){
      setTurnCount(history.length % 2 === 0 ? "O" : "X");   
    }
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
