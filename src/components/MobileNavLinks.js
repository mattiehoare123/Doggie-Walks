import React from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

const Icon = styled.img`
width: 42.8px;
height: 34.9px;
`

const IconText = styled.p`
font-size: 1.3rem;
color: #878585;
text-align: center;
`

export const MobileNavLink = ({path, icon, alt, text}) => {
  return (
    <li>
      <NavLink to={path} activeClassName="selected">
        <Icon src={icon} alt={alt}/>
        <IconText>{text}</IconText>
      </NavLink>
    </li>
  )
}
