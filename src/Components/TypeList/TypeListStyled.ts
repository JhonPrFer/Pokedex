import styled from 'styled-components'

export const TypeList = styled.section``
export const List = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 100%;
  max-width: 1920px;
  gap: 25px;
  justify-content: space-between;

  @media (max-width: 1600px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 1150px) {
    grid-template-columns: auto auto;
    justify-content: center;
  }

  @media (max-width: 800px) {
    grid-template-columns: auto;
  }
`
export const Nav = styled.nav`
  padding: 20px;
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  button {
    padding: 4px 10px;
    border: none;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
  }

  .fairy {
    background: rgba(214, 133, 173, 0.7);
    color: #fff;
  }
  .fairy:hover {
    background-color: #d685ad;
  }

  .steel {
    background: rgba(183, 183, 206, 0.7);
    color: #1e293b;
  }
  .steel:hover {
    background: #b7b7ce;
  }

  .dark {
    background: rgba(112, 87, 70, 0.7);
    color: #fff;
  }
  .dark:hover {
    background: #705746;
  }

  .dragon {
    background: rgba(111, 53, 252, 0.7);
    color: #fff;
  }
  .dragon:hover {
    background: #6f35fc;
  }

  .ghost {
    background: rgba(115, 87, 151, 0.7);
    color: #fff;
  }
  .ghost:hover {
    background: #735797;
  }

  .rock {
    background: rgba(182, 161, 54, 0.7);
    color: #fff;
  }
  .rock:hover {
    background: #b6a136;
  }

  .bug {
    background: rgba(166, 185, 26, 0.7);
    color: #1e293b;
  }
  .bug:hover {
    background: #a6b91a;
  }

  .psychic {
    background: rgba(249, 85, 135, 0.7);
    color: #fff;
  }
  .psychic:hover {
    background: #f95587;
  }

  .flying {
    background: rgba(169, 143, 243, 0.7);
    color: #fff;
  }
  .flying:hover {
    background: #a98ff3;
  }

  .ground {
    background: rgba(226, 191, 101, 0.7);
    color: #1e293b;
  }
  .ground:hover {
    background: #e2bf65;
  }

  .poison {
    background: rgba(163, 62, 161, 0.7);
    color: #fff;
  }
  .poison:hover {
    background: #a33ea1;
  }

  .fighting {
    background: rgba(194, 46, 40, 0.7);
    color: #fff;
  }
  .fighting:hover {
    background: #c22e28;
  }

  .ice {
    background: rgba(150, 217, 214, 0.7);
    color: #1e293b;
  }
  .ice:hover {
    background: #96d9d6;
  }

  .grass {
    background: rgba(122, 199, 76, 0.7);
    color: #fff;
  }
  .grass:hover {
    background: #7ac74c;
  }

  .electric {
    background: rgba(247, 208, 44, 0.7);
    color: #1e293b;
  }
  .electric:hover {
    background: #f7d02c;
  }

  .water {
    background: rgba(99, 144, 240, 0.7);
    color: #fff;
  }
  .water:hover {
    background: #6390f0;
  }

  .fire {
    background: rgba(238, 129, 48, 0.7);
    color: #fff;
  }
  .fire:hover {
    background: #ee8130;
  }

  .normal {
    background: rgba(168, 167, 122, 0.7);
    color: #fff;
  }
  .normal:hover {
    background: #a8a77a;
  }
`
export const AltList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;

  p {
    font-size: 1.6rem;
    color: #94a3b8;
    font-weight: 500;
    text-align: center;
    width: 278px;
    height: 319px;
  }
`
