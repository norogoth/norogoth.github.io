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
      console.log("BingoData during setRandomValues(): ",bingoData);
      let i;
      let numbersUsed = [];
      for (i=0; i < 25; i++){
        let isRepeat = true;
        while (isRepeat){
          const nextValue = Math.floor(Math.random() * bingoData.length);
          if (!numbersUsed.includes(nextValue)){
            isRepeat = false;
            newValues[i] = bingoData[nextValue].name;
          }
        }
      }
      setValues(newValues);
      setDisplayedBD(newValues);
      console.log("displayed values: ",displayedBD);
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
        console.log("bingoData: ",bingoData);
      })
    }, [])

    useEffect(() => {
      if (bingoData.length > 5) {
        setRandomValues();
      }
    }, [bingoData])
    
    return (
          <div className="App">
            <h1>Gus and Eddy Podcast Bingo</h1>
            <p>I like the Gus and Eddy Podcast. Eddy Burback is very cool!</p>
            <button>randomize!</button>
            <span>Bingo ID: </span><input id="bingoId"></input>
            <button>
              <Link to="/UserSubmissions">Submit a Bingo Option</Link>
            </button>
            <BingoGrid values={values} bingoData={bingoData} displayedBD={displayedBD}/>
          </div>
      );
  }