import React from 'react'
import styled, {css} from 'styled-components'
import { ContactLabel, styles, InputField, Message} from './theme/form'
import { Hero } from './components/Hero'
import { Content } from './components/Content'
import { Input } from './components/Input'
import { Address } from './components/Address'
import HeroDog from './assets/Contact/contact-hero.jpg'

const ContactGrid = styled.article`
@media(${(props) => props.theme.responsive.ipad}) {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
}
`
const ContactForm = styled.form`
display: grid;
`
const Submit = styled.button`
padding: .5em;
width: 100px;
margin: .5em 0;
border-radius: .2em;
background: ${(props) => props.theme.colors.orange};
color: ${(props) => props.theme.colors.white};
text-transform: uppercase;
font-weight: ${(props) => props.theme.weights.semi};
`
const StoreLocations = styled.section`
margin: 2em 0;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
grid-row-gap: 20px;
`

export const contact = () => {
  return (
    <React.Fragment>
      <Hero title="Contact" image={HeroDog}/>
      <Content>
        <p>
          We have a wide variety of daycare facilities, listed below is all our locations and their address’.
          Feel free to pop in or fill out the form below.
        </p>
        <ContactGrid>
          <ContactForm action="">
            {/*Name*/}
            <Input
              name="name"
              label="Name"
              id="name"
              />
            {/*Email*/}
            <Input
              name="email"
              label="Email Address"
              id="email"
              type="email"
              />
            {/*Phone Number*/}
            <Input
              name="phone number"
              label="Contact Number"
              id="phone number"
              type="tel"
              />
            {/*Postcode*/}
            <Input
              name="postcode"
              label="Postcode"
              id="postcode"
              />
            {/*Message*/}
            <ContactLabel htmlFor="message">Message</ContactLabel>
            <Message name="message" id="message" cols="30" rows="10"></Message>
            {/*Submit*/}
            <Submit>Submit</Submit>
          </ContactForm>
          {/*Locations*/}
          <StoreLocations>
            {/*Ormskirk*/}
            <Address
              area="Ormskirk"
              address="3-5 St Helens Road"
              town="Ormskirk"
              postcode="L35 4PO"
              />
            {/*Southport*/}
            <Address
              area="Southport"
              address="150 Lord Street"
              town="Southport"
              postcode="PR9 0NP"
              />
            {/*Warrington*/}
            <Address
              area="Warrington"
              address="47 Old Liverpool Road"
              town="Warrington"
              postcode="WA5 1AF"
              />
          </StoreLocations>
        </ContactGrid>
      </Content>
  </React.Fragment>
  )
}
