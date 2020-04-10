import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.section`
width: 100%;
height: 17vh;
background-size: cover;
background-repeat: no-repeat;
background-size: 100% 100%;
display: flex;
align-items: center;
justify-content: center;
poisiton: relative;
margin-bottom: 2.5em;

&::after {
  content: '';
  display: block;
  position: absolute;
  background: ${(props) => props.theme.colors.black};
  opacity: 0.5;
  width: 100%;
  height: 17vh;
  top: 1;
  left: 0;
}
`
const HeroTitle = styled.h1`
width: 190px;
font-size: 2rem;
text-align: center;
color: ${(props) => props.theme.colors.white};
color: ${(props) => props.theme.weights.semi};
z-index: 1;
`

export const Hero = (props) => {

  return (
    <StyledHero style={{backgroundImage: `url(${props.image})` }}>
      <HeroTitle>{props.title}</HeroTitle>
    </StyledHero>
  )
}
