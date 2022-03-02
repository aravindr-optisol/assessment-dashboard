import React from 'react'
import styles from '../styles/Card.module.css'
export const Card = (props) => {
  return (
    <div className={styles.cardStyle}>
    {
        props.content()
    }
    </div>
  )
}
