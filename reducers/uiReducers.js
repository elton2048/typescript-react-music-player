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
    }
}, SongState)

export default uiReducers
