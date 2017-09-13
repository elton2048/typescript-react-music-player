import React, { Component } from 'react'

import Sound from 'react-sound'

// import MusicPlayer from './containers/musicPlayer'
import Player from './player'
import Progress from './progress'

const App = () => {

    return (
        <div>
            <Player />
            <Sound
                url={'http://hita01.hita.me/hita/resource/music/0Ms7F8iHJ7_20170630160724.mp3'}
                playStatus={Sound.status.STOPPED}
            />
            <Progress
                position={'0.3'}
                elapsed={'00:00'}
                total={'0:40'} />
        </div>
    )
}

export default App
