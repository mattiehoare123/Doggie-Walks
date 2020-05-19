import React from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';

const Header = styled.header`
display: flex;
padding: 0 2em;
margin: 0 auto;
justify-content: space-between;
align-content: center;

@media (${(props) => props.theme.responsive.ipad}) {
  width: min(100%, 1200px);
  display: grid;
  grid-template-columns: auto 700px auto;
  padding: 0 5em;
}
`
const Logo = styled.img`
width: 100px;
height: 75px;
`
const NavBar = styled.nav`
@media (max-width: 550px) {
  display: none;
}
display: flex;
align-items: center;

ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
li {
  font-weight: 500;
  .selected  {
    color: ${(props) => props.theme.colors.orange};
  }
}

`
const StyledLink = styled(NavLink)`
text-decoration: none;
color: ${(props) => props.theme.colors.black};
&:hover {
  color: ${(props) => props.theme.colors.orange};
}
`
const Contact = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
`

const ContactDetails = styled.a`
text-decoration: none;
font-size: 1.7rem;

&:hover {
  text-decoration: underline;
}

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
      <StyledLink to="/">
        <Logo src={logo} alt="Dog paw with doggie walks underneath" />
      </StyledLink>
      <NavBar>
        <ul>
          <li><StyledLink to="home" activeClassName="selected">Home</StyledLink></li>
          <li><StyledLink to="about_us" activeClassName="selected">About</StyledLink></li>
          <li><StyledLink to="services_and_cost" activeClassName="selected">Services & Cost</StyledLink></li>
          <li><StyledLink to="gallery" activeClassName="selected">Gallery</StyledLink></li>
          <li><StyledLink to="contact" activeClassName="selected">Contact</StyledLink></li>
        </ul>
      </NavBar>
      <Contact>
        <ContactDetails href="tel:01695 883 112">01695 883 112</ContactDetails>
        <ContactDetails href="mailto:info@doggiewalks.co.uk">info@doggiewalks.co.uk</ContactDetails>
      </Contact>
    </Header>
  )
}
