import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
// import ImgFilm from './ImgFIlm';
import { StyleBody } from './styleBody';
import Carrinho from '../../Pages/Carrinho';
import { ImgFilm } from './styleBody';
import data from './products.json'


function apiConsult () {
    
  try {
   
    return data
  
  } catch(e) {
    console.log(e);
  }

}



export default function Body() {
  const [selectedItems, setSelectedItems] = useState([]); 
  console.log(selectedItems)
  const [carrinho, setCarrinho] = useState(true) 
  //Estado inicial. Começa como falso.


  const handleCheckboxChange = (index) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((item) => item !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

  return (
  
    <>
      <StyleBody>
        <p>Produtos</p>
        <p>{selectedItems.length}</p>
      </StyleBody>
      {carrinho ? 
      <div>
      {apiConsult().map((item, index) => (
        <div key={item.id}>
          <ImgFilm src={item.image} name={item.value} />
          <span>
            <input
              className="Check"
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => handleCheckboxChange(item)}
            />
            {item.value}
          </span>
        </div>
      ))}
    </div>: <Carrinho products={selectedItems}/>
      }
      
      <Button carrinho={carrinho} setCarrinho={setCarrinho} />    </>
  );
}



