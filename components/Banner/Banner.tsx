import { useRouter } from 'next/router'
import React from 'react'
import Button from '../Button/Button'
import Container from '../Container/Container'
import styles from './Banner.module.scss'
import locales from './Banner.locales'

const Banner = () => {
  const { locale } = useRouter()

  return (
    <div className={styles.banner} id="home">
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <p>{locales[locale].hello}</p>
          <h1>Wagner Kramer</h1>
          <h2>{locales[locale].developer}</h2>
          <Button href="#contact">{locales[locale].contact}</Button>
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <img src="coffee.jpg" alt="Wagner Kramer" />
      </div>
    </div>
  )
}

export default Banner
