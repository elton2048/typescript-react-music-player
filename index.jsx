import { Observable } from 'rxjs/Rx'
import { Provider } from 'react-redux'

import React, { createElement } from 'react'
import ReactDOM from 'react-dom'
import Immutable from 'immutable'

import Sound from 'react-sound'

import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import musicPlayerApp from './reducers'

import App from './components/app'
import MusicPlayer from './containers/musicPlayer'

import { songListActions } from './actions'

import './styles/global.scss'

let store = createStore(
    musicPlayerApp,
    applyMiddleware(createLogger({ stateTransformer: state => state.songListReducers.toJS() }))
)

let url = ''

Observable.ajax({
        url: url,
        crossDomain: true,
    })
    .map(e => e.response)
    .subscribe(res => {
        console.log(res)
    })

store.dispatch(songListActions.addSong({name: '1', url: 'https://upload.wikimedia.org/wikipedia/en/4/45/ACDC_-_Back_In_Black-sample.ogg'}))
store.dispatch(songListActions.addSong({name: '2', url: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Sample_of_%22Another_Day_in_Paradise%22.ogg'}))
/**
 * Load the first song in the player at the beginning.
 */
store.dispatch(songListActions.selectSong(0))

ReactDOM.render(
    <Provider store={store}>
        <MusicPlayer />
    </Provider>,
    document.getElementById('react-player')
)
