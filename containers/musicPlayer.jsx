import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sound from 'react-sound'

import {
    musicPlayerActions,
    songListActions,
} from '../actions/'

import Player from '../components/player'

const mapStateToProps = (state) => ({
    currentSong: state.songListReducers.get('song'),
    currentSongIndex: state.songListReducers.get('playing'),
    volume: state.uiReducers.get('volume'),
    playStatus: state.uiReducers.get('status'),
})

const mapDispatchToProps = (dispatch) => ({
    onPlayMusic: () => {
        dispatch(musicPlayerActions.play())
    },
    onPauseMusic: () => {
        dispatch(musicPlayerActions.pause())
    },
    onStopMusic: () => {
        dispatch(musicPlayerActions.stop())
    },
    selectSong: (index) => {
        dispatch(songListActions.selectSong(index))
    }
})

const mergeProps = (stateProps, dispatchProps) => ({

    /**
     * Using Object Spread Operator
     * Requires transform-object-rest-spread in Babel as the feature does not
     * exist in current ECMAScript.
     */
    ...stateProps,
    onTogglePlay: () => {
        stateProps.playStatus == 'PLAYING' ? dispatchProps.onPauseMusic() : dispatchProps.onPlayMusic()
    },
    onStopMusic: () => {
        dispatchProps.onStopMusic()
    },
    onPreviousMusic: () => {
        let songIndex = stateProps.currentSongIndex - 1
        dispatchProps.selectSong(songIndex)
    },
    onNextMusic: () => {
        let songIndex = stateProps.currentSongIndex + 1
        dispatchProps.selectSong(songIndex)
    }
})

/**
 * MusicPlayer using class component as the component needs further setting
 * after mounting.
 */
class MusicPlayer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        soundManager.setup({debugMode: false})
    }

    render() {
        return (
            <div>
                <Player
                    togglePlay={ this.props.onTogglePlay }
                    stop={ this.props.onStopMusic }
                    backward={ this.props.onPreviousMusic }
                    forward={ this.props.onNextMusic }
                    playStatus={ this.props.playStatus }
                />
                <Sound
                    url={ this.props.currentSong.get('url') }
                    volume={ this.props.volume }
                    playStatus={ this.props.playStatus }
                />
            </div>
        )
    }
}

export default MusicPlayer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
)(MusicPlayer)
