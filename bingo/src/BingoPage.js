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
      let newValues = [...values];
      let i;
      let numbersUsed = [];
      let bdArray = [];
      for (i=0; i < bingoData.length; i ++){
        bdArray.push(i);
      }
      //shuffle bdArray
      for (i=bdArray.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [bdArray[i], bdArray[j]] = [bdArray[j],bdArray[i]];
      }
      console.log("bdArrayRandomized", bdArray);
      for (i=0; i < 25; i++){
            newValues[i] = bingoData[bdArray[i]].name;
          }
      setValues(newValues);
      setDisplayedBD(newValues);
      console.log("values: ", displayedBD);
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
            <button onClick={() => setRandomValues()}>randomize!</button>
            <span>Bingo ID: </span><input id="bingoId"></input>
            <button>
              <Link to="/UserSubmissions">Submit a Bingo Option</Link>
            </button>
            <BingoGrid values={values} bingoData={bingoData} setDisplayedBD={setDisplayedBD} displayedBD={displayedBD}/>
          </div>
      );
  }