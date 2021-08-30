import Character from './Character'
import React from 'react'
import styled from 'styled-components'

export default function Characters(props) {
  console.log('Characters Props', props)
  console.log('Characters props["props"]', props['props'])

  const BodySpacing = styled.div`
    padding-top: 50px;
  `

  return (
    <React.Fragment>
      <BodySpacing>
        {props['props'].map((el) => {
          console.log('Characters EL', el)
          return (
            <Character
              key={el.name}
              birthYear={el.birth_year}
              created={el.created}
              edited={el.edited}
              eyeColor={el.eye_color}
              films={el.films}
              gender={el.gender}
              hairColor={el.hair_color}
              height={el.height}
              homeworld={el.homeworld}
              mass={el.mass}
              name={el.name}
              url={el.url}
              skin_color={el.skin_color}
              species={el.species}
              starships={el.starships}
              vehicles={el.vehicles}
            />
          )
        })}
      </BodySpacing>
    </React.Fragment>
  )
}
