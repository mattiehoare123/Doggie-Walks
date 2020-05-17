import React from 'react'
import styled from 'styled-components'
import { Hero } from './components/Hero'
import { Content } from './components/Content'
import GalleryHero from './assets/Gallery/gallery-hero.jpg'
import BlondeHavanesse from './assets/Gallery/light-blonde-havanese-dog.jpg'
import DogWalkingMountain from './assets/Gallery/dog-walking-mountains.jpg'
import BlackShepherd from './assets/Gallery/black-german-shepherd.jpg'
import TanPembroke from './assets/Gallery/tan-pembroke-dog.jpg'
import BlondePembroke from './assets/Gallery/blonde-pembroke.jpg'
import WhiteBulldog from './assets/Gallery/white-french-bulldog.jpg'
import BlackBulldog from './assets/Gallery/black-french-bulldog.jpg'
import BlackLabrador from './assets/Gallery/black-labrador-dog.jpg'
import BrownLabrador from './assets/Gallery/brown-labrador-dog.jpg'

const GalleryImages = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
grid-auto-rows: 250px;
grid-gap: 15px;
margin: 0 auto;

@media(${(props) => props.theme.responsive.laptop}) {
  grid-template-columns: 3fr repeat(4,1fr) 3fr;
  grid-template-rows: 400px 300px 350px 350px;
}
`
const DogImage = styled.img`
width: 100%;
height: 100%;

@media(${(props) => props.theme.responsive.laptop}) {
  &:nth-child(2) {
    grid-row: span 2;
    grid-column: span 4;
  }
  &:nth-child(6),
  &:nth-child(7) {
    grid-column: span 3;
  }

  &:nth-child(8),
  &:nth-child(9),
  &:nth-child(10)
   {
    grid-column: span 3;
  }
}
`

export const gallery = () => {
  return (
    <React.Fragment>
      <Hero title="Gallery" image={GalleryHero}/>
      <Content className="ContentGrid">
        <GalleryImages>
          <DogImage src={BlondeHavanesse} alt="Blonde havanesse dog laying on grass"/>
          <DogImage src={DogWalkingMountain} alt="Female with blue hat on walking a dog in the mountains"/>
          <DogImage src={BlackShepherd} alt="Black and tan german shepherd dog lying on grass"/>
          <DogImage src={TanPembroke} alt="Tan and white pembroke dog sitting in park"/>
          <DogImage src={BlondePembroke} alt="Blonde pembroke dog panting walking on edge of pond"/>
          <DogImage src={WhiteBulldog} alt="White and black bulldog on lead sitting in park"/>
          <DogImage src={BlackBulldog} alt="Black and white bulldog sittin on grass"/>
          <DogImage src={BlackLabrador} alt="Black labrador dog lying on grass"/>
          <DogImage src={BrownLabrador} alt="Brown labrador dog lying on grass"/>
        </GalleryImages>
      </Content>
    </React.Fragment>
  )
}
