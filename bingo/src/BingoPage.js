import BingoGrid from './BingoGrid.js';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const bingoDbUrl = "http://127.0.0.1:8000/bingo_values";

export default function BingoPage(props) {

    function randomHead() {
      let eddyHeadPath = './eddy_head.png';
      let gusHeadPath = './gus_head.png';
    }

    const [didIWin, setDidIWin] = useState(false);
    console.log('didIWin at start of code:',didIWin);
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
  
    function setRandomValues() {
      let newdisplayedValues = [...values];
      let newValues = [...values];
      let i;
      let bdArray = [];
      for (i=0; i < bingoData.length; i ++){
        bdArray.push(i);
      }
      //shuffle bdArray
      for (i=bdArray.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [bdArray[i], bdArray[j]] = [bdArray[j],bdArray[i]];
      }
      for (i=0; i < 25; i++){
            newdisplayedValues[i] = bingoData[bdArray[i]].name;
            newValues[i].value = bingoData[bdArray[i]].name;
            newValues[i].isChecked = false;
          }
      setValues(newValues);
      setDisplayedBD(newdisplayedValues);
    }
  
    useEffect(() => {
      console.log("fetching bingo data.");
      fetch(bingoDbUrl)
      .then(res => {
        console.log('res: ',res);
        return res.json()
      })
      .then(data => {
        console.log("Here is the sql Data we found: ",data.data);
        setBingoData(data.data);
      })
    }, [])

    useEffect(() => {
      if (bingoData.length > 5) {
        setRandomValues();
      }
    }, [bingoData])
    
    function checkifBingo() {
      let winngingArrays = [
        [0,1,2,3,4],
        [5,6,7,8,9],
        [10,11,12,13,14],
        [15,16,17,18,19],
        [20,21,22,23,24],
        [0,5,10,15,20],
        [1,6,11,16,21],
        [2,7,12,17,22],
        [3,8,13,18,23],
        [4,9,14,19,24],
        [0,6,12,18,24],
        [4,8,12,16,20],
      ]
      let isWin = false;
      winngingArrays.forEach((arr, index) => {
        let fiveToWin = 0;
        let isThisArrayAWinner = null;
        arr.forEach((num, index) => {
          let isThatChecked = values[num].isChecked;
          if (isThatChecked === false) {
            isThisArrayAWinner = false;
            fiveToWin = -100;
          }
          else if (isThatChecked === true) {
            fiveToWin++;
          }
          if (fiveToWin === 5){
            isWin = true;
          }
        })
      })
      if (isWin){
        setDidIWin(true);
      }
      else {
        setDidIWin(false);
      }
      console.log("didIWin: ",didIWin);
    }
    
    useEffect(() => {
      checkifBingo();
    }, [values])

    return (
          <div className="App">
            <div className="bingoWrapper">
              <div className="bingoHeader">
                <h1>Gus and Eddy Podcast Bingo</h1>
                <p>I like the Gus and Eddy Podcast. Eddy Burback is very cool!</p>
                <button onClick={() => setRandomValues()}>randomize!</button>
                <span>Bingo ID: </span><input id="bingoId"></input>
                <button>
                  <Link to="/UserSubmissions">Submit a Bingo Option</Link>
                </button>
                <p>{didIWin ? 'You Won!': "no winner yet."}</p>
              </div>
              <BingoGrid values={values} setValues={setValues} bingoData={bingoData} setDisplayedBD={setDisplayedBD} displayedBD={displayedBD}/>
            </div>
          </div>
      );
  }