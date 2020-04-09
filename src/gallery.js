import React from 'react'
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


export const gallery = () => {
  return (
    <Content>
      <h1>Gallery</h1>
      <img src={BlondeHavanesse} alt="Blonde havanesse dog laying on grass"/>
      <img src={DogWalkingMountain} alt="Female with blue hat on walking a dog in the mountains"/>
      <img src={BlackShepherd} alt="Black and tan german shepherd dog lying on grass"/>
      <img src={TanPembroke} alt="Tan and white pembroke dog sitting in park"/>
      <img src={OrangeCharles} alt="Orange and white king charles dog sitting "/>
      <img src={BlondePembroke} alt="Blonde pembroke dog panting walking on edge of pond"/>
      <img src={WhiteBulldog} alt="White and black bulldog on lead sitting in park"/>
      <img src={BlackBulldog} alt="Black and white bulldog sittin on grass"/>
      <img src={BlackLabrador} alt="Black labrador dog lying on grass"/>
      <img src={BrownLabrador} alt="Brown labrador dog lying on grass"/>
    </Content>
  )
}
