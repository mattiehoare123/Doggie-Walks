import React from 'react';
import styled from 'styled-components'
import { flexColumn } from '../theme/mixins.js'


const PhotoCardStyle = styled.figure`
background-color: #F7F7F7;
width: 160px;
height: 200px;
${flexColumn}
align-items: center;
padding-top: 1.5em;

&:first-of-type,
&:nth-of-type(4) {
transform: rotate(4deg)
}

&:nth-of-type(2),
&:nth-of-type(3) {
transform: rotate(-4deg)
}
`

const Name = styled.p`
font-weight: ${(props) => props.theme.weights.semi};
margin: .8em 0 0;
`

const JobTitle = styled.p`
font-size: 1.2rem;
color: ${(props) => props.theme.colors.blue};
`

export const PhotoCard = ({image, alt, name, title}) => {
  return (
    <PhotoCardStyle>
      <img src={image} alt={alt}/>
      <Name>{name}</Name>
      <JobTitle>{title}</JobTitle>
    </PhotoCardStyle>
  )
}
