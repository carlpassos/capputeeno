import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * { 
    margin:0;
    padding:0;
    
    font-family: 'Saira', sans-serif;
  }

  button {
    border:0;
    background-color: transparent;
  }

  html,body {
      margin:0;
      padding:0;
  }

  table {
      border-collapse:collapse;
      border-spacing:0;
  }
  fieldset,img { 
      border:0;
  }

  ol,ul {
      list-style:none;
  }
  caption,th {
      text-align:left;
  }

  q:before, q:after {
      content:'';
  }
`;
