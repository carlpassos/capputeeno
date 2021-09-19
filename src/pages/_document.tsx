// pages/_document.js
import NextDocument, { Html, Head, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head >
        <title>Capputteno - a test ecommerce</title>
        <meta name="description" content="O Capputeeno é um ecommerce feito para um teste de skill lvl da rocketseat" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Saira:wght@300;400;500;600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />          
        </body>
        <NextScript />

      </Html>
    )
  }
}