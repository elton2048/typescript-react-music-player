import * as React from 'react'

import * as ClassNames from 'classnames'

import Progress from './progress'

interface PlayerControlProps {
    className?: string;
    backward: () => void;
    togglePlay: () => void;
    stop: () => void;
    forward: () => void;
    playStatus: string;
}

const PlayerControl: React.SFC<PlayerControlProps> = (props: any) => {

    const playPauseClass = ClassNames({
        'fa fa-play': props.playStatus == 'PLAYING' ? false : true,
        'fa fa-pause': props.playStatus == 'PLAYING' ? true : false
    })

    return (
        <div className={`control ${ props.className }`}>
            {/*Rewind Button*/}
            <div className="control__backward">
                <button onClick={props.backward}><i className="fa fa-step-backward"></i></button>
            </div>
            <div className="control__main">
                {/*Play/Pause Button*/}
                <button onClick={props.togglePlay}><i className={playPauseClass}></i></button>
                {/*Stop Button*/}
                <button onClick={props.stop}><i className="fa fa-stop"></i></button>
            </div>
            {/*Forward Button*/}
            <div className="control__forward">
                <button onClick={props.forward}><i className="fa fa-step-forward"></i></button>
            </div>

        </div>
    )
}

export default PlayerControl
