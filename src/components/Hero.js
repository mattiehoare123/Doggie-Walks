import React from 'react';
import styled from 'styled-components';
import { Locations } from '../components/Locations';
import { BackgroundCover } from '../theme/mixins.js';

const StyledHero = styled.section`
width: 100%;
height: 25vh;
display: flex;
${BackgroundCover};
align-items: center;
justify-content: center;
position: relative;

@media(${(props) => props.theme.responsive.ipad}) {
  height: 25vh;
}

@media(${(props) => props.theme.responsive.laptop}) {
  height: 60vh;
}

&::after {
  content: '';
  display: block;
  position: absolute;
  background: ${(props) => props.theme.colors.black};
  opacity: 0.6;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
`
const HeroTitle = styled.h1`
font-size: clamp(2.5rem, 8vw, 5.5rem);
text-align: center;
text-transform: uppercase;
color: ${(props) => props.theme.colors.white};
font-weight: ${(props) => props.theme.weights.bold};
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
