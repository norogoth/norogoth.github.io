import BingoCell from './BingoCell.js';
import React, {useState, useEffect} from 'react';

export default function BingoGrid(props) {
    return (
      <table id="bingoGrid">
        <tbody>
          <tr>
            <td > <BingoCell id="0" values = {props.values} /></td>
            <td > <BingoCell id="1" values = {props.values} /></td>
            <td > <BingoCell id="2" values = {props.values} /></td>
            <td > <BingoCell id="3" values = {props.values} /></td>
            <td > <BingoCell id="4" values = {props.values} /></td>
          </tr>
          <tr>
            <td > <BingoCell id="5" values = {props.values} /></td>
            <td > <BingoCell id="6" values = {props.values} /></td>
            <td > <BingoCell id="7" values = {props.values} /></td>
            <td > <BingoCell id="8" values = {props.values} /></td>
            <td > <BingoCell id="9" values = {props.values} /></td>
          </tr>
          <tr>
            <td > <BingoCell id="10" values = {props.values} /></td>
            <td > <BingoCell id="11" values = {props.values} /></td>
            <td > <BingoCell id="12" values = {props.values} /></td>
            <td > <BingoCell id="13" values = {props.values} /></td>
            <td > <BingoCell id="14" values = {props.values} /></td>
          </tr>
          <tr>
            <td > <BingoCell id="15" values = {props.values} /></td>
            <td > <BingoCell id="16" values = {props.values} /></td>
            <td > <BingoCell id="17" values = {props.values} /></td>
            <td > <BingoCell id="18" values = {props.values} /></td>
            <td > <BingoCell id="19" values = {props.values} /></td>
          </tr>
          <tr>
            <td > <BingoCell id="20" values = {props.values} /></td>
            <td > <BingoCell id="21" values = {props.values} /></td>
            <td > <BingoCell id="22" values = {props.values} /></td>
            <td > <BingoCell id="23" values = {props.values} /></td>
            <td > <BingoCell id="24" values = {props.values} /></td>
          </tr>
        </tbody>
      </table>
    )
  }