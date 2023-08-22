import React, { useState } from 'react';
import Button from './Button';
import { StyleBody, ContainerImg, ContainerDiv, StyleCont, StyleCheck, DivButton } from './styleBody';
import Carrinho from '../componentsCarrinho/Carrinho';
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
      if (prevSelected.some((item) => item.id === index.id)) {
        return prevSelected.filter((item) => item.id !== index.id);
      } else {
        return [...prevSelected, {...index,quantity:1}];
      }
    });
  };

  function addQuantity (item) {
    setSelectedItems((prevSelected) => prevSelected.map((product)=> {
      if (product.id === item.id){
        return {
          ...product, 
          quantity:product.quantity+1
        }
      }
      return product
    }))}


    function subtractQuantity (item) {
      setSelectedItems((prevSelected) => prevSelected.map((product)=> {
        if (product.id === item.id){
          if(product.quantity>0) {
            return {
              ...product, 
              quantity:product.quantity-1
            }
          }
          return product
        }
        return product
      }))
    

  }

  return (
  
    <>
      <StyleBody>
        <p>Produtos</p>
        <StyleCont>
        {selectedItems.length}
        </StyleCont>
      </StyleBody>
      {carrinho ? 
      <ContainerImg>
      {apiConsult().map((item, index) => (
        <ContainerDiv key={item.id}>
          <ImgFilm src={item.image} name={item.value} />
          <StyleCheck>
            <input
              className="Check"
              type="checkbox"
              checked={selectedItems.some((i)=> i.id === item.id)}
              onChange={() => handleCheckboxChange(item)}
            />
            Valor:R${item.value},00
          </StyleCheck>
        </ContainerDiv>
      ))}
    </ContainerImg>: 
    <Carrinho products={selectedItems} addQuantity={addQuantity} 
    subtractQuantity={subtractQuantity}/>
      }
      
      <DivButton>
        {carrinho? <Button carrinho={carrinho} setCarrinho={setCarrinho} /> : <></>   }
         
      </DivButton>
      </>
  );
}
