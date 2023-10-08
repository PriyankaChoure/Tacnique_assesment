import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./UserForm.module.css";

const UserForm = ({ user, isOpen = false, setIsFormOpen, handleSave }) => {
  const [userData, setUserData] = useState({});
  const closeModal = () => {
    setIsFormOpen(false);
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(userData);
    handleSave(userData);
  };
  return (
    <div className={styles.wrapper}>
      <Modal
        isOpen={isOpen}
        //   onAfterOpen={afterOpenModal}
        //   onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>Please Feed the User Details</div>
        <form className={styles.form} onSubmit={handleClick}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              name="username"
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="name"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </label>
          <label>
            Company:
            <input
              type="text"
              name="name"
              onChange={(e) =>
                setUserData({ ...userData, company: e.target.value })
              }
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Modal>
    </div>
  );
};

export default UserForm;
