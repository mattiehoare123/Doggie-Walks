import React from 'react';
import styled from 'styled-components'

const ServiceImage = styled.img`
width: 96px;
height: 89px;
margin-bottom: .7em;

@media(${(props) => props.theme.responsive.laptop}) {
  height: 150px;
  width: 150px;
}
`
const ServiceTitle = styled.p`
font-weight: ${(props) => props.theme.weights.bold};
`

const Pupply = styled.p`
font-size: 1.5rem;
`

export const ServiceOffer = ({image, alt, title, subtitle}) => {
  return (
    <figure>
      <ServiceImage src={image} alt={alt}/>
      <ServiceTitle>{title}</ServiceTitle>
      <Pupply>{subtitle}</Pupply>
    </figure>
  )
}
