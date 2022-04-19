import Image from 'next/image'
import { useEffect, useState } from 'react'

import img from '@/public/Images/noResults.png'
import { PokeType } from '@/types/PokeType'

import Card from '../Card/Card'
import * as S from './TypeListStyled'

export default function TypeList({ search }: Props) {
  const [typeId, setTypeId] = useState(1)
  const [type, setType] = useState<PokeType | null>(null)
  const typeArray = [
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy',
  ]

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${typeId}`)
      .then(res => res.json())
      .then((json: PokeType) => setType(json))
  }, [typeId])
  return type ? (
    <S.TypeList>
      <S.Nav>
        {typeArray.map((element, index) => {
          const i = index + 1
          return (
            <button className={element} onClick={() => setTypeId(i)}>
              {element}
            </button>
          )
        })}
      </S.Nav>
      <S.List>
        {type.pokemon
          .filter(val => {
            if (search === '') {
              return val
            }
            if (
              val.pokemon.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return val
            }
            return 0
          })
          .map((pokemon, index) => {
            const key = index

            return <Card key={key} name={pokemon.pokemon.name} />
          })}
      </S.List>
    </S.TypeList>
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
