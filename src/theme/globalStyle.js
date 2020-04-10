import { createGlobalStyle } from 'styled-components';
import Paw from '../assets/dog-paw.svg'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

html {
  height: 100%;
  font-size: 62%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
}

li {
  list-style-type: none;
}
h2 {
  font-size: 2rem;
  margin-bottom: ${(props) => props.theme.margin.bottom};

  &::before {
    content: '';
    display: inline-block;
    position: relative;
    top: 7px;
    margin-right: .5em;
    background: url('${ Paw }');
    background-size: 100% 100%;
    width: 30px;
    height: 30px;
  }
}
h2, h3 {
  color: ${(props) => props.theme.colors.orange};
  font-weight: ${(props) => props.theme.weights.semi};
} 

p {
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 1em;
  text-align: justify;
}

/*Highlight important text in paragraphs*/
span {
  color: ${(props) => props.theme.colors.blue};
  font-weight: ${(props) => props.theme.weights.semi};
}
`
export default GlobalStyle
