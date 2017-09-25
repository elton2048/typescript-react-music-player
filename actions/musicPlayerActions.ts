import { createActions } from 'redux-actions'

export const PLAY : string = 'PLAY'
export const STOP : string = 'STOP'
export const PAUSE: string = 'PAUSE'

export const musicPlayerActions = createActions({
    PLAY : undefined,
    STOP : undefined,
    PAUSE: undefined,
    UPDATE_DURATION: undefined,
    UPDATE_POSITION: undefined,
})
