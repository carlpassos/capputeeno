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

  
}