import { createStore } from "redux"
import Sound from "react-sound"

import musicPlayerApp from "../reducers"
import { songListActions } from "../actions"

describe("Reducers: songListReducers", () => {
    const store = createStore(musicPlayerApp)

    it("add song: addSong", () => {
        store.dispatch(
            songListActions.addSong({
                name: "1",
                url:
                    "http://hita01.hita.me/hita/resource/music/8OsPZOgRVZ_20170322164627.mp3"
            })
        )
        expect(
            store.getState()
                .songListReducers.get("songlist")
                .get(0)
                .get("name")
        ).toEqual("1")
        expect(
            store.getState()
                .songListReducers.get("songlist")
                .get(0)
                .get("url")
        ).toEqual("http://hita01.hita.me/hita/resource/music/8OsPZOgRVZ_20170322164627.mp3")
    })

    it("select song: selectSong", () => {
        store.dispatch(
            songListActions.addSong({
                name: "2",
                url:
                    "http://testSong"
            })
        )
        store.dispatch(songListActions.selectSong(1))
        expect(
            store.getState()
                .songListReducers.get("playing")
        ).toEqual(1)
    })
})
