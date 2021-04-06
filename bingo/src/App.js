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
          <td id="0">{props.values[0].value}</td>
          <td id="1">{props.values["1"].value}</td>
          <td id="2">{props.values["2"].value}</td>
          <td id="3">{props.values["3"].value}</td>
          <td id="4">{props.values["4"].value}</td>
        </tr>
        <tr>
          <td id="5">{props.values["5"].value}</td>
          <td id="6">{props.values["6"].value}</td>
          <td id="7">{props.values["7"].value}</td>
          <td id="8">{props.values["8"].value}</td>
          <td id="9">{props.values["9"].value}</td>
        </tr>
        <tr>
          <td id="10">{props.values["10"].value}</td>
          <td id="11">{props.values["11"].value}</td>
          <td id="12">{props.values["12"].value}</td>
          <td id="13">{props.values["13"].value}</td>
          <td id="14">{props.values["14"].value}</td>
        </tr>
        <tr>
          <td id="15">{props.values["15"].value}</td>
          <td id="16">{props.values["16"].value}</td>
          <td id="17">{props.values["17"].value}</td>
          <td id="18">{props.values["18"].value}</td>
          <td id="19">{props.values["19"].value}</td>
        </tr>
        <tr>
          <td id="20">{props.values["20"].value}</td>
          <td id="21">{props.values["21"].value}</td>
          <td id="22">{props.values["22"].value}</td>
          <td id="23">{props.values["23"].value}</td>
          <td id="24">{props.values["24"].value}</td>
        </tr>
      </tbody>
    </table>
  )
}


function BingoPage(props) {
  const [bingoData, setBingoData] = useState({});

  const [displayedBD, setDisplayedBD] = useState({})

  const [values, setValues] = useState([
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
    {"value":"error","isChecked":false},
  ])  

console.log("value of zero: ", values["0"].value);

  function setRandomValues() {
    console.log('bingodata after srv call: ',bingoData);
    let newValues = values;
    let i;
    let numbersUsed = [];
    console.log("values.length", values.length);
    for (i=0; i < 25; i++){
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

  setRandomValues();
  
  return (
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
    <Router id="router">
      <div>
        <Switch>
          <Route path="/UserSubmissions">
            <UserSubmissions/>
          </Route>
          <Route path="/">
            <BingoPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
