import React from 'react';
import dogHouse from '../assets/Footer/dog-house.svg';
import styled from 'styled-components';

const StyledFooter = styled.footer`
background: #4A3B34;
padding: 1em 2.3em 9em;
display: grid;
grid-template-columns: 130px auto;
`
const DogHouse = styled.img`
width: 100px;
height: 100px;
`
const OpeningTimes = styled.section`
color: ${(props) => props.theme.colors.white};
margin-top: 1em;
`
const OpeningTimesTitle = styled.h3`
font-size: 2.3rem;
font-weight: ${(props) => props.theme.weights.regular};
margin-bottom: .5em;
`
const OpeningDayTimes = styled.ul`
line-height: 1.3;
font-size: 1.5rem;
`
const CallUs = styled.p`
grid-column: 1/-1;
margin-top: .8em;
font-size: 2.3rem;
color: ${(props) => props.theme.colors.orange};
font-weight: ${(props) => props.theme.weights.semi};

`
export const Footer = () => {
  return (
    <StyledFooter>
      <DogHouse src={dogHouse} alt="Dog house with a dog paw inprinted on the front" />
      <OpeningTimes>
        <OpeningTimesTitle>Opening Times</OpeningTimesTitle>
        <OpeningDayTimes>
          <li>Monday – Friday (8am – 7pm)</li>
          <li>Saturday (9am – 5pm)</li>
          <li>Sunday (12pm - 5pm)</li>
        </OpeningDayTimes>
      </OpeningTimes>
      <CallUs>
        Call Us To Walk Your Dog On: <br />
        01695 883 112
      </CallUs>
    </StyledFooter>
  )
}
