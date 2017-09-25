import * as Immutable from 'immutable'
// import Sound     from 'react-sound'

export const SongList = Immutable.fromJS({
    'songlist': [],
    'song': {
        'name': '',
        'url': '',
    },
    'playing': 0,
})

export const SongState = Immutable.fromJS({
    'volume': 50,
    'status': 'STOPPED',
    'duration': 0,
    'position': 0,
    // 'status': Sound.status.STOPPED
})
