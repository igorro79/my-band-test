import React, { useEffect, useRef, useState } from "react";
import { Dna } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import { Container } from "../../components/Container/Container";
import { Heading } from "../../components/Heading/Heading";
import { UserCard } from "../../components/UserCard/UserCard";

import { getAllUsers } from "../../redux/users/users-operations";
import { getUserGallery } from "../../redux/gallery/gallery-operations";
import { usersSelectors } from "../../redux/users/users-selectors";
import { gallerySelectors } from "../../redux/gallery/gallery-selectors";
import s from "./Home.module.css";

export const Home = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const users = useSelector(usersSelectors.getUsers);
  const albums = useSelector(gallerySelectors.getGallery);

  Modal.setAppElement(ref.current);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(id) {
    dispatch(getUserGallery(id));
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
    <main ref={ref}>
      <Container>
        <Heading tag="h2">Users</Heading>

        {!users.length ? (
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
            onRequestClose={closeModal}
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
              },
            }}
            contentLabel="Gallery Modal"
          >
            {albums.length ? (
              <div>
                <Heading>User albums</Heading>
                <hr
                  style={{
                    background: "rgb(3, 3, 110)",
                    width: "100%",
                    height: "2px",
                  }}
                />
                <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
                  {albums.map((item) => (
                    <li>{item.title}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            )}
          </Modal>
        )}
      </Container>
    </main>
  );
};
