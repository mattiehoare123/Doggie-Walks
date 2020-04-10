import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
padding: 0 2em;

`

export const Content = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}
