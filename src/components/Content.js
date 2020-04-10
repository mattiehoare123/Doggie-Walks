import React from 'react';
import styled from 'styled-components';

export const Container = styled.main`
padding: 0 2em;
max-width: 700px;
margin: 0 auto;
`

export const Content = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}
