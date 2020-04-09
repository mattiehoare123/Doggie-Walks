import React from 'react'
import { Hero } from './components/Hero'
import { Content } from './components/Content'
import DogFace from './assets/Team/dog-face.jpg'
import Lori from './assets/Team/lori-hanson.jpg'
import Gary from './assets/Team/gary-simpson.jpg'
import Rebecca from './assets/Team/rebecca-harrison.jpg'
import Jonna from './assets/Team/joanna-davies.jpg'


export const meet_the_team = () => {
  return (
    <Content>
      <Hero title="Do You Need Your Dog Walking" image={DogFace}/>
      <article>
        <h2>Meet The Doggie Walks Team!</h2>
        <p>
          We’re fully trained and insured to work with animals and are committed to the health
          and benefits of your pet. We aim to keep providing the best knowledge regarding dogs as we can,
          and to do this we believe you cannot sit still in this occupation as we learn more about dogs daily.
        </p>
        <p>
          We ensure that our knowledge is kept up-to-date by attending regular seminars and courses presented by
          well-respected canine trainers, behaviorists and practitioners.
        </p>
      </article>
      <section>
        <figure>
          <img src={Lori} alt="Close up of a short brown hair female smiling in red lipstick"/>
          <p>Lori Hanson</p>
          <p>Founder of Doggie Walks</p>
        </figure>
        <figure>
          <img src={Gary} alt="Close up of a ginger hair male with a short beard smirking"/>
          <p>Gary Simpson</p>
          <p>Team Manager</p>
        </figure>
        <figure>
          <img src={Rebecca} alt="Close up of a brown hair female with glasses with a tight lipped smile"/>
          <p>Rebecca Harrison</p>
          <p>Professional Dog Walker</p>
        </figure>
        <figure>
          <img src={Jonna} alt="Close up of a tanned blonde hair female smiling"/>
          <p>Joanna Davies</p>
          <p>Professional Dog Walker</p>
        </figure>
      </section>
    </Content>
  )
}
