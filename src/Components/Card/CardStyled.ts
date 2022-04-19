import styled from 'styled-components'

export const Card = styled.article`
  display: grid;
  grid-template-columns: auto auto;
  width: 324px;
  height: 160px;
  padding: 25px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s;

  h2 {
    text-transform: capitalize;
    font-size: 2.4rem;
    color: #1e293b;
    text-overflow: clip;
    white-space: nowrap;
    overflow-y: auto;
    height: max-content;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 5px;
    grid-row: 2;

    h3 {
      padding: 5px 10px;
      width: max-content;
      border-radius: 50px;
      font-family: 1.2rem;
    }
  }

  &.fairy {
    background: rgba(214, 133, 173, 0.1);
  }
  &.fairy:hover {
    background: rgba(214, 133, 173, 0.7);
  }
  .fairy {
    background-color: #d685ad;
    color: #fff;
  }

  &.steel {
    background: rgba(183, 183, 206, 0.1);
  }
  &.steel:hover {
    background: rgba(183, 183, 206, 0.7);
  }
  .steel {
    background: #b7b7ce;
    color: #1e293b;
  }

  &.dark {
    background: rgba(112, 87, 70, 0.1);
  }
  &.dark:hover {
    background: rgba(112, 87, 70, 0.7);
  }
  .dark {
    background: #705746;
    color: #fff;
  }

  &.dragon {
    background: rgba(111, 53, 252, 0.1);
  }
  &.dragon:hover {
    background: rgba(111, 53, 252, 0.7);
  }
  .dragon {
    background: #6f35fc;
    color: #fff;
  }

  &.ghost {
    background: rgba(115, 87, 151, 0.1);
  }
  &.ghost:hover {
    background: rgba(115, 87, 151, 0.7);
  }
  .ghost {
    background: #735797;
    color: #fff;
  }

  &.rock {
    background: rgba(182, 161, 54, 0.1);
  }
  &.rock:hover {
    background: rgba(182, 161, 54, 0.7);
  }
  .rock {
    background: #b6a136;
    color: #fff;
  }

  &.bug {
    background: rgba(166, 185, 26, 0.1);
  }
  &.bug:hover {
    background: rgba(166, 185, 26, 0.7);
  }
  .bug {
    background: #a6b91a;
    color: #1e293b;
  }

  &.psychic {
    background: rgba(249, 85, 135, 0.1);
  }
  &.psychic:hover {
    background: rgba(249, 85, 135, 0.7);
  }
  .psychic {
    background: #f95587;
    color: #fff;
  }

  &.flying {
    background: rgba(169, 143, 243, 0.1);
  }
  &.flying:hover {
    background: rgba(169, 143, 243, 0.7);
  }
  .flying {
    background: #a98ff3;
    color: #fff;
  }

  &.ground {
    background: rgba(226, 191, 101, 0.1);
  }
  &.ground:hover {
    background: rgba(226, 191, 101, 0.7);
  }
  .ground {
    background: #e2bf65;
    color: #1e293b;
  }

  &.poison {
    background: rgba(163, 62, 161, 0.1);
  }
  &.poison:hover {
    background: rgba(163, 62, 161, 0.7);
  }
  .poison {
    background: #a33ea1;
    color: #fff;
  }

  &.fighting {
    background: rgba(194, 46, 40, 0.1);
  }
  &.fighting:hover {
    background: rgba(194, 46, 40, 0.7);
  }
  .fighting {
    background: #c22e28;
    color: #fff;
  }

  &.ice {
    background: rgba(150, 217, 214, 0.1);
  }
  &.ice:hover {
    background: rgba(150, 217, 214, 0.7);
  }
  .ice {
    background: #96d9d6;
    color: #1e293b;
  }

  &.grass {
    background: rgba(122, 199, 76, 0.1);
  }
  &.grass:hover {
    background: rgba(122, 199, 76, 0.7);
  }
  .grass {
    background: #7ac74c;
    color: #fff;
  }

  &.electric {
    background: rgba(247, 208, 44, 0.1);
  }
  &.electric:hover {
    background: rgba(247, 208, 44, 0.7);
  }
  .electric {
    background: #f7d02c;
    color: #1e293b;
  }

  &.water {
    background: rgba(99, 144, 240, 0.1);
  }
  &.water:hover {
    background: rgba(99, 144, 240, 0.7);
  }
  .water {
    background: #6390f0;
    color: #fff;
  }

  &.fire {
    background: rgba(238, 129, 48, 0.1);
  }
  &.fire:hover {
    background: rgba(238, 129, 48, 0.7);
  }
  .fire {
    background: #ee8130;
    color: #fff;
  }

  &.normal {
    background: rgba(168, 167, 122, 0.1);
  }
  &.normal:hover {
    background: rgba(168, 167, 122, 0.7);
  }
  .normal {
    background: #a8a77a;
    color: #fff;
  }
`

export const Imagediv = styled.div`
  width: max-content;
  height: max-content;
  grid-column: 2/2;
  grid-row: 1/3;
`

export const AltCard = styled.article`
  display: grid;
  grid-template-columns: auto auto;
  width: 324px;
  height: 160px;
  padding: 25px;
  border-radius: 25px;
  background-color: #f1f5f9;

  .placename {
    width: 120px;
    height: 26px;
    background-color: #e2e8f0;
    border-radius: 10px;
  }

  .placeimage {
    width: 120px;
    height: 120px;
    background-color: #e2e8f0;
    border-radius: 10px;
    grid-row: 1/3;
    grid-column: 2;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .placetype {
    width: 56px;
    height: 22px;
    background-color: #e2e8f0;
    padding: 8px;
    border-radius: 10px;
  }

  .placetypename {
    background-color: #94a3b8;
    width: 40px;
    height: 6px;
    border-radius: 10px;
  }
`
