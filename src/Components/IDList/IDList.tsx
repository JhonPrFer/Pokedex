import { useEffect, useState } from 'react'

import { Pokemons } from '@/types/Pokemons'

import * as S from './IDListStyled'

export default function IdList() {
  const [pokemons, setPokemons] = useState<Pokemons | null>()
  const [page, setPage] = useState(0)
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=18&offset=${18 * page}`)
      .then(res => res.json())
      .then((json: Pokemons) => setPokemons(json))
  }, [page])

  return pokemons ? (
    <S.IDList>
      <section>
        <button
          onClick={page === 0 ? () => setPage(0) : () => setPage(page - 1)}
        >
          {'<'}
        </button>
        <p className="actual-page">{page + 1}</p>
        <p>of</p>
        <button>63</button>
        <button
          onClick={page === 62 ? () => setPage(62) : () => setPage(page + 1)}
        >
          {'>'}
        </button>
      </section>
      <p>{pokemons.results.map(pokemon => `${pokemon.name}/ `)}</p>
    </S.IDList>
  ) : (
    <S.IDList>
      <p>a</p>
    </S.IDList>
  )
}
