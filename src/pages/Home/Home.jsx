import React, { useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import { Container } from "../../components/Container/Container";
import { Heading } from "../../components/Heading/Heading";
import { UserCard } from "../../components/UserCard/UserCard";

import { getAllUsers } from "../../redux/users/users-operations";
import { usersSelectors } from "../../redux/users/users-selectors";
import s from "./Home.module.css";

export const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector(usersSelectors.getUsers);

  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    if (!users.length) dispatch(getAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <main>
      <Container>
        <Heading tag="h2">Users</Heading>

        {!users.length ? (
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        ) : (
          <div className={s.wrapper}>
            {users.length &&
              users.map((user) => (
                <UserCard openModal={openModal} key={user.id} user={user} />
              ))}
          </div>
        )}

        {modalIsOpen && (
          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          ></Modal>
        )}
      </Container>
    </main>
  );
};
