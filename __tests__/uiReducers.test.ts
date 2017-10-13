import { createStore } from 'redux'
import Sound from 'react-sound'

import musicPlayerApp from '../reducers'
import { musicPlayerActions } from '../actions'

describe('Reducers: uiReducers', () => {
    const store = createStore(musicPlayerApp)

    it('play action', () => {
        store.dispatch(musicPlayerActions.play())
        expect(store.getState().uiReducers.get('status')).toEqual(Sound.status.PLAYING)
    })

    it('pause action', () => {
        store.dispatch(musicPlayerActions.pause())
        expect(store.getState().uiReducers.get('status')).toEqual(Sound.status.PAUSED)
    })

    it('stop action', () => {
        store.dispatch(musicPlayerActions.stop())
        expect(store.getState().uiReducers.get('status')).toEqual(Sound.status.STOPPED)
    })

    it('update position', () => {
        store.dispatch(musicPlayerActions.updatePosition({ position: 1}))
        expect(store.getState().uiReducers.get('position')).toEqual(1)
    })

    it('update duration when duration is not 0', () => {
        store.dispatch(musicPlayerActions.updateDuration({ duration: 1}))
        expect(store.getState().uiReducers.get('duration')).toEqual(1)
    })

    it('does not update duration when duration is 0', () => {
        store.dispatch(musicPlayerActions.updateDuration({duration: 0}))
        expect(store.getState().uiReducers.get('duration')).toEqual(1)
    })

})
