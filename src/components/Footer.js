import React from 'react';
import dogHouse from '../assets/Footer/dog-house.svg';
import grass from '../assets/Footer/grass.svg';
import styled from 'styled-components';

const FooterContainer = styled.div`
background: #4A3B34;
`
const Grass = styled.div`
margin-top: 100px;
background: url('${ grass}') repeat;
right: 20px;
height: 40px;
`

const StyledFooter = styled.footer`
max-width: 1150px;
margin: 0 auto;
padding: 2.5em 2.3em 9em;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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

@media(${(props) => props.theme.responsive.laptop}) {
  font-size: 1.9rem;
}
`
const CallUs = styled.p`
@media(${(props) => props.theme.responsive.laptop}) {
  grid-column: 3/4;
  text-align: right;
  font-size: 2rem;
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
            01695 883 112
          </CallUs>
        </StyledFooter>
      </FooterContainer>
    </React.Fragment>
  )
}
