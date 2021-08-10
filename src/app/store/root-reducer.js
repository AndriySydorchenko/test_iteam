import { combineReducers } from '@reduxjs/toolkit';
import {gameSlice} from "../../client/ticTacToe/components/reducer/gameReduser";
import {modalSlice} from "../../client/ticTacToe/components/reducer/modalReducer";


const rootReducer = combineReducers({
    game: gameSlice.reducer,
    modal: modalSlice.reducer
});

export default rootReducer;
