import React from 'react'
import { Helmet } from "react-helmet";
import { Content } from './components/Content'
import { NavLink } from "react-router-dom";
import Dog from './assets/Home/dog-panting.jpg'
import DogPaw from './assets/Home/dog-paw.jpg'
import DogSitting from './assets/Home/dog-sitting.jpg'
import DogHugging from './assets/Home/dog-hugging.jpg'
import DogYawning from './assets/Home/dog-yawning.jpg'
import styled from 'styled-components';
import { ServiceOffer } from './components/ServiceOffer';
import { Locations } from './components/Locations';
import { flexColumn } from './theme/mixins.js'
import { BackgroundCover } from './theme/mixins.js'


const Hero = styled.section`
//Mixin for display flex and column direction
${flexColumn};
justify-content: center;
padding-left: 1em;
height: 25vh;
//Mixin for background image, cover and positon
${BackgroundCover(Dog)};

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
//Minmuim Size, Preferred Size & Maximum Size of font
font-size: clamp(2.5rem, 6vw, 4.5rem);

`

const CallNow = styled.button`
text-transform: uppercase;
background: #43A838;
padding: .4em;
font-size: 1.5rem;
border-radius: .1em;
margin-top: .5em;
transition: all;
transition-duration: 1s;
&:hover {
  transform: scale(1.2);
}
`

const PhoneNumber = styled.a`
color: ${(props) => props.theme.colors.white};
font-weight: ${(props) => props.theme.weights.bold};
text-transform: uppercase;
padding: .2em;
font-size: clamp(1.5rem, 3vw, 2rem);
`

const HomeHeadings = styled.h2`
text-align: center;
&::after {
  content: '';
  display: block;
  height: 3px;
  width: 60px;
  margin: .6em auto;
  background: ${(props) => props.theme.colors.blue};
}
&::before {
  content: '';
  height: 0px;
  width: 0px;
}
font-size: clamp(2.3rem, 3vw, 3rem);
grid-column: 1/-1;

`

const TextRight = styled.p`
@media(${(props) => props.theme.responsive.ipad}) {
  display: grid;
  grid-template-columns: 250px 1fr;
  align-items: center;
  grid-gap: 1em;
}

p {
  line-height: 2;
}
`
const HumanHoldingPaw = styled.img`
display: block;
margin: 0 auto;
width: 245px;
height: 237px;
margin-bottom: 1em;
@media(${(props) => props.theme.responsive.ipad}) {
  height: 200px;
  width: 200px;
}
`
const Services = styled.article`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
justify-content: center;

figure {
  ${flexColumn};
  align-items: center;
}
`

const ServiceText = styled.p`
grid-column: 1/-1;
`

export const home = () => {
  return (
    <React.Fragment>
      <Helmet>
          {/*Declare the title of the page*/}
          <title>Home</title>
      </Helmet>
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
          <p>
            We recognise every dog's needs are different and how busy daily life can be.
            With services starting from only <span>£10</span> we ensure you the best possible service
            to suit the needs of both you and your pooch.
          </p>
          </TextRight>
          <p>
            We are also fully insured for everybody's peace of mind, for more information on this please
            contact us or email at <a href="mailto:info@doggiewalks.co.uk">info@doggiewalks.co.uk</a>
          </p>
        </article>
        <Services>
          <HomeHeadings>We Also Offer Different Services Such As</HomeHeadings>
            <ServiceOffer
              image={DogSitting}
              alt="Brown dog sitting on a couch"
              title="Pet Sitting"
              subtitle="(Pupply and Elderly)"
              />
              <ServiceOffer
                image={DogHugging}
                alt="A blonde female hugging a dog on a chair"
                title="Small Pet Visits"
                />
                <ServiceOffer
                  image={DogYawning}
                  alt="Black dog in bed yanwing"
                  title="Overnight Pet Sitting"
                  />
          <ServiceText>
            There's something to suit everyone but if you can't find what you're
            looking for don't hesitate to <NavLink to="contact">contact us</NavLink> and we'll find the perfect solution
            for you and your companion!
          </ServiceText>
        </Services>
      </Content>
    </React.Fragment>
  )
}
