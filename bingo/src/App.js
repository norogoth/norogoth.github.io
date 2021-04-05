import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

const bingoValueUrl = 'http://127.0.0.1:8000/bingo_values';

function bingoCell() {
  return (<button class="bingoButton">error</button>);
}

function BingoGrid(props) {
  return (
    <table id="bingoGrid">
      <tbody>
        <tr>
          <td id="0">{props.values["0"]}</td>
          <td id="1">{props.values["1"]}</td>
          <td id="2">{props.values["2"]}</td>
        </tr>
        <tr>
          <td id="3">{props.values["3"]}</td>
          <td id="4">{props.values["4"]}</td>
          <td id="5">{props.values["5"]}</td>
        </tr>
        <tr>
          <td id="6">{props.values["6"]}</td>
          <td id="7">{props.values["7"]}</td>
          <td id="8">{props.values["8"]}</td>
        </tr>
      </tbody>
    </table>
  )
}

function BingoPage(props) {
  const [bingoData, setBingoData] = useState({
  });

  const [values, setValues] = useState({
    0: "error",
    1: "error",
    2: "error",
    3: "error",
    4: "error",
    5: "error",
    6: "error",
    7: "error",
    8: "error",
  })

  function setRandomValues() {
    console.log('bingodata after srv call: ',bingoData);
    let newValues = values;
    let i;
    let numbersUsed = [];
    for (i=0; i < 9; i++){
      let isRepeat = true;
      while (isRepeat){
        const nextValue = Math.floor(Math.random() * bingoData.length);
        if (!numbersUsed.includes(nextValue)){
          isRepeat = false;
          newValues[i] = nextValue; 
        }
      }
    }
  }

  useEffect(() => {
    fetch(bingoValueUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data.data);
      setBingoData(data.data);
    })
  }, [])

  console.log('bingoData before component return',bingoData);
  console.log('bingoValues before component return',values);

  setRandomValues();return (
        <div className="App">
          <h1>Gus and Eddy Podcast Bingo</h1>
          <p>I like the Gus and Eddy Podcast. Eddy Burback is very cool!</p>
          <button>randomize!</button>
          <span>Bingo ID: </span><input id="bingoId"></input>
          <button>
            <Link to="/UserSubmissions">Submit a Bingo Option</Link>
          </button>
          <BingoGrid values={values} bingoData={bingoData}/>
        </div>
    );
}

function UserSubmissions() {
  return (
    <div id="userSubmissions">
      <h1>User Submissions</h1>
      <p>Here you can submit your own bingo values. Hopefully some day I can get upvoting and downvoting options as well.</p>
      <table>
        <tr>
          <th>name</th>
          <th>upvotes</th>
        </tr>
      </table>
    </div>
  )
}

function App() {
  

  return (
    <Router>
      <div>
        <Switch>
          <route path="/UserSubmissions">
            <UserSubmissions/>
          </route>
          <route path="/">
            <BingoPage/>
          </route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
