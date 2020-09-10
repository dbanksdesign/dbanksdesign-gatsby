import React from 'react'
import styles from './KPI.module.css'

export default ({ value, label }) => (
  <div className={styles.kpi}>
    <div className={styles.kpiLabel}>{label}</div>
    <div className={styles.kpiValue}>{value}</div>
  </div>
)
