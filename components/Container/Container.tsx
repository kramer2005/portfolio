import React from 'react'
import styles from './Container.module.scss'

interface IProps {
  children?: React.ReactNode | React.ReactNode[]
  fullWidth?: boolean
  darkTheme?: boolean
  defaultPadding?: boolean
  id?: string
  className?: string
}

const Container = ({ children, fullWidth, darkTheme, defaultPadding, id, className }: IProps) => {
  return (
    <section className={[styles.wrapper, darkTheme ? styles.dark : styles.light].join(' ')} id={id}>
      <div
        className={[
          fullWidth ? '' : styles.container,
          defaultPadding ? styles.defaultPadding : '',
          className,
        ].join(' ')}
      >
        {children}
      </div>
    </section>
  )
}

export default Container
