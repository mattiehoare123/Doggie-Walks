import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';


const Header = styled.header`
display: grid;
grid-template-columns: 200px auto 250px;
grid-gap: 20px;
margin: 0 50px;
height: 100px;
align-content: center
`

const NavBar = styled.nav`
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
`

const contactDeatils = styled.a`
text-decoration: none;
font-size: 2.4rem;

&:first-child {
  color: ${(props) => props.theme.colors.orange};
  font-weight: ${(props) => props.theme.weights.semi};
}

&:last-child {
  color: ${(props) => props.theme.colors.blue}
}
`

export const Navigation = () => {
  return (
    <Header>
      <NavBar>
        <img src={logo} alt="Dog paw with doggie walks underneath" />
        <ul>
          <li><StyledLink to="/">Home</StyledLink></li>
          <li><StyledLink to="about_us">About</StyledLink></li>
          <li><StyledLink to="services_and_cost">Services & Cost</StyledLink></li>
          <li><StyledLink to="gallery">Gallery</StyledLink></li>
          <li><StyledLink to="contact">Contact</StyledLink></li>
        </ul>
      </NavBar>
      <Contact>
        <contactDeatils href="">01695 883 112</contactDeatils>
        <contactDeatils href="info@doggiewalks.co.uk">info@doggiewalks.co.uk</contactDeatils>
      </Contact>
    </Header>
  )
}
