import { createActions } from 'redux-actions'

export const ADD_SONG   : string = 'ADD_SONG'
export const SELECT_SONG: string = 'SELECT_SONG'

export const songListActions = createActions({
    ADD_SONG   : undefined,
    SELECT_SONG: (index: number) => ({ index }),
})
