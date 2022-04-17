import { useEffect, useState } from 'react'

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
          .map(pokemon => (
            <Card name={pokemon.pokemon.name} />
          ))}
      </S.List>
    </S.TypeList>
  ) : (
    <p>a</p>
  )
}

interface Props {
  search: string
}
