import React from 'react';
import dogHouse from '../assets/Footer/dog-house.svg';
import styled from 'styled-components';

const StyledFooter = styled.footer`
background: #4A3B34;
padding: 1em 2.3em 9em;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
@media(${(props) => props.theme.responsive.laptop}) {
  padding-bottom: 2em;
}
`
const DogHouse = styled.img`
width: 100px;
height: 100px;
@media(${(props) => props.theme.responsive.laptop}) {
  width: 150px;
}
`
const OpeningTimes = styled.section`
color: ${(props) => props.theme.colors.white};
`
const OpeningTimesTitle = styled.h3`
font-size: 2.3rem;
font-weight: ${(props) => props.theme.weights.regular};
`
const OpeningDayTimes = styled.ul`
line-height: 1.3;
font-size: 1.5rem;
margin-top: .5em;
`
const CallUs = styled.p`
@media(${(props) => props.theme.responsive.laptop}) {
  grid-column: 3/4;
  text-align: right;
  font-size: 1.7rem;
  margin-top: 0em;
}
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
