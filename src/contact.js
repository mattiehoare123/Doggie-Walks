import React from 'react'
import styled, {css} from 'styled-components'
import { Hero } from './components/Hero'
import { Content } from './components/Content'
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
const ContactLabel = styled.label`
margin-top: .5em;

`
//To share styles for the input and textarea
const styles = css`
background: #F2F2F2;
border: 1px solid #A9A8A8;
border-radius: .2em;
padding: .5em;
margin: .5em 0;
`
const InputField = styled.input`${styles}`;
const Message = styled.textarea`${styles}`;

const Submit = styled.button`
padding: .5em;
width: 100px;
margin: .5em 0;
border-radius: .2em;
border: none;
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
const Location = styled.ul`
line-height: 1.5;
li:first-child {
  color: ${(props) => props.theme.colors.blue};
  font-weight: ${(props) => props.theme.weights.semi};
}
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
            <ContactLabel htmlFor="name">Name</ContactLabel>
            <InputField id="name" type="text"/>

            <ContactLabel htmlFor="email">Email Address</ContactLabel>
            <InputField id="email" type="text"/>

            <ContactLabel htmlFor="phone number">Contact Number</ContactLabel>
            <InputField id="phone number" type="text"/>

            <ContactLabel htmlFor="postcode">Postcode</ContactLabel>
            <InputField id="postcode" type="text"/>

            <ContactLabel htmlFor="message">Message</ContactLabel>
            <Message name="message" id="message" cols="30" rows="10"></Message>

            <Submit>Submit</Submit>
          </ContactForm>
          <StoreLocations>
            <Location>
              <li>Ormskirk</li>
              <li>Doggie walks</li>
              <li>3-5 St Helens Road</li>
              <li>Ormskirk</li>
              <li>L35 4PO</li>
            </Location>
            <Location>
              <li>Southport</li>
              <li>Doggie walks</li>
              <li>150 Lord Street</li>
              <li>Southport</li>
              <li>PR9 0NP</li>
            </Location>
            <Location>
              <li>Warrington</li>
              <li>Doggie walks</li>
              <li>47 Old Liverpool Road</li>
              <li>Warrington</li>
              <li>WA5 1AF</li>
            </Location>
          </StoreLocations>
        </ContactGrid>
      </Content>
  </React.Fragment>
  )
}
