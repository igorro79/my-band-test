import React, { useEffect } from "react";
import { Dna } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Container } from "../../components/Container/Container";
import { Heading } from "../../components/Heading/Heading";
import { Post } from "../../components/Post/Post";

import { postsSelectors } from "../../redux/posts/posts-selectors";
import { getUserPosts } from "../../redux/posts/posts-operations";
import { usersSelectors } from "../../redux/users/users-selectors";

import s from "./Posts.module.css";

export const Posts = () => {
  let { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const users = useSelector(usersSelectors.getUsers);
  const posts = useSelector(postsSelectors.getPosts);
  const isLoading = useSelector(postsSelectors.getLoading);
  const currentUser = users.find((user) => user.id.toString() === id);
  useEffect(() => {
    if (posts && posts[0]?.userId === currentUser.id) return;
    dispatch(getUserPosts(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  console.log(posts);
  console.log(currentUser);
  return (
    <main>
      <Container>
        <Heading tag="h2">
          Posts made by username {currentUser.username}
        </Heading>
        <div className={s.wrapper}>
          {posts.length && posts.map((post) => <Post post={post} />)}
          {isLoading && (
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          )}
        </div>
      </Container>
    </main>
  );
};
