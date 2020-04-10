import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

const Header = styled.header`
display: flex;
margin: 0 20px;
justify-content: space-between;
align-content: center;
`

const Logo = styled.img`
width: 100px;
height: 85px;
`

const NavBar = styled.nav`
@media only screen and (max-width: 800px) {
  display: none
}
ul {
  display: flex;
  justify-content: space-around;
}
li {
  font-size: 2.5rem;
}
`
const StyledLink =  styled(Link)`
text-decoration: none;
color: ${(props) => props.theme.colors.black}
`
const Contact = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
`

const ContactDetails = styled.a`
text-decoration: none;
font-size: 1.5rem;

&:first-child {
  color: ${(props) => props.theme.colors.orange};
  font-weight: ${(props) => props.theme.weights.semi};
  margin-bottom: .5em;
}

&:last-child {
  color: ${(props) => props.theme.colors.blue}
}
`

export const Navigation = () => {
  return (
    <Header>
      <Logo src={logo} alt="Dog paw with doggie walks underneath" />
      <NavBar>
        <ul>
          <li><StyledLink to="/">Home</StyledLink></li>
          <li><StyledLink to="about_us">About</StyledLink></li>
          <li><StyledLink to="services_and_cost">Services & Cost</StyledLink></li>
          <li><StyledLink to="gallery">Gallery</StyledLink></li>
          <li><StyledLink to="contact">Contact</StyledLink></li>
        </ul>
      </NavBar>
      <Contact>
        <ContactDetails href="">01695 883 112</ContactDetails>
        <ContactDetails href="info@doggiewalks.co.uk">info@doggiewalks.co.uk</ContactDetails>
      </Contact>
    </Header>
  )
}
