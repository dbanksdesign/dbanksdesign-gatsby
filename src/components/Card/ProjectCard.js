import React from 'react'
import { Link } from 'gatsby'
import styles from './Card.module.css'

export default ({ title, description, graphic, url }) => (
  <Link to={url} className={styles.projectCard}>
    {graphic &&
      <img className={styles.projectCardImage}
        src={graphic}
        alt={title} />
    }
    <div className={styles.projectCardContent}>
      <h4 className={styles.projectCardTitle}>{title}</h4>
      <p className={styles.projectCardDescription}>{description}</p>
    </div>
  </Link>
)
