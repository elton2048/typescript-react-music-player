import React from 'react'

let Progress = (props) => {
    return (
        <div className="progress">
            {/* Elapsed time */}
            <span className="player__time-elapsed">{props.elapsed}</span>
            {/* Progress Bar */}
            <progress
                value={props.position}
                max="1"></progress>
            {/* Total time */}
            <span className="player__time-total">{props.total}</span>
        </div>
    )
}

export default Progress
