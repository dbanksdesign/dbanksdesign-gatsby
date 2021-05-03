import React from 'react';
import * as styles from './Card.module.css';

export default ({ title, description, graphic, url, emoji }) => (
  <a href={url} className={styles.projectCard}>
    {graphic &&
      <img className={styles.projectCardImage}
        src={graphic}
        alt={title} />
    }
    {emoji &&
      <span className={styles.projectCardEmoji}>{emoji}</span>
    }
    <div className={styles.projectCardContent}>
      <h4 className={styles.projectCardTitle}>{title}</h4>
      <p className={styles.projectCardDescription}>{description}</p>
    </div>
  </a>
)
