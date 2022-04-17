import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Home = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  max-width: 1920px;
  padding: 60px 100px;
  gap: 50px;

  h1 {
    font-size: 4.8rem;
    color: #1e293b;
    align-self: flex-start;
  }

  @media (max-width: 1500px) {
    padding: 60px 50px;
  }

  @media (max-width: 720px) {
    padding: 60px 25px;
  }
`
export const Search = styled.section`
  display: flex;
  align-items: center;
  gap: 25px;
  align-self: flex-start;

  label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #f1f5f9;
    padding: 0 20px 0 0;
    gap: 10px;
    border-radius: 10px;
  }

  input {
    box-sizing: border-box;
    padding: 12px 20px;
    border: none;
    background-color: transparent;
    border-radius: 10px;
    font-size: 1.6rem;
    font-weight: 700;
    color: #1e293b;
  }

  input:focus {
    outline: 2px solid #475569;
  }

  input::placeholder {
    font-weight: 400;
    color: #94a3b8;
  }

  select {
    box-sizing: border-box;
    padding: 12px 20px;
    width: 300px;
    border: none;
    border-radius: 10px;
    background-color: #f1f5f9;
    font-size: 1.6rem;
    color: #1e293b;
  }

  select:hover {
    outline: 2px solid #475569;
  }

  option {
    font-size: 1.6rem;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    align-self: center;

    label {
      width: 325px;
    }

    select {
      width: 325px;
    }
  }
`
