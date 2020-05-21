import React from 'react';
import styled from 'styled-components';

export const Container = styled.main`
padding: 0 2em 2.5em;

@media(${(props) => props.theme.responsive.ipad}) {
  padding: 0 inherit;
}
max-width: 1000px;
margin: 0 auto;
//Contact Links within the main text
a {
  color: ${(props) => props.theme.colors.orange};
  font-weight: ${(props) => props.theme.weights.bold};
  &:hover {
    text-decoration: underline;
  }
}
`

export const Content = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}
