import React from 'react';
import dogHouse from '../assets/Footer/dog-house.svg';

export const Footer = () => {
  return (
    <React.Fragment>
      <img src={dogHouse} alt="Dog house with a dog paw inprinted on the front" />
      <section>
        <h3>Opening Times</h3>
        <ul>
          <li>Monday – Friday (8am – 7pm)</li>
          <li>Saturday (9am – 5pm)</li>
          <li>Sunday (12pm - 5pm)</li>
        </ul>
      </section>
      <section>
        <p>
          Call us to walk your dog on: <br />
          01695 883 112
        </p>
      </section>
    </React.Fragment>
  )
}
