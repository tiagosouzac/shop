import { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Preconnect fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* SSR Stitches */}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />

        {/* Favicon */}
        <link rel="shortcut icon" href="favicon.svg" type="image/svg" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
