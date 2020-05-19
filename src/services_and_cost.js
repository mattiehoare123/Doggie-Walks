import React from 'react'
import styled from 'styled-components'
import { Hero } from './components/Hero'
import { Content } from './components/Content'
import DogGroup from './assets/Services/dogs-group.jpg'
import SpecialOffer from './assets/special-offer.svg'
import DogWalking from './assets/Services/dog-walking.svg'
import HouseCalls from './assets/Services/house-calls.svg'
import DayCare from './assets/Services/day-care.svg'
import { ServiceCost } from './components/ServiceCost'

const SpecialOfferSign = styled.img`
width: 100px;
height: 80px;
`

export const services_and_cost = () => {
  return (
    <React.Fragment>
      {/*Hero*/}
      <Hero title="Services & Cost" image={DogGroup}/>
      <Content>
        <p>
          Your dog shall receive the full-length time it deserves. Check for your local branch and pop in if you’re unsure which service is right for you. Every dog is unique,
          meaning that every dog deserves our full attention 7 days a week.
        </p>
        {/*Dog Walking*/}
        <ServiceCost
          image={DogWalking}
          alt="Male with a blue hoody and jeans on walking his dog"
          service="Dog Walking"
          cost="12"
          time="1 hour"
          description="
          Not all dogs enjoy group walks, therefore we provide two different services. Solo or group, discover which option
          is best for your dog.
          "
          />
        {/*House Calls*/}
        <ServiceCost
          image={HouseCalls}
          alt="Female with blue shirt on in a living room stroking a dog"
          service="House Calls"
          cost="15"
          time="1 hour"
          description="
          Need your dog looking after while you’re not home? This service allows you to have peace of mind while we ensure
          that your dog has the attention and care it deserves
          "
          />
        {/*Day Care*/}
        <ServiceCost
          image={DayCare}
          alt="Female with a blue hoody and sunglasses on outside a dog care centre with a dog"
          service="House Calls"
          cost="60"
          time="8 hours"
          description="
          Our professional day care centers provide the most up to date and clean facilities which ensures that
          your dog is safe, protected and healthy. This will cover all services from feeding, bathing walking and sleeping.
          "
          />
          {/* <SpecialOfferSign src={SpecialOffer} alt="50% off house calls for new customer blue discount sign"/>*/}
      </Content>
    </React.Fragment>
  )
}
