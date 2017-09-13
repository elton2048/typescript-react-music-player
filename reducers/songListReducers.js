import { handleActions } from 'redux-actions'

import { ADD_SONG } from '../actions'
import { SongList } from '../constants/models'

const songListReducers = handleActions({
    ADD_SONG: (state, { payload }) => {
        let song = state.get('song')
            .set('name', payload.name)
            .set('url', payload.url)
        let songlist = state.get('songlist').push(song)
        return state.set('songlist', songlist)
    },
    SELECT_SONG: (state, { payload }) => {
        if (payload.index > -1) {
            if (payload.index < state.get('songlist').size)
                return state.set('song', state.get('songlist').get(payload.index))
                    .set('playing', payload.index)
            else {
                console.log("This is the last song of the list.")
                return state
            }
        } else {
            console.log("This is the first song of the list.")
            return state
        }

    }
}, SongList)

export default songListReducers
