import React from 'react'
import { Hero } from './components/Hero'
import { PhotoCard } from './components/PhotoCard'
import { Content } from './components/Content'
import DogFace from './assets/Team/gallery-hero.jpg'
import Lori from './assets/Team/lori-hanson.jpg'
import Gary from './assets/Team/gary-simpson.jpg'
import Rebecca from './assets/Team/rebecca-harrison.jpg'
import Jonna from './assets/Team/joanna-davies.jpg'
import styled from 'styled-components';

const TeamGrid = styled.section`
@media(${(props) => props.theme.responsive.ipad}) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}
`
const MeetTheTeamHeading = styled.h2`
grid-column: 1/-1;
`

const PhotoCardsGrid = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(160px, 2fr));
justify-items: center;
grid-gap: 1em;
margin-bottom: ${(props) => props.theme.margin.bottom};
`

export const meet_the_team = () => {
  return (
    <React.Fragment>
      {/*Hero*/}
      <Hero title="Meet The Team" image={DogFace}/>
      {/*Meet The Team*/}
      <Content>
        <TeamGrid>
          <MeetTheTeamHeading>Meet The Doggie Walks Team!</MeetTheTeamHeading>
          <article>
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
          {/*Employees Pictures properties passed to component*/}
          <PhotoCardsGrid>
            <PhotoCard
              image={Lori}
              alt="Close up of a short brown hair female smiling in red lipstick"
              name="Lori Hanson"
              title="Founder of Doggie Walks"
              />
            <PhotoCard
              image={Gary}
              alt="Close up of a ginger hair male with a short beard smirking"
              name="Gary Simpson"
              title="Team Manager"
              />
            <PhotoCard
              image={Rebecca}
              alt="Close up of a brown hair female with glasses with a tight lipped smile"
              name="Rebecca Harrison"
              title="Professional Dog Walker"
              />
            <PhotoCard
              image={Jonna}
              alt="Close up of a tanned blonde hair female smiling"
              name="Joanna Davies"
              title="Professional Dog Walker"
              />
          </PhotoCardsGrid>
        </TeamGrid>
      </Content>
    </React.Fragment>
  )
}
