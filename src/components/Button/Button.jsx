import React from "react";
import { Link } from "react-router-dom";
import s from "./Button.module.css";
export const Button = ({ children, link, onClick }) => {
  return onClick ? (
    <button className={s.button} type="button" onClick={onClick}>
      {children}
    </button>
  ) : (
    <Link className={s.button} to={link}>
      {children}
    </Link>
  );
};
