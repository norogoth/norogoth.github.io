import React, {useState, useEffect} from 'react';

export default function BingoCell(props) {
    return (<button className="bingoButton" id={props.id}>{props.displayedBD[props.id]}</button>);
  }