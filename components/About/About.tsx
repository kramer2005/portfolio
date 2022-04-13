import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../Container/Container'
import styles from './About.module.scss'
import locales from './About.locales'

const About = () => {
  const { locale } = useRouter()
  return (
    <Container darkTheme defaultPadding id="about">
      <h2>{locales[locale].title}</h2>
      <div className={styles.about}>
        <div className={styles.picture}>
          <img src="/me.jpg" alt="Wagner Kramer" />
          <span />
        </div>
        <div className={styles.aboutText}>{locales[locale].text}</div>
      </div>
    </Container>
  )
}

export default About
