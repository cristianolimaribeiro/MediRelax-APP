import React, {useState, useRef, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSpa } from '@fortawesome/free-solid-svg-icons'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'

function Player(props) {
    const audioEl = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() =>{
        if(isPlaying){
            audioEl.current.play()
        }
        else{
            audioEl.current.pause()
        }
    })

    const SkipSong = (forwards = true) => {
        if(forwards){
            props.setCurrentSongIndex(() =>{
                let temp = props.currentSongIndex
                temp++

                if(temp > props.songs.length - 1){
                    temp = 0
                }
                return temp
            })
        }
        else {
            props.setCurrentSongIndex(() =>{
                let temp = props.currentSongIndex
                temp--

                if(temp < 0){
                    temp = props.songs.length -1
                }

                return temp
            })
        }
    }
    return (
        <div className='player'>
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>Now Playing</h4>
            <div className='logo-position'>
                <div className='logo'>
                    <FontAwesomeIcon icon={faSpa} />   
                </div>    
            </div>  

            <PlayerDetails 
                song={props.songs[props.currentSongIndex]}
            />
            <PlayerControls 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying} 
                SkipSong={SkipSong}
            />
            <div className="next-up">
                <p>Próxima Musica: <span>{props.songs[props.nextSongIndex].title} de <strong>{props.songs[props.nextSongIndex].artist}</strong></span></p>
            </div>
        </div>
    )
}

export default Player
