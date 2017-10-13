import * as React from 'react'

interface ProgressProps {
    className: string;
    elapsed: string;
    position: number;
    total: string | number;

    progressClick: () => void;
}

const clickToPosition = (e: React.MouseEvent<HTMLProgressElement>) => {
    const clickPosition = (e.pageX - e.currentTarget.offsetLeft) / e.currentTarget.offsetWidth
    e.currentTarget.value = clickPosition
}

const Progress: React.SFC<ProgressProps> = (props: any) => {
    return (
        <div className={`player-progress ${ props.className }`}>
            {/* Elapsed time */}
            <span className="player__time-elapsed">{props.elapsed}</span>
            {/* Progress Bar */}
            <progress
                value={props.position}
                onClick={props.progressClick}
                max="1">
            </progress>
            {/* Total time */}
            <span className="player__time-total">{props.total}</span>
        </div>
    )
}

export default Progress
