import React from 'react'
import { Content } from './components/Content'

export const contact = () => {
  return (
    <Content>
      <h1>Contact</h1>
      <p>
        We have a wide variety of daycare facilities, listed below is all our locations and their address’.
        Feel free to pop in or fill out the form below.
      </p>
      <article>
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text"/>

          <label htmlFor="">Email Address</label>
          <input type="text"/>

          <label htmlFor="">Contact Number</label>
          <input type="text"/>

          <label htmlFor="">Postcode</label>
          <input type="text"/>


          <label htmlFor="">Message</label>
          <input type="text"/>

          <button>Submit</button>
        </form>
        <section>
          <ul>
            <li>Ormskirk</li>
            <li>Doggie walks</li>
            <li>3-5 St Helens Road</li>
            <li>Ormskirk</li>
            <li>L35 4PO</li>
          </ul>
          <ul>
            <li>Southport</li>
            <li>Doggie walks</li>
            <li>150 Lord Street</li>
            <li>Southport</li>
            <li>PR9 0NP</li>
          </ul>
          <ul>
            <li>Warrington</li>
            <li>Doggie walks</li>
            <li>47 Old Liverpool Road</li>
            <li>Warrington</li>
            <li>WA5 1AF</li>
          </ul>
        </section>
      </article>
    </Content>
  )
}
