/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { useEffect, useState } from 'react'

import { Pokemons } from '@/types/Pokemons'

import Card from '../Card/Card'
import * as S from './IDListStyled'

export default function IdList({ search }: Props) {
  const [pokemons, setPokemons] = useState<Pokemons | null>()
  const [page, setPage] = useState(0)
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=18&offset=${18 * page}`)
      .then(res => res.json())
      .then((json: Pokemons) => setPokemons(json))
  }, [page])

  return pokemons ? (
    <S.IDList>
      <nav>
        <button onClick={() => setPage(0)}>1</button>
        <button
          onClick={page === 0 ? () => setPage(0) : () => setPage(page - 1)}
        >
          {'<'}
        </button>
        <p>{page + 1}</p>
        <input
          type="number"
          placeholder="page"
          onChange={e => setPage(Number(e.target.value))}
        />
        <button
          onClick={page === 62 ? () => setPage(62) : () => setPage(page + 1)}
        >
          {'>'}
        </button>
        <button onClick={() => setPage(62)}>63</button>
      </nav>
      {pokemons.results
        .filter(val => {
          if (search === '') {
            return val
          }
          if (
            val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          ) {
            return val
          }
        })
        .map(pokemon => (
          <Card name={pokemon.name} />
        ))}
    </S.IDList>
  ) : (
    <S.IDList>
      <p>a</p>
    </S.IDList>
  )
}

interface Props {
  search: string
}
