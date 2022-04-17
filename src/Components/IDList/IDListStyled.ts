import styled from 'styled-components'

export const IDList = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 100%;
  max-width: 1920px;
  gap: 25px;
  justify-content: space-between;

  @media (max-width: 1600px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 1150px) {
    grid-template-columns: auto auto;
    justify-content: center;
  }

  @media (max-width: 800px) {
    grid-template-columns: auto;
  }
`
