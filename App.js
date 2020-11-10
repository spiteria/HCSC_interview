import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Guess } from './New'
import guess from './guess.json'
// import { getState } from 'react-redux'

function App(state) {
  let [animalName, setName] = useState('');
  let [clues, setClues] = useState([]);
  let [score, setScore] = useState(0);
  // const store = getState();

  const incrementScore = () => {
      setScore(this.state.score + 1);
  }

  const newCard = () => {
    setName();
    setClues();
  }
  
  setScore = (score) => {
    return score;
  }

  setName = () => {
    let answer = JSON.parse(guess.answer);
    return answer;
  }

  setClues = () => {
    let clue = [];
    for(let i = 0; i < 3; i++){
      clue.push(JSON.parse(guess.clues[i]))
    }
    return clue;
  }
    
  return (
    <div className="App">
      <header className="App-header">
        <Guess store={store} score={state.score}/>
      </header>
      <body>
        <h1>{this.state.animalName}</h1>
        {this.state.clues.map( (clue) => {
          return(
            <div>
              <p>{clue}</p><br/>
            </div>
          )
        })}
        <button onClick={incrementScore}>Point</button>
        <button onClick={newCard}>New Card</button>
      </body>
    </div>
  );
}

export default App;
