import React from "react";
import styles from "../Modal/Modal.module.scss";

const Modal = ({ isOpen, isClose, title, description }) => {
  if (isOpen) {
    return (
      <div className={styles.BG}>
        <div className={styles.modal}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={styles.Btns}>
            <button disabled onClick={() =>  isClose()}>Sim</button>
            <button onClick={() =>  isClose()}>Não</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Modal;
