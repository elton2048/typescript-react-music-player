import { Observable } from '@reactivex/rxjs'
import { Provider } from 'react-redux'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Immutable from 'immutable'

/*import Sound from 'react-sound'*/

import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import musicPlayerApp from './reducers'

/*import App from './components/app'*/
import MusicPlayer from './containers/musicPlayer'

import { songListActions } from './actions'

import 'bootstrap/dist/css/bootstrap.css'
import './styles/global.scss'

// const debugMode = true

let store = createStore(
    musicPlayerApp,
    applyMiddleware(createLogger({ stateTransformer: (state: any) => state.songListReducers.toJS() }))
)

store.dispatch(songListActions.addSong({name: '1', url: 'http://hita01.hita.me/hita/resource/music/8OsPZOgRVZ_20170322164627.mp3'}))
store.dispatch(songListActions.addSong({name: '2', url: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Sample_of_%22Another_Day_in_Paradise%22.ogg'}))
/**
 * Load the first song in the player at the beginning.
 */
store.dispatch(songListActions.selectSong(0))
if (__DEV__) console.log('test')

ReactDOM.render(
    <Provider store={store}>
        <MusicPlayer />
    </Provider>,
    document.getElementById('react-player')
)
