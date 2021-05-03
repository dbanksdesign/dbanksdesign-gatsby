import React from 'react'
import * as styles from './Card.module.css'

export default ({ children }) => (
  <div className={styles.cardGrid}>
    {children}
  </div>
)
