import React from 'react';
import styled from 'styled-components';
import DogPaw from '../assets/dog-paws.svg'

export const Container = styled.main`
padding: 0 2em 2.5em;
background-image: url(${DogPaw});
background-size: 50% 50%;

@media(${(props) => props.theme.responsive.ipad}) {
  padding: 0 5em inherit;
  background-size: 100% 100%;
}
max-width: 1000px;
margin: 0 auto;
`

export const Content = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}
