import React from "react";
import s from "./Text.module.css";

export const Text = ({ children }) => {
  return <p className={s.text}>{children}</p>;
};
