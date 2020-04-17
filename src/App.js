import React, { useState, useEffect } from 'react';
import './App.css';
import Player from './Components/Player/Player';


function App() {
  

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mshshuvooo/React-Favorite-Footballer/master/src/data.json')
    .then(res => res.json())
    .then(res => setPlayers(res))
  }, []);

  return (
    <div className="App">
      <div className="players-wrapper">
        <div className="container">
          <div className="row">
            {players.map( player => <Player player={player} /> )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
