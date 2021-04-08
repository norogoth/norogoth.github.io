import React, {useState, useEffect} from 'react';

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
    console.log(`${id} was clicked.`);
    let displayedBDCopy = props.displayedBD
    displayedBDCopy[id] = 5;
    
    console.log(props.displayedBD[id]);
  }
  
  return (<button onClick={() => handleClick(props.id)} className="bingoButton" id={props.id}>{props.displayedBD[props.id]}</button>);
  }