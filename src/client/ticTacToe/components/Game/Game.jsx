import React, { useState } from "react";
import Board from "../Board";
import style from "./Game.module.scss";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {toggleModal} from "../reducer/modalReducer";
import Modal from "../../../../shared/components/Modal";
import {setPlayerName1, setPlayerName2} from "../reducer/gameReduser";

const Game = () => {
    const dispatch = useDispatch();
    let {game, modal} = useSelector(state => state, shallowEqual);
    const {score1, score2, playerName1, playerName2} = game;

    return (
    <div className={style.game}>
      <Board/>
      <div className={style.wrapperText}>
          <h1>Score</h1>
          <span>{playerName1}: {score1}</span>
          <span>{playerName2}: {score2}</span>
          <Modal isOpen={modal.modalOpen} toggleModal={() => dispatch(toggleModal())} minWidth={'300px'} minHeight={'200px'} >
              <form className={style.form}>
                  <label >
                      Enter the name 1 player
                      <input className={style.form_input} type="text" name="name1" value = {playerName1} onChange={(event => dispatch(setPlayerName1(event.target.value)))}/>
                  </label>
                  <label>
                      Enter the name 2 player
                      <input className={style.form_input} type="text" name="name2" value = {playerName2} onChange={(event => dispatch(setPlayerName2(event.target.value)))}/>
                  </label>
                  <input className={style.form_btn} type="submit" value="Отправить" onClick={() => dispatch(toggleModal())}/>
              </form>
          </Modal>
      </div>
    </div>
  );
};

export default Game;
