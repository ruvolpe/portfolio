import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lato:wght@300;700&family=Playfair+Display:ital,wght@1,600&family=Poppins&display=swap');
:root{
    --purple:#623CEA;
    --transparent-purple: #623CEA50;
    --white:#F8F9FA;
    --grey:#868E96;
    --dark-grey:#212529;
    font-family: "Inter";
    background: #212529;
}
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
  }

  a {
    color: var(--white);
    background: var(--purple);
    border-radius: 25px;
    padding: 16px 10px;
    text-decoration: none;
    transition: transform 0.3s ease-in-out;
  }

  a:hover{
        transform: scale(1.05);
    }
`;

export default GlobalStyles;
