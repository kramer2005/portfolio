import Image from 'next/image'
import React from 'react'
import styles from './Navbar.module.scss'
import locales from './Navbar.locales'
import { useRouter } from 'next/router'

const Navbar = () => {
  const { locale } = useRouter()
  return (
    <div className={styles.navbar}>
      <a href="#home">
        <Image src="/logo.svg" alt="KramerDev" width={60} height={37} />
        <p>KramerDev</p>
      </a>
      <nav>
        <a href="#home">{locales[locale].home}</a>
        <a href="#about">{locales[locale].about}</a>
        <a href="#projects">{locales[locale].projects}</a>
        <a href="#contact">{locales[locale].contact}</a>
      </nav>
    </div>
  )
}

export default Navbar
