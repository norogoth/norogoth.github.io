import BingoGrid from './BingoGrid.js';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import bingoValueUrl from './App.js';

export default function BingoPage(props) {
  
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
      let newValues = values;
      console.log("New values: ", newValues);
      console.log("BingoData: ",bingoData);
      let i;
      let numbersUsed = [];
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
      setValues(newValues);
      console.log("values: ",values);
    }
  
    useEffect(() => {
      fetch(bingoValueUrl)
      .then(res => {
        console.log('wesult OwO: ', res);
        return res.json()
      })
      .then(data => {
        console.log("Here is the sql Data we found: ",data.data);
        setBingoData(data.data);
      })
      //setRandomValues();
    }, [])
  
    useEffect(() => {
      setRandomValues()
    }, )
  
    //setRandomValues();
    
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