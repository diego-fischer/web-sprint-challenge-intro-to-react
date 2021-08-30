import styled from 'styled-components'

export default function Character(props) {
  const DivName = styled.div`
    width: 80%;
    text-align: left;
  `

  return <DivName>{props.name}</DivName>
}
