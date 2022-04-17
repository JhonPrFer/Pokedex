/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { useEffect, useState } from 'react'

import { Pokemons } from '@/types/Pokemons'

import Card from '../Card/Card'
import * as S from './IDListStyled'

export default function IdList({ search }: Props) {
  const [pokemons, setPokemons] = useState<Pokemons | null>()
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
      .then(res => res.json())
      .then((json: Pokemons) => setPokemons(json))
  }, [])

  return pokemons ? (
    <S.IDList>
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
      <p>
        We didn`&apos;`t find Pokemons with the indicated filters. Are you sure
        everything is ok?
      </p>
    </S.IDList>
  )
}

interface Props {
  search: string
}
