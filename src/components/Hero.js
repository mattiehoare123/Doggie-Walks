import React from 'react';
import { Locations } from './Locations'

export const Hero = (props) => {
  return (
    <div>
      <img src={props.image} alt=""/>
      <h1>{props.title}</h1>
      <Locations/>
    </div>
  )
}
