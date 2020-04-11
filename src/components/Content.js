import React from 'react';
import styled from 'styled-components';

export const Container = styled.main`
padding: 0 2em;
@media(${(props) => props.theme.responsive.ipad}) {
  padding: 0 5em;
}
@media(${(props) => props.theme.responsive.laptop}) {
  padding: 0 80px;
}
max-width: 1250px;
margin: 0 auto;
`

export const Content = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}
