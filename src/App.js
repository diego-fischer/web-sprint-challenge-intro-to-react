import './App.css'
import Characters from './components/Characters'
import styled from 'styled-components'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const App = () => {
  const [objArr, setObjArr] = useState(null)

  const Loading = styled.h1`
    width: 80%;
    text-align: center;
  `

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people')
      .then((r) => {
        setObjArr(r.data)
      })
      .catch((err) => console.log(err))
  }, [])

  console.log('App objArr', objArr)

  return (
    <React.Fragment>
      <h1 style={{ 'text-align': 'center', margin: '50px 0 0 0' }}>
        Star Wars Cave!!!
      </h1>
      <h2 style={{ 'text-align': 'center' }}>By Diego Fischer</h2>
      {objArr == null ? (
        <Loading>Loading</Loading>
      ) : (
        <Characters props={objArr} />
      )}
    </React.Fragment>
  )
}

export default App
