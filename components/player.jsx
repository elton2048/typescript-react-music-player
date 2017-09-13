import React from 'react'

import ClassNames from 'classnames'

let Player = (props) => {

    const playPauseClass = ClassNames({
        'fa fa-play': props.playStatus == 'PLAYING' ? false : true,
        'fa fa-pause': props.playStatus == 'PLAYING' ? true : false
    })

    return (
        <div className="player">
            {/*Rewind Button*/}
            <div className="player__backward">
                <button onClick={props.backward}><i className="fa fa-step-backward"></i></button>
            </div>
            <div className="player__main">
                {/*Play/Pause Button*/}
                <button onClick={props.togglePlay}><i className={playPauseClass}></i></button>
                {/*Stop Button*/}
                <button onClick={props.stop}><i className="fa fa-stop"></i></button>
            </div>
            {/*Forward Button*/}
            <div className="player__forward">
                <button onClick={props.forward}><i className="fa fa-step-forward"></i></button>
            </div>
        </div>
    )
}

export default Player
