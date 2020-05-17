import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import home from '../assets/MobileNavigation/home.svg';
import team from '../assets/MobileNavigation/team.svg';
import services from '../assets/MobileNavigation/services.svg';
import gallery from '../assets/MobileNavigation/gallery.svg';
import contact from '../assets/MobileNavigation/contact.svg';
import logo from '../assets/MobileNavigation/logo-background.svg';

const StickyNav = styled.section`
width: 100%;
position: fixed;
bottom: 0;
@media (min-width: 650px){
  display: none;
  }
}
`
const LogoImage = styled.img`
position: relative;
top: 25px;
display: block;
margin: 0 auto;
`

const MobileNav = styled.nav`
padding: 20px 0 10px;
background-color: #f6f6f6;
display: flex;
justify-content: space-around;
height: 80px;

.selected > p  {
  color: ${(props) => props.theme.colors.orange};

}

li {
  height: 55px;
}
`
const StyledLink =  styled(NavLink)`
text-decoration: none;
`

const Icon = styled.img`
width: 42.8px;
height: 34.9px;
`

const IconText = styled.p`
font-size: 1.3rem;
color: #878585;
text-align: center;
`


export const MobileNavigation = () => {
  return (
    <StickyNav>
      <LogoImage src={logo} alt=""/>
        <MobileNav>
          <li>
            <StyledLink to="home" activeClassName="selected">
              <Icon src={home} alt="Home icon"/>
              <IconText>Home</IconText>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="about_us" activeClassName="selected">
              <Icon src={team} alt="Three team members icon"/>
              <IconText>About Us</IconText>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="services_and_cost" activeClassName="selected">
              <Icon src={services} alt="A dog walking a dog icon"/>
              <IconText>Services</IconText>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="gallery" activeClassName="selected">
              <Icon src={gallery} alt="A picture icon"/>
              <IconText>Gallery</IconText>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="contact" activeClassName="selected">
              <Icon src={contact} alt="An email icon"/>
              <IconText>Contact</IconText>
            </StyledLink>
          </li>
        </MobileNav>
    </StickyNav>
  )
}
