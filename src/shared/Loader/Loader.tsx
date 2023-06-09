import React from 'react'

// import styles from './loader.css'
import styles from './loader.css';

export function Loader() {
  return (
    <div className={styles.ellipsis}><div></div><div></div><div></div><div></div></div>
  )
}