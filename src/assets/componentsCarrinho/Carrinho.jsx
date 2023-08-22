import Header from "../../componentsHeader/Header";
import Footer from "../componentsFooter/Footer";
import { ImgFilm } from "../componentsBody/styleBody";
import {StyleValue} from "../componentsCarrinho/styleCarrinho"
import ButtomSum from "./ButtonSum"
import {ButtomLess} from "./ButtonLess";
import ButtonFinalize from "./ButtonFinalize"

function Carrinho ({products,addQuantity,subtractQuantity}) {

  
    return(

        
        <>
         {products.map((item, index) => (
            <div key={item.id}>
          <ImgFilm src={item.image} name={item.name} />
          <StyleValue>
            {item.name} <br/>
            Valor: R${item.value},00 <br/>
            Quantidade: {item.quantity}<br />
            <ButtomSum onClick={()=> addQuantity(item)}></ButtomSum>
            <ButtomLess onClick={()=> subtractQuantity(item)}></ButtomLess>
          </StyleValue>
          <p> Total Produtos:</p>
          

          <ButtonFinalize>
          </ButtonFinalize>
         </div>
         ))}
        </>
    

    )
}

export default Carrinho