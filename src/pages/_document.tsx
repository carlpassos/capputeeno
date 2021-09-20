/* eslint-disable react/display-name */
// pages/_document.js
import NextDocument, { Html, Head, Main, NextScript} from "next/document"
import { ServerStyleSheet } from 'styled-components'

interface MyClassProps {
  styleTags: any;
}

export default class Document extends NextDocument<MyClassProps> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => 
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head >
        <meta name="description" content="O Capputeeno é um ecommerce feito para um teste de skill lvl da rocketseat" />
        {this.props.styleTags}
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