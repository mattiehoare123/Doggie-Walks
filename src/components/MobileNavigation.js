import React from 'react';
import styled from 'styled-components';
import { MobileNavLink } from '../components/MobileNavLinks'
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
height: 80px;
//Active colour
.selected > p  {
  color: ${(props) => props.theme.colors.orange};
}

ul {
  display: flex;
  justify-content: space-around;
}

li {
  height: 55px;
}
`
export const MobileNavigation = () => {
  return (
    <StickyNav>
      <LogoImage src={logo} alt=""/>
        <MobileNav>
          <ul>
            <MobileNavLink
              path="home"
              icon={home}
              alt="Home icon"
              text="Home"
              />
            <MobileNavLink
              path="about_us"
              icon={team}
              alt="Three team members icon"
              text="About Us"
              />
            <MobileNavLink
              path="services_and_cost"
              icon={services}
              alt="A dog walking a dog icon"
              text="Services"
              />
            <MobileNavLink
              path="gallery"
              icon={gallery}
              alt="A picture icon"
              text="Gallery"
              />
            <MobileNavLink
              path="contact"
              icon={contact}
              alt="An email icon"
              text="Contact"
              />
          </ul>
        </MobileNav>
    </StickyNav>
  )
}
