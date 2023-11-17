import React from "react";
import styles from "../Modal/Modal.module.scss";

const Modal = ({ isOpen, setOpen, title, description, btnConfirmEdit, btnConfirmDel, btnCancel }) => {
  if (isOpen) {
    return (
      <div className={styles.BG}>
        <div className={styles.modal}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={styles.Btns}>
            <button onClick={() => {btnConfirmEdit(); btnConfirmDel(); setOpen(false); }}>Sim</button>
            <button onClick={() => {btnCancel(); setOpen(false); }}>Não</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Modal;
