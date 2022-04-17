import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Pokemon } from '@/types/Pokemon'

import * as S from './CardStyled'

export default function Card({ name }: Props) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then((json: Pokemon) => setPokemon(json))
  }, [name])
  return pokemon ? (
    <S.Card className={`${pokemon.types[0].type.name}`}>
      <h2>{pokemon.name}</h2>
      <S.Imagediv>
        <Image
          src={
            pokemon.sprites.front_default
              ? pokemon.sprites.front_default
              : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
          }
          alt={`${pokemon.name} Image`}
          height={120}
          width={120}
        />
      </S.Imagediv>
      <section>
        {pokemon.types.map(type => (
          <h3 className={`type ${type.type.name}`}>
            {type.type.name.toUpperCase()}
          </h3>
        ))}
      </section>
    </S.Card>
  ) : (
    <p>a</p>
  )
}

interface Props {
  name: string
}
