import React from "react";

import classes from "../Modal/Modal.module.css";

const Modal = (props) => (
  <div
    className={classes.Modal}
    style={{
      transform: props.show ? "translateY(0%)" : "translateY(-100%)",
      opacity: props.show ? "1" : "0",
    }}
  >
    hello
    {props.children}
  </div>
);

export default Modal;
