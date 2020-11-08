import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Guess } from './New'


function App() {
  [animalName, setName] = useState('');
  [clue1, setClue1] = useState('');
  [clue2, setClue2] = useState('');
  [clue3, setClue3] = useState('');

  JSON.parse()
  return (
    <div className="App">
      <header className="App-header">
        <Guess />
      </header>
      <body>
        <h1>{state.animalName}</h1>
        <p>{state.clue1}</p><br/>
        <p>{state.clue2}</p><br/>
        <p>{state.clue3}</p><br/>
      </body>
    </div>
  );
}

export default App;
