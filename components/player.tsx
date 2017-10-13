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

    position: number;
    duration: number;

    progressClick: (e: React.MouseEvent<HTMLProgressElement>) => void;
}

const Player: React.SFC<PlayerControlProps> = (props: any) => {
    let duration = props.duration / 1000
    let position = props.position / 1000

    let minutesDuration = Math.floor(duration / 60)
    let secondsDuration = (duration % 60).toFixed()
    secondsDuration = secondsDuration.length == 1 ? "0" + secondsDuration : secondsDuration

    let minutesPosition = Math.floor(position / 60)
    let secondsPosition = (position % 60).toFixed()
    secondsPosition = secondsPosition.length == 1 ? "0" + secondsPosition : secondsPosition

    const durationString: string = `${minutesDuration}:${secondsDuration}`
    const positionString: string = `${minutesPosition}:${secondsPosition}`
    let cursor = props.position / props.duration
    if(__DEV__) console.log(cursor)
    const positionCursor: number = cursor

    return (
        <div className="player align-items-start">
        <Progress
            className="d-flex justify-content-center"
            elapsed={positionString}
            total={durationString}
            position={positionCursor}
            progressClick={props.progressClick}
        />
        <PlayerControl
            className="d-flex justify-content-center"
            {...props}
        />
        </div>
    )
}

export default Player
