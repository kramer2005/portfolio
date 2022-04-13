import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Head from 'next/head'
import { useRouter } from 'next/router'
import locales from '../components/index.locales'

const Home = () => {
  const { locale } = useRouter()
  return (
    <>
      <Head>
        <title>KramerDev</title>
        <meta name="description" content={locales[locale].description} />
        <meta name="keywords" content={locales[locale].keywords} />
        <script type="application/ld+json">
          {'{' +
            '"@context": "http://schema.org/",' +
            '"@type": "Person",' +
            '"name": "Wagner Kramer",' +
            `"jobTitle": "${locales[locale].jobTitle}",` +
            '"telephone": "+55 (41) 9 9984-6408",' +
            '"url": "https://kramer.dev.br",' +
            '"sameAs": [' +
            '  "https://www.linkedin.com/in/wagnerkramer/",' +
            '  "https://www.instagram.com/kramer.wagner/",' +
            '  "https://www.researchgate.net/profile/Wagner-Kramer"' +
            ']' +
            '}'}
        </script>
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
