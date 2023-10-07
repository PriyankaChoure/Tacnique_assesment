import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = ({ users }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.listHeading}>
          <span className={styles.heading}>ID</span>
          <span className={styles.heading}>Name</span>
          <span className={styles.heading}>Username</span>
          <span className={styles.heading}>Email</span>
          <span className={styles.heading}>Company</span>
        </li>
        {users.map((user) => (
          <li className={styles.listdata}>
            <span className={styles.heading}>{user.id}</span>
            <span className={styles.heading}>{user.name}</span>
            <span className={styles.heading}>{user.username}</span>
            <span className={styles.heading}>{user.email}</span>
            <span className={styles.heading}>{user.company.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
