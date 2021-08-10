import {createSlice} from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        score1: 0,
        score2: 0,
        playerName1: "player 1",
        playerName2: "player 2",
    },
    reducers: {
        increaseScore1: (state) => ({...state, score1: state.score1+1}),
        increaseScore2: (state) => ({...state, score2: state.score2+1}),
        setPlayerName1: (state, action) => ({...state, playerName1: action.payload}),
        setPlayerName2: (state, action) => ({...state, playerName2: action.payload})
    }
});

export const {
    increaseScore1,
    increaseScore2,
    setPlayerName1,
    setPlayerName2
} = gameSlice.actions;