import { useState } from 'react'

import IDList from '@/Components/IDList/IDList'
import * as S from '@/styles/HomeStyled'

export default function Home() {
  const [filter, SetFilter] = useState('Pokemon')

  return (
    <S.Wrapper>
      <S.Home>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Serch Pokemon"
        />

        <select
          name="filter"
          id="filter"
          onChange={e => SetFilter(e.target.value)}
        >
          <option value="Pokemon">ID</option>
          <option value="Type">Type</option>
        </select>
        <h1>Pokedex</h1>
        <p>{filter}</p>
        <IDList />
      </S.Home>
    </S.Wrapper>
  )
}
