import { useRouter } from 'next/router'
import React from 'react'
import Container from '../Container/Container'
import styles from './Projects.module.scss'
import locales from './Projects.locales'

const Projects = () => {
  const { locale } = useRouter()
  return (
    <Container defaultPadding id="projects" className={styles.projects}>
      <h2>{locales[locale].title}</h2>
      <div>
        <div className={[styles.text, styles.left].join(' ')}>
          <h3>Alfred Server</h3>
          <p>{locales[locale].alfredServer}</p>
          <p>{locales[locale].alfredServerPrevision}</p>
        </div>
        <div className={styles.image}>
          <img src="server.svg" alt="Server icon" />
        </div>
      </div>
      <div>
        <div className={styles.image}>
          <img src="c99.svg" alt="Server icon" />
        </div>
        <div className={styles.text}>
          <h3>MemC</h3>
          <p>{locales[locale].memC}</p>
          <p>{locales[locale].memCPrevision}</p>
        </div>
      </div>
    </Container>
  )
}

export default Projects
