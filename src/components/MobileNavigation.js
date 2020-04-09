import React from 'react';
import home from '../assets/home.svg';
import about from '../assets/about.svg';
import services from '../assets/services.svg';
import gallery from '../assets/gallery.svg';
import contact from '../assets/contact.svg';
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
