import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
       <Head>
          <meta property="og:title" content="Blbý otázky" />
          <meta property="og:description" content="AI odpovídá na všechny blbý otázky. Už se nemusíte stydět ptát se na ledasco." />
          <meta property="og:url" content="https://www.blbyotazky.cz" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
