import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import Sound from 'react-sound'
// import { soundManager } from 'react-sound'

import {
    musicPlayerActions,
    songListActions,
} from '../actions/'

import Player from '../components/player'
import PlayerControl from '../components/playerControl'

const mapStateToProps = (state: any) => ({
    currentSong: state.songListReducers.get('song'),
    currentSongIndex: state.songListReducers.get('playing'),
    volume: state.uiReducers.get('volume'),
    playStatus: state.uiReducers.get('status'),
    duration: state.uiReducers.get('duration'),
    position: state.uiReducers.get('position'),
})

const mapDispatchToProps = (dispatch: any) => ({
    onPlayMusic: () => {
        dispatch(musicPlayerActions.play())
    },
    onPauseMusic: () => {
        dispatch(musicPlayerActions.pause())
    },
    onStopMusic: () => {
        dispatch(musicPlayerActions.stop())
    },
    selectSong: (index: number) => {
        dispatch(songListActions.selectSong(index))
    },
    updatePosition: (position: number) => {
        dispatch(musicPlayerActions.updatePosition(position))
    },
    updateDuration: (duration: number) => {
        dispatch(musicPlayerActions.updateDuration(duration))
    },
})

const mergeProps = (stateProps: any, dispatchProps: any) => ({

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
    },
    onFinishedPlaying: () => {
        // onNextMusic()
    },
    onPlaying: ({ position }: { position: number }) => {
        // if (__DEV__) console.log(position)
        dispatchProps.updatePosition({position: position})
    },
    onLoading: ({ duration }: { duration: number }) => {
        dispatchProps.updateDuration({duration: duration})
    }
})

interface MusicPlayerProps {
    currentSong: any;
    volume: number;
    playStatus: string;

    position: number;
    duration: number;

    onTogglePlay(): void;
    onStopMusic(): void;
    onPreviousMusic(): void;
    onNextMusic(): void;

    onFinishedPlaying(): void;
    onPlaying: () => void;
    onLoad: () => void;
    onLoading: () => void;
}

/**
 * MusicPlayer using class component as the component needs further setting
 * after mounting.
 */
class MusicPlayerComponent extends Component<MusicPlayerProps> {
    constructor(props: any) {
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
                    position={ this.props.position }
                    duration={ this.props.duration }
                />
                <Sound
                    url={ this.props.currentSong.get('url') }
                    volume={ this.props.volume }
                    playStatus={ this.props.playStatus }
                    onFinishedPlaying={ this.props.onNextMusic }
                    onPlaying={ this.props.onPlaying }
                    onLoading={ this.props.onLoading }
                    autoLoad={true}
                />
            </div>
        )
    }
}

const MusicPlayer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(MusicPlayerComponent)

export default MusicPlayer
