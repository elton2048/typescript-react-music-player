import { createActions } from 'redux-actions'

export const ADD_SONG = 'ADD_SONG'
export const SELECT_SONG = 'SELECT_SONG'

export const songListActions = createActions({
    ADD_SONG: undefined,
    SELECT_SONG: index => ({ index }),
})
