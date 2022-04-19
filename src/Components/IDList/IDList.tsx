/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import Image from 'next/image'
import { useEffect, useState } from 'react'

import img from '@/public/Images/noResults.png'
import { Pokemons } from '@/types/Pokemons'

import Card from '../Card/Card'
import * as S from './IDListStyled'

export default function IdList({ search }: Props) {
  const [pokemons, setPokemons] = useState<Pokemons | null>()
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=3000&offset=0`)
      .then(res => res.json())
      .then((json: Pokemons) => setPokemons(json))
  }, [])

  return pokemons ? (
    <S.IDList>
      {pokemons.results
        .filter(val => {
          if (search.trim() === '') {
            return val
          }
          if (
            val.name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase().trim())
          ) {
            return val
          }
        })
        .map((pokemon, index) => {
          const key = index

          return <Card key={key} name={pokemon.name} />
        })}
    </S.IDList>
  ) : (
    <S.AltList>
      <Image src={img} alt="No results image" width={220} height={180} />
      <p>
        We didn&apos;t find Pokemons with the indicated filters. Are you sure
        everything is ok?
      </p>
    </S.AltList>
  )
}

interface Props {
  search: string
}
