import React from 'react'
import styled from 'styled-components'
import { Hero } from './components/Hero'
import { Content } from './components/Content'
import DogGroup from './assets/Services/dogs-group.jpg'
import SpecialOffer from './assets/special-offer.svg'
import DogWalking from './assets/Services/dog-walking.svg'
import HouseCalls from './assets/Services/house-calls.svg'
import DayCare from './assets/Services/day-care.svg'


const Service = styled.section`
position: relative;

// To display the special off sign inline with the title
&:nth-child(3) > div:nth-child(2) > h2:nth-child(1) {
  display: inline-block;
}

&:nth-child(3) > img:nth-child(1) {
  align-self: center;
}

@media(${(props) => props.theme.responsive.ipad}) {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: 40px;

}
`
const ServiceVector = styled.img`
margin-bottom: 1em;
width: 268px;
height: 177px;
`
const SpecialOfferSign = styled.img`
width: 100px;
height: 80px;
position: relative;
margin: 0 auto;
`

const Cost = styled.p`
font-weight: ${(props) => props.theme.weights.semi};
color: ${(props) => props.theme.colors.blue};
display: inline-block;
margin-right: 1.4em;
`
const Time = styled.p`
display: inline-block;
font-size: 1.5rem;
`
export const services_and_cost = () => {
  return (
    <React.Fragment>
      <Hero title="Services & Cost" image={DogGroup}/>
      <Content>
        <p>
          Your dog shall receive the full-length time it deserves. Check for your local branch and pop in if you’re unsure which service is right for you. Every dog is unique,
          meaning that every dog deserves our full attention 7 days a week.
        </p>
        <Service>
          <ServiceVector src={DogWalking} alt="Male with a blue hoody and jeans on walking his dog"/>
          <div>
            <h2>Dog Walking</h2>
            <Cost>£12/H</Cost>
            <Time>Duration: 1 hour (enquire for more)</Time>
            <p>
              Not all dogs enjoy group walks, therefore we provide two different services. Solo or group, discover which option
               is best for your dog.
             </p>
          </div>
        </Service>
        <Service>
          <ServiceVector src={HouseCalls} alt="Female with blue shirt on in a living room stroking a dog"/>
          <div>
            <h2>House Calls</h2>
            <SpecialOfferSign src={SpecialOffer} alt="50% off house calls for new customer blue discount sign"/>
            <br/>
            <Cost>£15/H</Cost>
            <Time>Duration: 1 hour (enquire for more)</Time>
            <p>
              Need your dog looking after while you’re not home? This service allows you to have peace of mind while we ensure
              that your dog has the attention and care it deserves
            </p>
          </div>
        </Service>
        <Service>
          <ServiceVector src={DayCare} alt="Female with a blue hoody and sunglasses on outside a dog care centre with a dog"/>
          <div>
            <h2>Day Care</h2>
            <Cost>£60/DAY</Cost>
            <Time>Duration: 8 hours per day</Time>
            <p>
              Our professional day care centers provide the most up to date and clean facilities which ensures that
              your dog is safe, protected and healthy. This will cover all services from feeding, bathing walking and sleeping.
            </p>
          </div>
        </Service>
      </Content>
    </React.Fragment>
  )
}
