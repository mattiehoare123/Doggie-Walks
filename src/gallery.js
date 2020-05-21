import React from 'react'
import styled from 'styled-components'
import { Helmet } from "react-helmet";
import { Hero } from './components/Hero'
import { Content } from './components/Content'
import DogFace from './assets/Gallery/dog-face.jpg'
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
//Each row will be 200px height
grid-auto-rows: 200px;
grid-gap: 15px;

@media(${(props) => props.theme.responsive.laptop}) {
  grid-template-columns: 3fr repeat(4,1fr) 3fr;
  grid-template-rows: 400px 300px 400px 400px;
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
      {/*HTML Title*/}
      <Helmet>
          <title>Gallery</title>
      </Helmet>
      <Hero title="Gallery" image={DogFace}/>
      <Content>
        <GalleryImages>
          <DogImage src={BlondeHavanesse} alt="Blonde havanesse dog laying on grass"/>
          <DogImage src={DogWalkingMountain} alt="Female with blue hat on walking a dog in the mountains"/>
          <DogImage src={BlackShepherd} alt="Black and tan german shepherd dog lying on grass"/>
          <DogImage src={TanPembroke} alt="Tan and white pembroke dog sitting in park"/>
          <DogImage src={BlondePembroke} alt="Blonde pembroke dog panting walking on edge of pond"/>
          <DogImage src={WhiteBulldog} alt="White and black bulldog on lead sitting in park" loading="lazy"/>
          <DogImage src={BlackBulldog} alt="Black and white bulldog sittin on grass" loading="lazy"/>
          <DogImage src={BlackLabrador} alt="Black labrador dog lying on grass" loading="lazy"/>
          <DogImage src={BrownLabrador} alt="Brown labrador dog lying on grass" loading="lazy"/>
        </GalleryImages>
      </Content>
    </React.Fragment>
  )
}
