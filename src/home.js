import React from 'react'
import { Hero } from './components/Hero'
import { Content } from './components/Content'
import Dog from './assets/Home/dog-panting.jpg'
import DogPaw from './assets/Home/dog-paw.jpg'
import DogSitting from './assets/Home/dog-sitting.jpg'
import DogHugging from './assets/Home/dog-hugging.jpg'
import DogYawning from './assets/Home/dog-yawning.jpg'
import styled from 'styled-components';

const Welcome = styled.h2`
font-size: 2rem;
`
const HumanHoldingPaw = styled.img`
display: block;
margin: 0 auto;
width: 245px;
height: 237px;
margin-bottom: 1em;
`
const Services = styled.article`
display: grid;
grid-template-columns: repeat(2, 1fr);
justify-content: center;

figure:last-of-type {
  grid-column: 1/-1;
}
}

figure {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`
const ServiceHeading = styled.h2`
grid-column: 1/-1;
text-align: center;

&::after {
  content: '';
  display: block;
  height: 3px;
  width: 20%;
  margin: 1em auto;
  background: ${(props) => props.theme.colors.blue};
}
`
const ServiceImage = styled.img`
width: 96px;
height: 89px;
margin-bottom: .7em;
`
const Pupply = styled.p`
font-size: 1rem;
`

const ServiceText = styled.p`
grid-column: 1/-1;
`

export const home = () => {
  return (
    <Content>
      <Hero title="Do You Need Your Dog Walking" image={Dog}/>
      <button>Call Now</button>
      <article>
        <Welcome>Welcome to Doggie Walks!</Welcome>
        <p>
          We are committed to providing professional
          and personal care to your belovedfour-legged friends.
        </p>
        <p>
          We are based in <span>Ormskirk</span> we offer exciting and stimulating walks
          all over the beautiful <span>Lancashire</span> and <span>Merseyside</span> countryside. We
          guarantee your dog will come home tired and content.
        </p>
        <p>
          <HumanHoldingPaw src={DogPaw} alt="A blonde female holding a dogs paw by a lake"/>
          We recognise every dog's needs are different and how busy daily life can be.
          With services starting from only <span>£10</span> we ensure you the best possible service
          to suit the needs of both you and your pooch.
        </p>
        <p>
          We are also fully insured for everybody's peace of mind, for more information on this please
          contact us or email at <a href="">info@doggiewalks.co.uk</a>
        </p>
      </article>
      <Services>
        <ServiceHeading>We Also Offer Different Services Such As</ServiceHeading>
        <figure>
          <ServiceImage src={DogSitting} alt="Brown dog sitting on a couch"/>
          <p style={{"margin": 0}}>Pet Sitting </p>
          <Pupply>(Pupply and Elderly)</Pupply>
        </figure>
        <figure>
          <ServiceImage src={DogHugging} alt="A blonde female hugging a dog on a chair"/>
          <p>Small Pet Visits</p>
        </figure>
        <figure>
          <ServiceImage src={DogYawning} alt="Black dog in bed yanwing"/>
          <p>Overnight Pet Sitting</p>
        </figure>
        <ServiceText>
          There's something to suit everyone but if you can't find what you're
          looking for don't hesitate to <span>contact us</span> and we'll find the perfect solution
          for you and your companion!
        </ServiceText>
      </Services>
    </Content>
  )
}
