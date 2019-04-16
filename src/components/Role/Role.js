import React from 'react'
import styles from './Role.module.css'

export const Roles = ({ children }) => (
  <div className={styles.roles}>
    {children}
  </div>
);

export default ({ icon, title, description }) => (
  <div className={styles.role}>
    <i className={`${styles.roleIcon} ${icon}`}></i>
    <h5 className={styles.roleTitle}>{title}</h5>
    <p className={styles.roleDescription}>{description}</p>
  </div>
);