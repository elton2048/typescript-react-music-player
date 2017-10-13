import Sound from 'react-sound'
import { handleActions } from 'redux-actions'

import { PLAY, STOP, PAUSE } from '../actions'
import { SongState } from '../constants/models'

const uiReducers = handleActions({
    PLAY: (state) => {
        return state.set('status', Sound.status.PLAYING)
    },
    STOP: (state) => {
        return state.set('status', Sound.status.STOPPED)
    },
    PAUSE: (state) => {
        return state.set('status', Sound.status.PAUSED)
    },
    UPDATE_DURATION: (state, { payload }) => {
        if (state.get('duration') != payload.duration && payload.duration != 0)
            return state.set('duration', payload.duration)
        else
            return state
    },
    UPDATE_POSITION: (state, { payload }) => {
        return state.set('position', payload.position)
    }
}, SongState)

export default uiReducers
