import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import UserSubmissions from './UserSubmissions.js';
import BingoPage from './BingoPage.js';

const bingoValueUrl = 'http://127.0.0.1:8000/bingo_values';

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
