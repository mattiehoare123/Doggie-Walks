import React from 'react'
import styled from 'styled-components'
import { Content } from './components/Content'
import BlondeHavanesse from './assets/Gallery/light-blonde-havanese-dog.jpg'
import DogWalkingMountain from './assets/Gallery/dog-walking-mountains.jpg'
import BlackShepherd from './assets/Gallery/black-german-shepherd.jpg'
import TanPembroke from './assets/Gallery/tan-pembroke-dog.jpg'
import OrangeCharles from './assets/Gallery/orange-king-charles-dog.jpg'
import BlondePembroke from './assets/Gallery/blonde-pembroke.jpg'
import WhiteBulldog from './assets/Gallery/white-french-bulldog.jpg'
import BlackBulldog from './assets/Gallery/black-french-bulldog.jpg'
import BlackLabrador from './assets/Gallery/black-labrador-dog.jpg'
import BrownLabrador from './assets/Gallery/brown-labrador-dog.jpg'

const GalleryTitle = styled.h1`
text-align: center;
text-transform: uppercase;
color: ${(props) => props.theme.colors.orange};
margin: ${(props) => props.theme.margin.bottom} 0;
`
const DogImage = styled.img`
width: 100%;
height: 350px;
`

export const gallery = () => {
  return (
    <Content className="ContentGrid">
      <GalleryTitle>Gallery</GalleryTitle>
      <DogImage src={BlondeHavanesse} alt="Blonde havanesse dog laying on grass"/>
      <DogImage src={DogWalkingMountain} alt="Female with blue hat on walking a dog in the mountains"/>
      <DogImage src={BlackShepherd} alt="Black and tan german shepherd dog lying on grass"/>
      <DogImage src={TanPembroke} alt="Tan and white pembroke dog sitting in park"/>
      <DogImage src={OrangeCharles} alt="Orange and white king charles dog sitting "/>
      <DogImage src={BlondePembroke} alt="Blonde pembroke dog panting walking on edge of pond"/>
      <DogImage src={WhiteBulldog} alt="White and black bulldog on lead sitting in park"/>
      <DogImage src={BlackBulldog} alt="Black and white bulldog sittin on grass"/>
      <DogImage src={BlackLabrador} alt="Black labrador dog lying on grass"/>
      <DogImage src={BrownLabrador} alt="Brown labrador dog lying on grass"/>
    </Content>
  )
}
