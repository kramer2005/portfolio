import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/maskable_icon_x72.png" sizes="72x72" />
        <link rel="apple-touch-icon" href="/icons/maskable_icon_x96.png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/icons/maskable_icon_x128.png" sizes="128x128" />
        <link rel="apple-touch-icon" href="/icons/maskable_icon_x192.png" sizes="192x192" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/maskable_icon_x192.png" />
        <meta name="theme-color" content="#25252A" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
