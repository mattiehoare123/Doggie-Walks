import React from 'react'
import { Hero } from './components/Hero'
import { Content } from './components/Content'
import Dog from './assets/Home/dog-panting.jpg'
import DogPaw from './assets/Home/dog-paw.jpg'
import DogSitting from './assets/Home/dog-sitting.jpg'
import DogHugging from './assets/Home/dog-hugging.jpg'
import DogYawning from './assets/Home/dog-yawning.jpg'
import styled from 'styled-components';

const Header = styled.img`
width: 100%;
`


export const home = () => {
  return (
    <Content>
      <Hero title="Do You Need Your Dog Walking" image={Dog}/>
      <button>Call Now</button>
      <article>
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
          <img src={DogPaw} alt="A blonde female holding a dogs paw by a lake"/>
          We recognise every dog's needs are different and how busy daily life can be.
          With services starting from only <span>£10</span> we ensure you the best possible service
          to suit the needs of both you and your pooch.
        </p>
        <p>
          We are also fully insured for everybody's peace of mind, for more information on this please
          contact us or email at <a href="">info@doggiewalks.co.uk</a>
        </p>
      </article>
      <article>
        <h2>We also offer different services such as</h2>
        <section>
          <img src={DogSitting} alt="Brown dog sitting on a couch"/>
          <p>Pet Sitting </p>
          <p>(Pupply and Elderly)</p>
        </section>
        <section>
          <img src={DogHugging} alt="A blonde female hugging a dog on a chair"/>
          <p>Small Pet Visits</p>
        </section>
        <section>
          <img src={DogYawning} alt="Black dog in bed yanwing"/>
          <p>Overnight Pet Sitting</p>
        </section>
        <p>
          There's something to suit everyone but if you can't find what you're
          looking for don't hesitate to <span>contact us</span> and we'll find the perfect solution
          for you and your companion!
        </p>
      </article>
    </Content>
  )
}
