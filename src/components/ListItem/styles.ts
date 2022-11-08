import styled from 'styled-components'

type ContainerProps = {
  done: boolean
}

export const Item = styled.li(({ done }: ContainerProps) => (
  `
  display: flex;
  align-items: center;
  background-color: #20212C;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;

  input {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  label {
    color: #CCC;
    text-decoration: ${!done ? 'initial' : 'line-through'}
  }
`
))
