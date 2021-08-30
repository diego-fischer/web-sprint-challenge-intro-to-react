import styled from 'styled-components'
import './custom-styling.css'
import React, { useState } from 'react'
import Details from './Details'
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
  CardButton,
  CardLink,
} from './Card'

export default function Character(props) {
  const [expanded, setExpanded] = useState(false)
  const ExpandBtn = styled.div`
    width: 30px;
    text-align: left;
  `
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
      <div className='characterName'>
        <CardHeader>{props.name}</CardHeader>
      </div>
      <div className='emptySpace' />
      <div className='expandBtn' onClick={decideWhatToDo}>
        <ExpandBtn>+</ExpandBtn>
      </div>

      {expanded && <Details props={props} />}
    </CardWrapper>
  )
}
