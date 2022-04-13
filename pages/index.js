import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>KramerDev</title>
        <meta
          name="description"
          content="KramerDev é o portfolio de Wagner J. Kramer Vieira, um estudante de Ciência da Computação e Desenvolvedor Full Stack Brasileiro."
        />
      </Head>
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
