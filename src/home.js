import React from 'react'
import { Content } from './components/Content'
import Dog from './assets/Home/dog-panting.jpg'
import DogPaw from './assets/Home/dog-paw.jpg'
import DogSitting from './assets/Home/dog-sitting.jpg'
import DogHugging from './assets/Home/dog-hugging.jpg'
import DogYawning from './assets/Home/dog-yawning.jpg'
import styled from 'styled-components';
import { Locations } from './components/Locations';

const HomeHeadings = styled.h2`
text-align: center;
font-size: 3rem;
&::after {
  content: '';
  display: block;
  height: 3px;
  width: 60px;
  margin: 1em auto;
  background: ${(props) => props.theme.colors.blue};
}
&:nth-of-type(1) {
  font-size: 2.5rem;
  grid-column: 1/-1;
}
`

const Hero = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 1em;
height: 25vh;
background-image: url(${Dog});
background-size: cover;
background-repeat: no-repeat;
background-size: 100% 100%;


@media(${(props) => props.theme.responsive.laptop}) {
  div {
    width: 1100px;
    margin: 0 auto;
  }
  height: 60vh;
}
`
const DogWalkingTitle = styled.h1`
color: ${(props) => props.theme.colors.white};
font-size: 2rem;
@media(${(props) => props.theme.responsive.ipad}) {
  font-size: 3.5rem;
}
@media(${(props) => props.theme.responsive.laptop}) {
  font-size: 4.5rem;
}
`

const CallNow = styled.button`
color: ${(props) => props.theme.colors.white};
font-weight: ${(props) => props.theme.weights.bold};
width: 100px;
@media(${(props) => props.theme.responsive.ipad}) {
  width: 150px;
}
text-transform: uppercase;
background: #43A838;
border: none;
padding: .4em;
font-size: 1.5rem;
border-radius: .1em;
margin-top: .5em;
`

const PhoneNumber = styled.a`
text-decoration: none;
color: ${(props) => props.theme.colors.white};
font-weight: ${(props) => props.theme.weights.bold};
text-transform: uppercase;
padding: .2em;
font-size: 1.5rem;
@media(${(props) => props.theme.responsive.ipad}) {
  font-size: 2rem;
}
`

const TextRight = styled.p`
@media(${(props) => props.theme.responsive.ipad}) {
  display: grid;
  grid-template-columns: 250px 1fr;
  align-items: center;
  grid-gap: 1em;
}
`
const HumanHoldingPaw = styled.img`
display: block;
margin: 0 auto;
width: 245px;
height: 237px;
margin-bottom: 1em;
@media(${(props) => props.theme.responsive.ipad}) {
  height: 250px;
  width: 250px;
}
`
const Services = styled.article`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
justify-content: center;

figure {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`

const ServiceImage = styled.img`
width: 96px;
height: 89px;
margin-bottom: .7em;

@media(${(props) => props.theme.responsive.laptop}) {
  height: 150px;
  width: 150px;
}
`
const ServiceTitle = styled.p`
font-weight: ${(props) => props.theme.weights.bold};
`

const Pupply = styled.p`
font-size: 1.5rem;
`
const ServiceText = styled.p`
grid-column: 1/-1;
`

export const home = () => {
  return (
    <React.Fragment>
      <Hero>
        <div>
          <DogWalkingTitle>Do You Need<br/> Your Dog Walking?</DogWalkingTitle>
          <CallNow>
            <PhoneNumber href="mailto:info@doggiewalks.co.uk">Call Now</PhoneNumber>
          </CallNow>
        </div>
      </Hero>
      <Locations/>
      <Content>
        <article>
          <HomeHeadings>Welcome to Doggie Walks!</HomeHeadings>
          <p>
            We are committed to providing professional
            and personal care to your belovedfour-legged friends.
          </p>
          <p>
            We are based in <span>Ormskirk</span> we offer exciting and stimulating walks
            all over the beautiful <span>Lancashire</span> and <span>Merseyside</span> countryside. We
            guarantee your dog will come home tired and content.
          </p>
          <TextRight>
            <HumanHoldingPaw src={DogPaw} alt="A blonde female holding a dogs paw by a lake"/>
            We recognise every dog's needs are different and how busy daily life can be.
            With services starting from only £10 we ensure you the best possible service
            to suit the needs of both you and your pooch.
          </TextRight>
          <p>
            We are also fully insured for everybody's peace of mind, for more information on this please
            contact us or email at <a href="">info@doggiewalks.co.uk</a>
          </p>
        </article>
        <Services>
          <HomeHeadings>We Also Offer Different Services Such As</HomeHeadings>
          <figure>
            <ServiceImage src={DogSitting} alt="Brown dog sitting on a couch"/>
            <ServiceTitle style={{"margin": 0}}>Pet Sitting </ServiceTitle>
            <Pupply>(Pupply and Elderly)</Pupply>
          </figure>
          <figure>
            <ServiceImage src={DogHugging} alt="A blonde female hugging a dog on a chair"/>
            <ServiceTitle>Small Pet Visits</ServiceTitle>
          </figure>
          <figure>
            <ServiceImage src={DogYawning} alt="Black dog in bed yanwing"/>
            <ServiceTitle>Overnight Pet Sitting</ServiceTitle>
          </figure>
          <ServiceText>
            There's something to suit everyone but if you can't find what you're
            looking for don't hesitate to <span>contact us</span> and we'll find the perfect solution
            for you and your companion!
          </ServiceText>
        </Services>
      </Content>
    </React.Fragment>
  )
}
