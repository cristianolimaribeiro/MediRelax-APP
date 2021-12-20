import React from 'react'

function PlayerDetails(props) {
    return (
        <div className='song-details'> 
            <div className="song-img">
                <img src={props.song.img_src}alt='' />
            </div>
            <h2>{props.song.title}</h2>
            <h3>{props.song.artist}</h3>
        </div>
    )
}

export default PlayerDetails;
