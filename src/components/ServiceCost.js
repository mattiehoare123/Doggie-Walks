import React from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";


const Service = styled.section`
// To display the special off sign inline with the title
&:nth-child(3) > div:nth-child(2) > h2:nth-child(1) {
  display: inline-block;
}
/*
Special offer has been pushed text down so therefore picture is not aligned
with text which this fixtures
*/
&:nth-child(3) > img:nth-child(1) {
  align-self: center;
}

@media(${(props) => props.theme.responsive.ipad}) {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: 40px;
}
`

const ServiceVector = styled.img`
margin-bottom: ${(props) => props.theme.margin.bottom}
width: 268px;
height: 177px;
`
const Cost = styled.p`
font-weight: ${(props) => props.theme.weights.semi};
color: ${(props) => props.theme.colors.blue};
display: inline-block;
margin-right: 1.4em;
`
const Time = styled.p`
display: inline-block;
font-size: 1.5rem;

a {
  font-size: inherit;
}
`

export const ServiceCost = ({image, alt, service, cost, time, description}) => {
  return (
    <Service>
      <ServiceVector src={image} alt={alt}/>
      <div>
        <h2>{service}</h2>
        <Cost>£{cost}/DAY</Cost>
        <Time>Duration: {time} (enquire <NavLink to="contact">here</NavLink> for more)</Time>
        <p>
          {description}
        </p>
      </div>
    </Service>
  )
}
