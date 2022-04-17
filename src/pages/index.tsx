import { useEffect, useState } from 'react'

import IDList from '@/Components/IDList/IDList'
import TypeList from '@/Components/TypeList/TypeList'
import * as S from '@/styles/HomeStyled'

export default function Home() {
  const [filter, setFilter] = useState('pokemon')
  const [search, setSearch] = useState('')

  useEffect(() => {
    setFilter('pokemon')
    setSearch('')
  }, [])

  return (
    <S.Wrapper>
      <S.Home>
        <S.Search>
          <label htmlFor="search">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search Pokemon"
              defaultValue={search}
              onChange={e => setSearch(e.target.value)}
            />
            <p>aaa</p>
          </label>
          <select
            name="filter"
            id="filter"
            defaultValue={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option value="pokemon">ID</option>
            <option value="type">Type</option>
          </select>
        </S.Search>
        <h1>Pokedex</h1>
        {filter === 'type' ? (
          <TypeList search={search} />
        ) : (
          <IDList search={search} />
        )}
      </S.Home>
    </S.Wrapper>
  )
}
