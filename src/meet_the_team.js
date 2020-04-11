import React from 'react'
import { Hero } from './components/Hero'
import { Content } from './components/Content'
import DogFace from './assets/Team/dog-face.jpg'
import Lori from './assets/Team/lori-hanson.jpg'
import Gary from './assets/Team/gary-simpson.jpg'
import Rebecca from './assets/Team/rebecca-harrison.jpg'
import Jonna from './assets/Team/joanna-davies.jpg'
import styled from 'styled-components';

const TeamGrid = styled.section`
@media(${(props) => props.theme.responsive.laptop}) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
`

const MeetTheTeamHeading = styled.h2`
grid-column: 1/-1;
`

const PhotoCardsGrid = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(130px, 2fr));
justify-items: center;
grid-gap: 1em;
margin-bottom: ${(props) => props.theme.margin.bottom};
`

const PhotoCard = styled.figure`
background-color: #F7F7F7;
width: 150px;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 1em;
`
const Name = styled.p`
font-weight: ${(props) => props.theme.weights.semi};
margin: .8em 0 0;
`

const JobTitle = styled.p`
font-size: 1rem;
color: ${(props) => props.theme.colors.blue};
`

export const meet_the_team = () => {
  return (
    <Content>
      <Hero title="Meet The Team" image={DogFace}/>
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
        <PhotoCardsGrid>
          <PhotoCard>
            <img src={Lori} alt="Close up of a short brown hair female smiling in red lipstick"/>
            <Name>Lori Hanson</Name>
            <JobTitle>Founder of Doggie Walks</JobTitle>
          </PhotoCard>
          <PhotoCard>
            <img src={Gary} alt="Close up of a ginger hair male with a short beard smirking"/>
            <Name>Gary Simpson</Name>
            <JobTitle>Team Manager</JobTitle>
          </PhotoCard>
          <PhotoCard>
            <img src={Rebecca} alt="Close up of a brown hair female with glasses with a tight lipped smile"/>
            <Name>Rebecca Harrison</Name>
            <JobTitle>Professional Dog Walker</JobTitle>
          </PhotoCard>
          <PhotoCard>
            <img src={Jonna} alt="Close up of a tanned blonde hair female smiling"/>
            <Name>Joanna Davies</Name>
            <JobTitle>Professional Dog Walker</JobTitle>
          </PhotoCard>
        </PhotoCardsGrid>
      </TeamGrid>
    </Content>
  )
}
