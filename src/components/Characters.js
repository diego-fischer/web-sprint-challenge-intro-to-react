import Character from './Character'
import React from 'react'

export default function Characters(props) {
  console.log('Characters Props', props)
  console.log('Characters props["props"]', props['props'])

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
