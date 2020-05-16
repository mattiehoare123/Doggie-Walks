import React from 'react';
import styled from 'styled-components'
import DogBone from '../assets/dog-bone.svg';

const LocationContainer = styled.div`
background: ${(props) => props.theme.colors.blue};
`

const LocationsList = styled.ul`
display: flex;
flex-wrap: wrap;
width: 100%;
max-width: 1300px;
margin: 0 auto;
justify-content: space-around;
margin-bottom: 2.5em;
padding: .5em;
`
const Area = styled.li`
font-size: 1.4rem;
color: ${(props) => props.theme.colors.white};
position: relative;

@media(${(props) => props.theme.responsive.ipad}) {
  font-size: 1.6rem;
}

@media(${(props) => props.theme.responsive.laptop}) {
  font-size: 1.8rem;
}

&::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 3px;
  border-right: 1px solid white;
  height: 7px;
  margin-left: 8px;
}

@media(${(props) => props.theme.responsive.ipad}) {
  &::after {
    background: url('${ DogBone }');
    background-size: 100% 100%;
    height: 20px;
    width: 20px;
    top: 0;
    left: 80px;
    border: none;
  }
}

@media(${(props) => props.theme.responsive.laptop}) {
  &::after {
    left: 130px;
  }
}
&:nth-child(5)::after {
  display: none;
}
`
export const Locations = () => {
  return (
    <React.Fragment>
      <LocationContainer>
        <LocationsList>
          <Area>Ormskirk</Area>
          <Area>Southport</Area>
          <Area>Preston</Area>
          <Area>Liverpool</Area>
          <Area>Warrington</Area>
        </LocationsList>
      </LocationContainer>
    </React.Fragment>
  )
}
