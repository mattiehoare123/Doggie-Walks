import React from 'react'
import styled from 'styled-components'
import { Hero } from './components/Hero'
import { Content } from './components/Content'
import DogRunning from './assets/AboutUs/dog-running.jpg'
import DogWoods from './assets/AboutUs/dog-woods.jpg'

const DogInWoods = styled.img`
width: 100%;
margin-bottom: ${(props) => props.theme.margin.bottom}
`
export const about_us = () => {
  return (
    <React.Fragment>
      <Hero title="About Us" image={DogRunning}/>
      <Content>
        <article>
          <p>
            Doggie walks are committed to ensuring that your pet is safe, healthy and active. Our canine
            friends should feel different terrain under their paws, hear different sounds and see different
            sights and have a decent sniff about!
          </p>
          <p>
            While dogs need daily exercise in order to stay healthy, for many people it's not always possible
            to walk their pets regularly. Thats why we established Doggie Walks, to help people across <span>Lancashire</span> and <span>Merseyside</span> ensure their dogs live happy lives.
          </p>
        </article>
        <DogInWoods src={DogWoods} alt="Dog on a path in the woods"/>
        <article>
          <h2>How It Works</h2>
          <p>
            However, we also accept <span>drop-offs</span> at your nearest local branch. You can find out more about where your nearest
            branch is via our <span>contact page</span>.
          </p>
          <p>
            Your dog will be collected from your <span>home</span> and taken to a local park for a walk with their pals. Exercise, mental
            stimulation, socialisation and play make for a happier, calmer and more contented dog. With a maximum of 4 dogs per
            walk you can be sure that your best friend is getting all the attention they deserve.
          </p>
        </article>
      </Content>
    </React.Fragment>

  )
}
