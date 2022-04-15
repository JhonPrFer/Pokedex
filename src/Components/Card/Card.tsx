import { useEffect, useState } from 'react'

import { Pokemon } from '@/types/Pokemon'

export default function Card({ name }: Props) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then((json: Pokemon) => setPokemon(json))
  }, [name])
  return pokemon ? (
    <p>
      {`${pokemon.name} `}
      {pokemon.types.map(type => `${type.type.name} `)}
    </p>
  ) : (
    <p>a</p>
  )
}

interface Props {
  name: string
}
