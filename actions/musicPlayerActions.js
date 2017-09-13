import { createActions } from 'redux-actions'

export const PLAY = 'PLAY'
export const STOP = 'STOP'
export const PAUSE = 'PAUSE'

export const musicPlayerActions = createActions({
    PLAY: undefined,
    STOP: undefined,
    PAUSE: undefined,
})
