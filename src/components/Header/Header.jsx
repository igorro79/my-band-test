import { Container } from "../../components/Container/Container";
import React from "react";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.wrapper}>
      <Container>
        <div className={s.contentWrapper}>
          <strong>welcom to the InfoBox </strong>
        </div>
      </Container>
    </header>
  );
};
