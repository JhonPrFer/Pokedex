import { useState } from 'react'

import IDList from '@/Components/IDList/IDList'
import * as S from '@/styles/HomeStyled'

export default function Home() {
  const [filter, setFilter] = useState('Pokemon')
  const [search, setSearch] = useState('')

  return (
    <S.Wrapper>
      <S.Home>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Serch Pokemon"
          onChange={e => setSearch(e.target.value)}
        />

        <select
          name="filter"
          id="filter"
          onChange={e => setFilter(e.target.value)}
        >
          <option value="Pokemon">ID</option>
          <option value="Type">Type</option>
        </select>
        <h1>Pokedex</h1>
        <p>{filter}</p>
        <IDList search={search} />
      </S.Home>
    </S.Wrapper>
  )
}
