import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.div`

`
const HeroImg = styled.img`

`
const HeroTitle = styled.h1`

`

export const Hero = (props) => {

  return (
    <HeroSection>
      <HeroImg src={props.image}  alt=""/>
      <HeroTitle>{props.title}</HeroTitle>
    </HeroSection>
  )
}
