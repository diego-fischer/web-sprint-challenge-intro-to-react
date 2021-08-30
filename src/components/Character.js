import styled from 'styled-components'
import './custom-styling.css'
import React, { useState } from 'react'
import DetailData from './DetailData'
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  NameRow,
  DetailsContainer,
  CardButton,
  CardLink,
} from './Card'

export default function Character(props) {
  const [expanded, setExpanded] = useState(false)
  const ExpandBtn = styled.div`
    width: 30px;
    text-align: left;
  `

  console.log('PROPS IN CHARACTER', props)
  const decideWhatToDo = () => {
    console.log('CLICKED!')
    console.log('EXPANDED', expanded)
    if (expanded === false) {
      setExpanded(true)
    } else {
      setExpanded(false)
    }
  }

  return (
    <CardWrapper>
      <NameRow>
        <div className='characterName'>
          <CardHeader>{props.name}</CardHeader>
        </div>

        <div className='emptySpace' />

        <div className='expandBtn' onClick={decideWhatToDo}>
          <ExpandBtn>+</ExpandBtn>
        </div>
      </NameRow>
      {expanded && (
        <DetailsContainer>
          <DetailData
            key={props.name}
            birthYear={props.birthYear}
            created={props.created}
            edited={props.edited}
            eyeColor={props.eyeColor}
            films={props.films}
            gender={props.gender}
            hairColor={props.hairColor}
            height={props.height}
            homeworld={props.homeworld}
            mass={props.mass}
            name={props.name}
            url={props.url}
            skin_color={props.skinColor}
            species={props.species}
            starships={props.starships}
            vehicles={props.vehicles}
          />
        </DetailsContainer>
      )}
    </CardWrapper>
  )
}
