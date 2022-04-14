import React from 'react'
import Container from '../Container/Container'
import styles from './Contact.module.scss'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import PhoneIcon from '@mui/icons-material/Phone'
import ArticleIcon from '@mui/icons-material/Article'
import locales from './Contact.locales'
import { useRouter } from 'next/router'

const Contact = () => {
  const { locale } = useRouter()
  return (
    <Container darkTheme defaultPadding id="contact" className={styles.contact}>
      <h2>{locales[locale].contact}</h2>
      <div>
        <div>
          <div>
            <GitHubIcon />
            <a target="__blank" rel="noreferrer noopener" href="https://github.com/kramer2005">
              kramer2005
            </a>
          </div>
          <div>
            <LinkedInIcon />
            <a
              target="__blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/wagnerkramer/"
            >
              Wagner Kramer
            </a>
          </div>
          <div>
            <InstagramIcon />
            <a
              target="__blank"
              rel="noreferrer noopener"
              href="https://www.instagram.com/kramer.wagner/"
            >
              kramer.wagner
            </a>
          </div>
        </div>
        <div>
          <div>
            <EmailIcon />
            <a target="__blank" rel="noreferrer noopener" href="mailto:wagner@kramer.dev.br">
              wagner@kramer.dev.br
            </a>
          </div>
          <div>
            <PhoneIcon />
            <a target="__blank" rel="noreferrer noopener" href="tel:+5541999846408">
              +55 (41) 9 99984-6408
            </a>
          </div>
          <div>
            <ArticleIcon />
            <a target="__blank" rel="noreferrer noopener" href="/resume.pdf">
              {locales[locale].resume}
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Contact
