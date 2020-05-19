import React from 'react';
import dogHouse from '../assets/Footer/dog-house.svg';
import grass from '../assets/Footer/grass.svg';
import styled from 'styled-components';

const FooterContainer = styled.div`
background: #4A3B34;
`
const Grass = styled.div`
background: url('${ grass}') repeat;
right: 20px;
height: 35px;
`

const StyledFooter = styled.footer`
max-width: 1150px;
margin: 0 auto;
padding: 1em 2.3em 9em;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
grid-row-gap: 1em;
@media(${(props) => props.theme.responsive.laptop}) {
  padding: 2em;
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
font-weight: ${(props) => props.theme.weights.semi};
`
const OpeningDayTimes = styled.ul`
line-height: 1.3;
margin-top: .5em;
`
const CallUs = styled.p`
font-size: 2.3rem;
@media(${(props) => props.theme.responsive.laptop}) {
  grid-column: 3/4;
  text-align: right;
  margin-top: 0em;
}
grid-column: 1/-1;
color: ${(props) => props.theme.colors.orange};
font-weight: ${(props) => props.theme.weights.semi};
`
const PhoneNumber = styled.a`
font-size: 2.5rem;
color: ${(props) => props.theme.colors.orange};
font-weight: ${(props) => props.theme.weights.semi};
text-decoration: none;

&:hover {
  color: ${(props) => props.theme.colors.white};
}
`

export const Footer = () => {
  return (
    <React.Fragment>
      <Grass></Grass>
      <FooterContainer>
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
          <PhoneNumber href="tel:01695 883 112">01695 883 112</PhoneNumber>
          </CallUs>
        </StyledFooter>
      </FooterContainer>
    </React.Fragment>
  )
}
