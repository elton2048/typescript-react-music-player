import * as React from 'react'

import PlayerControl from './playerControl'
import Progress from './progress'

interface PlayerControlProps {
    className?: string;
    backward: () => void;
    togglePlay: () => void;
    stop: () => void;
    forward: () => void;
    playStatus: string;

    duration: number;
}

const Player: React.SFC<PlayerControlProps> = (props: any) => {
    let minutesDuration = Math.floor((props.duration / 1000 / 60))
    let secondsDuration = (props.duration / 1000 % 60).toFixed()
    secondsDuration = secondsDuration.length == 1 ? "0" + secondsDuration : secondsDuration

    let minutesPosition = Math.floor((props.position / 1000 / 60))
    let secondsPosition = (props.position / 1000 % 60).toFixed()
    secondsPosition = secondsPosition.length == 1 ? "0" + secondsPosition : secondsPosition

    const durationString: string = `${minutesDuration}:${secondsDuration}`
    const positionString: string = `${minutesPosition}:${secondsPosition}`
    let cursor = props.position / props.duration
    if(__DEV__) console.log(cursor)
    const positionCursor: number = cursor

    return (
        <div className="player align-items-start">
            <PlayerControl
                className="d-flex justify-content-center"
                {...props}
            />
            <Progress
                className="d-flex justify-content-center"
                elapsed={positionString}
                total={durationString}
                position={positionCursor}
            />
        </div>
    )
}

export default Player
