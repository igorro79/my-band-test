import React from "react";
import s from "./Post.module.css";
import { Text } from "../Text/Text";
export const Post = ({ post }) => {
  return (
    <div className={s.wrapper}>
      <Text>
        <b>Title:</b> {post.title}
      </Text>
      <Text>
        <b>Message:</b> {post.body}
      </Text>
    </div>
  );
};
