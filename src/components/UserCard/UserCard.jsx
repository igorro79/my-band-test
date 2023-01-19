import React from "react";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import s from "./UserCard.module.css";

export const UserCard = ({ user, openModal }) => {
  return (
    <div className={s.wrapper}>
      <h3>{user.name}</h3>{" "}
      <hr
        style={{
          background: "rgb(3, 3, 110)",
          width: "100%",
          height: "2px",
        }}
      />
      <Text>
        <b>E-mail:</b> {user.email}
      </Text>
      <Text>
        <b>Phone:</b> {user.phone}
      </Text>
      <Text>
        <b>Website:</b> {user.website}
      </Text>
      <ul className={s.buttonWrapper}>
        <li  className={s.items}>
          <Button link={`users/${user.id}/posts`}>Posts</Button>
        </li>
        <li className={s.items}>
          <Button onClick={() => openModal(user.id)}>Albums</Button>
        </li>
      </ul>
    </div>
  );
};
