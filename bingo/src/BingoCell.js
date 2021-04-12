import React, {useState, useEffect} from 'react';
import Head from './Head.js';

export default function BingoCell(props) {
  
  function getHead() {
    let headStrings = ['./eddy_head.png','./gus_head.png'];
    const headNum = Math.floor(Math.random() * 2);
    let chosenHead = headStrings[headNum];
    return (
      <img src={chosenHead} />
    );
  }

  function handleClick(id) {
    let newValues = [...props.values];
    if (newValues[id].isChecked === false){
      newValues[id].isChecked = true;
    }
    else if (newValues[id].isChecked === true){
      newValues[id].isChecked = false;
    }
    else {
      console.log("Error in BingoCell.handleClick, newValues[i].isChecked = ", newValues[id].isChecked);
    }
    props.setValues(newValues);
    console.log('values: ',props.values);
  }


  

  if(props.values[props.id].isChecked === false){
    return (
      <button onClick={() => handleClick(props.id)} className="bingoButton" id={props.id} setValues={props.setValues}>
        {props.displayedBD[props.id]}
      </button>);
  }
  else {
    return (
      <button onClick={() => handleClick(props.id)} className="bingoButton" id={props.id} setValues={props.setValues}>
        <Head id={props.id}/>
      </button>);
    }
  }