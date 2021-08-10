import React, {useState} from "react";
import Square from "../Square";
import style from "./Board.module.scss"
import {calculateWinner} from "../../../../helper";
import {toggleModal} from "../reducer/modalReducer";
import {increaseScore1, increaseScore2, setPlayerName1, setPlayerName2} from "../reducer/gameReduser";
import Modal from "../../../../shared/components/Modal";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

const Board = () => {
    const dispatch = useDispatch();
    const {playerName1, playerName2} = useSelector(state => state.game, shallowEqual);

    const [step, setStep] = useState(0);
    const [history, setHistory] = useState(new Array(3).fill(new Array(null, null, null)));
    const [modal, setModal] = useState(false);
    const [winner, setWinner] = useState(null);

    const handleClick = (index) =>{
        const i = Math.floor(index /3);
        const j = index % 3;
        if(history[i][j] === null) {
            const newHistory = history.map(item => [...item]);
            if (step % 2 === 0) {
                newHistory[i][j] = "X";
            } else newHistory[i][j] = "O";
            setHistory(newHistory);
            setStep(step+1);
            let winnerResult = calculateWinner([].concat(...newHistory));
            if(winnerResult === 1){
                dispatch(increaseScore1());
                setWinner(playerName1);
                setModal(!modal);
                restartGame();
            } else if(winnerResult === 0){
                dispatch(increaseScore2());
                setWinner(playerName2);
                setModal(!modal);
                restartGame();
            } else if(winnerResult === -1){
                setWinner("Ничья!");
                setModal(!modal);
                restartGame();
            }
        }
    }
    const restartGame = () =>{
        setHistory(new Array(3).fill(new Array(null, null, null)));
        setStep(0);
    }

    const squares = [].concat(...history);
    const items = squares.map((square, index) =>
        <Square key={index} value={square} onClick={() => handleClick(index)} />
    )

    return (
        <div className={style.board}>
          {items}
          <div className={`${style.board_line} ${style.board_line_top}`}></div>
          <div className={`${style.board_line} ${style.board_line_bottom}`}></div>
          <div className={`${style.board_line} ${style.board_line_left}`}></div>
          <div className={`${style.board_line} ${style.board_line_right}`}></div>
            <Modal isOpen={modal} toggleModal={() => setModal(!modal)} minWidth={'300px'} minHeight={'200px'} >
                <span className={style.winner}>
                    Winner: {winner};
                </span>
            </Modal>
        </div>
    );
};

export default Board;
