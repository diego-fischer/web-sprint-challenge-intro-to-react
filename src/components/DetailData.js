import styled from 'styled-components'
import './custom-styling.css'
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
  DetailRow,
  CardLink,
} from './Card'
import React from 'react'

export default function DetailData(props) {
  console.log('PROPS IN DETAILS', props)

  return (
    <React.Fragment>
      <DetailRow>
        <p className='div3'>Name:</p>
        <div className='div3' />
        <p>{props.name}</p>
      </DetailRow>

      <DetailRow>
        <p className='div3'>Birth Year:</p>
        <div className='div3' />
        <p>{props.birthYear}</p>
      </DetailRow>
    </React.Fragment>
  )
}
