import React, { useEffect } from "react";
import { Dna } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Container } from "../../components/Container/Container";
import { Heading } from "../../components/Heading/Heading";
import { Post } from "../../components/Post/Post";

import { postsSelectors } from "../../redux/posts/posts-selectors";
import { getUserPosts } from "../../redux/posts/posts-operations";
import { getAllUsers } from "../../redux/users/users-operations";
import { usersSelectors } from "../../redux/users/users-selectors";

import s from "./Posts.module.css";

export const Posts = () => {
  let { id } = useParams();

  const dispatch = useDispatch();
  const users = useSelector(usersSelectors.getUsers);
  const posts = useSelector(postsSelectors.getPosts);
  const isLoading = useSelector(postsSelectors.getLoading);
  const currentUser = users.find((user) => user.id.toString() === id);

  useEffect(() => {
    if (posts && posts[0]?.userId === currentUser?.id) return;
    dispatch(getUserPosts(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  console.log(currentUser);
  return (
    <main>
      <Container>
        {users.length && (
          <Heading tag="h2">
            Posts made by username {currentUser?.username || ""}
          </Heading>
        )}
        {posts.length && (
          <div className={s.wrapper}>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        )}
        {isLoading && (
          <div className={s.loaderWrapper}>
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        )}
      </Container>
    </main>
  );
};
