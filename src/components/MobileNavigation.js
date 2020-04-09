import React from 'react';
import home from '../assets/MobileNavigation/home.svg';
import about from '../assets/MobileNavigation/about.svg';
import services from '../assets/MobileNavigation/services.svg';
import gallery from '../assets/MobileNavigation/gallery.svg';
import contact from '../assets/MobileNavigation/contact.svg';
import contact from '../assets/logo.svg';

export const MobileNavigation = () => {
  return (
    <React.Fragment>
      <img src={logo} alt="Dog paw with doggie walks underneath"/>
      <nav>
        <img src={home} alt="Home icon"/>
        <img src={about} alt="Three team members icon"/>
        <img src={services} alt="A dog walking a dog icon"/>
        <img src={gallery} alt="A picture icon"/>
        <img src={contact} alt="An email icon"/>
      </nav>
    </React.Fragment>
  )
}
