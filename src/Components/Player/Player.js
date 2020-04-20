import React, { useState } from 'react';
import './Player.css';

const Player = (props) => {
    const{img, dateOfBirth, position, shirtNumber, club, country} = props.player;
    
    
    return (        
        <div className="col-lg-6">
            <div className="player-card">
                <div className="player-profile-pic">
                    <img src={img} alt=""/>
                </div>
                <h3>{props.player.name}</h3>
                <div className="player-meta">
                    <p><strong>Date of Birth:</strong> {dateOfBirth}</p>
                    <p><strong>Position:</strong> {position}</p>
                    <p><strong>Shirt Number:</strong> {shirtNumber}</p>
                    <p><strong>Club:</strong> {club}</p>
                    <p><strong>Country:</strong> {country}</p>
                </div>
                    
                

                <button onClick={() => props.addToFavHandelar(props.player)}>Add to favorite</button>
                <button onClick={() => props.removeFavHandelar(props.player)}>Remove from favorite</button> 
   
                
               
            </div>
        </div>
    );
};

export default Player;