import React from 'react';
import styled from 'styled-components';
import { Locations } from '../components/Locations';

const StyledHero = styled.section`
width: 100%;
height: 25vh;
background-size: cover;
background-repeat: no-repeat;
background-size: 100% 100%;
display: flex;
align-items: center;
justify-content: center;
position: relative;

@media(${(props) => props.theme.responsive.ipad}) {
  height: 25vh;
}

@media(${(props) => props.theme.responsive.laptop}) {
  height: 50vh;
}

&::after {
  content: '';
  display: block;
  position: absolute;
  background: ${(props) => props.theme.colors.black};
  opacity: 0.5;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
`
const HeroTitle = styled.h1`
font-size: 2.5rem;
@media(${(props) => props.theme.responsive.ipad}) {
  font-size: 3.5rem;
}
@media(${(props) => props.theme.responsive.laptop}) {
  font-size: 4.5rem;
}
text-align: center;
text-transform: uppercase;
color: ${(props) => props.theme.colors.white};
color: ${(props) => props.theme.weights.bold};
z-index: 1;
`

export const Hero = (props) => {

  return (
    <React.Fragment>
      <StyledHero style={{backgroundImage: `url(${props.image})` }}>
        <HeroTitle>{props.title}</HeroTitle>
      </StyledHero>
      <Locations/>
    </React.Fragment>

  )
}
