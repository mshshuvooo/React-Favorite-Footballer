import React, { useState, useEffect } from 'react';
import './App.css';
import Player from './Components/Player/Player';
import FavPlayer from './Components/FavPlayer/FavPlayer';


function App() {
  

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mshshuvooo/React-Favorite-Footballer/master/src/data.json')
    .then(res => res.json())
    .then(res => setPlayers(res))
  }, []);

  const [favPlayers, setFavPlayers] = useState([]);

  useEffect(() => {
    const myFavPlayersData = localStorage.getItem("myFavPlayers");
    if( myFavPlayersData ){
      setFavPlayers( JSON.parse(myFavPlayersData) )
    }
  }, []);

  
  
  
  
  const addToFavHandelar = (player) => {
    const newFavPlayer = [...favPlayers, player]
    setFavPlayers(newFavPlayer);
    localStorage.setItem("myFavPlayers", JSON.stringify(newFavPlayer))
  }



  const removeFavHandelar = (player) => {
    const myFavPlayersData = JSON.parse( localStorage.getItem("myFavPlayers") )
    const newFavPlayer = myFavPlayersData.filter( x => x.id !== player.id )
    setFavPlayers(newFavPlayer)
    localStorage.setItem("myFavPlayers", JSON.stringify(newFavPlayer))
    
    
  }

 


  

  return (
    <div className="App">
      <div className="players-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {players.map( player => <Player key={player.id} player={player} favPlayers={favPlayers} addToFavHandelar={addToFavHandelar} removeFavHandelar={removeFavHandelar} /> )}
              </div>
            </div>
            <div className="col-lg-4">
            <h3>My Favorite Player</h3>
              {
                favPlayers.map( favPlayer => <FavPlayer key={favPlayer.id} favPlayer={favPlayer} /> )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
