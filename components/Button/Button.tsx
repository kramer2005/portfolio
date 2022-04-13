import React from 'react'
import styles from './Button.module.scss'

interface IProps {
  children: string
  href?: string
}

const Button = ({ children, href }: IProps) => {
  return (
    <a href={href}>
      <button className={styles.button}>{children}</button>
    </a>
  )
}

export default Button
