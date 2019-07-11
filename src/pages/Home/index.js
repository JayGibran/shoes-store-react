import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import checkVans from '../../assets/images/check-vans.jpeg';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src={checkVans} alt="Tenis" />
        <strong>
          Tenis check vans com varias linhas para fazer um teste com varias
          linhas para fazer um teste
        </strong>
        <span>R$ 250,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>
          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img src={checkVans} alt="Tenis" />
        <strong>Tenis check vans</strong>
        <span>R$ 250,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>
          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img src={checkVans} alt="Tenis" />
        <strong>Tenis check vans</strong>
        <span>R$ 250,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>
          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img src={checkVans} alt="Tenis" />
        <strong>Tenis check vans</strong>
        <span>R$ 250,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>
          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img src={checkVans} alt="Tenis" />
        <strong>Tenis check vans</strong>
        <span>R$ 250,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>
          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img src={checkVans} alt="Tenis" />
        <strong>Tenis muito legal</strong>
        <span>R$ 250,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>
          <span>ADD TO CART</span>
        </button>
      </li>
    </ProductList>
  );
}
