import React from "react";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import s from "./UserCard.module.css";

export const UserCard = ({ user, openModal }) => {
  return (
    <div className={s.wrapper}>
      <img src={user.image} alt={user.name} />
      <h3>{user.name}</h3>
      <Text>
        <b>E-mail:</b> {user.email}
      </Text>
      <Text>
        <b>Phone:</b> {user.phone}
      </Text>
      <Text>
        <b>Website:</b> {user.website}
      </Text>
      <div className={s.buttonWrapper}>
        <Button link={`users/${user.id}/posts`}>Posts</Button>
        <Button onClick={openModal}>Gallery</Button>
      </div>
    </div>
  );
};
