import React from "react";
import style from "./Square.module.scss";

const Square = ({ value, onClick }) => {
  let newValue =null;
  if(value==="X") {newValue = <div className={style.x}></div> }
  else if(value==="O") {newValue = <div className={style.o}></div> } else{
    newValue = value;
  }
// &#9675;
// &#10006;
  return (
    <button className={style.square} onClick={onClick}>
      {newValue}
    </button>
  );
};

export default Square;


