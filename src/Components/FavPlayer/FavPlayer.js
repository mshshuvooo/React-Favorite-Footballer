import React from 'react';
import './FavPlayer.css'

const FavPlayer = (props) => {
    return (
        <div className="single-fav-player">
            <img src={props.favPlayer.img} alt=""/>
            <div className="fav-player-info">
                <h4>{props.favPlayer.name}</h4>
                <p>{props.favPlayer.club}</p>
            </div>
        </div>
    );
};

export default FavPlayer;