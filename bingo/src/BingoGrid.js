import BingoCell from './BingoCell.js';
import React, {useState, useEffect} from 'react';

export default function BingoGrid(props) {

  function checkifBingo() {
    let winngingArrays = [
      [0,1,2,3,4],
      [5,6,7,8,9],
      [10,11,12,13,14],
      [15,16,17,18,19],
      [20,21,22,23,24],
      [0,5,10,15,20]
      ]
  }

  return (
    <table id="bingoGrid">
      <tbody>
        <tr>
          <td > <BingoCell id="0" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="1" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="2" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="3" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="4" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
        </tr>
        <tr>
          <td > <BingoCell id="5" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="6" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="7" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="8" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="9" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
        </tr>
        <tr>
          <td > <BingoCell id="10" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="11" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="12" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="13" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="14" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
        </tr>
        <tr>
          <td > <BingoCell id="15" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="16" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="17" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="18" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="19" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
        </tr>
        <tr>
          <td > <BingoCell id="20" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="21" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="22" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="23" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
          <td > <BingoCell id="24" displayedBD = {props.displayedBD} setValues={props.setValues} values={props.values}/></td>
        </tr>
      </tbody>
    </table>
  )
}