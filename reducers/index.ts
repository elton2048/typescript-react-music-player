import { combineReducers } from 'redux'

import songListReducers from './songListReducers'
import uiReducers from './uiReducers'

const musicPlayerApp = combineReducers({
    songListReducers,
    uiReducers,
})

export default musicPlayerApp
