import React from 'react'
import styled from 'styled-components'
import { Content } from './components/Content'

const ContactGrid = styled.article`
@media(${(props) => props.theme.responsive.laptop}) {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 40px;
}
`

const ContactForm = styled.form`
display: grid;
`
const ContactHeading = styled.h1`
text-align: center;
text-transform: uppercase;
color: ${(props) => props.theme.colors.orange};
margin: ${(props) => props.theme.margin.bottom} 0;
font-weight: ${(props) => props.theme.weights.bold};
`
const ContactLabel = styled.label`
font-size: 1.2rem;
margin-top: .5em;
`
const InputField = styled.input`
background: #F2F2F2;
border: 1px solid #A9A8A8;
border-radius: .2em;
padding: .7em;
margin: .5em 0;

`
const Submit = styled.button`
padding: .5em;
width: 100px;
margin: .5em auto 0;
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

li {
  font-size: 1.3rem;
  @media(${(props) => props.theme.responsive.laptop}) {
    font-size: 1.5rem;
  }
}
li:first-child {
  color: ${(props) => props.theme.colors.blue};
  font-weight: ${(props) => props.theme.weights.semi};
}
`

export const contact = () => {
  return (
    <Content>
      <ContactHeading>Contact</ContactHeading>
      <p>
        We have a wide variety of daycare facilities, listed below is all our locations and their address’.
        Feel free to pop in or fill out the form below.
      </p>
      <ContactGrid>
        <ContactForm action="">
          <ContactLabel htmlFor="">Name</ContactLabel>
          <InputField type="text"/>

          <ContactLabel htmlFor="">Email Address</ContactLabel>
          <InputField type="text"/>

          <ContactLabel htmlFor="">Contact Number</ContactLabel>
          <InputField type="text"/>

          <ContactLabel htmlFor="">Postcode</ContactLabel>
          <InputField type="text"/>

          <ContactLabel htmlFor="">Message</ContactLabel>
          <InputField name="" id="" cols="20" rows="5"></InputField>

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
  )
}
