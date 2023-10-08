import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = ({ users = [], handleDelete }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.listHeading}>
          <span className={styles.heading}>ID</span>
          <span className={styles.heading}>Name</span>
          <span className={styles.heading}>Username</span>
          <span className={styles.heading}>Email</span>
          <span className={styles.heading}>Company</span>
          <span className={styles.heading}>Action</span>
        </li>
        {users.map((user) => (
          <li key={user.id} className={styles.listdata}>
            <span className={styles.heading}>{user.id}</span>
            <span className={styles.heading}>{user.name}</span>
            <span className={styles.heading}>{user.username}</span>
            <span className={styles.heading}>{user.email}</span>
            <span className={styles.heading}>{user.company.name}</span>
            <div>
              <button className={styles.btn}>
                <img src={require("../../assets/edit.png")} />
              </button>
              <button
                className={styles.btn}
                onClick={(e) => handleDelete(user)}
                value={user.id}
              >
                <img src={require("../../assets/delete.png")} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
