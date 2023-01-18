import React from "react";
import s from "./Heading.module.css";

export const Heading = ({ children, tag, ...props }) => {
  switch (tag) {
    case "h2":
      return (
        <h2 className={s.h2} {...props}>
          {children}
        </h2>
      );
    default:
      return (
        <h1 className={s.h1} {...props}>
          {children}
        </h1>
      );
  }
};
