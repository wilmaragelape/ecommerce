import Header from "../componentsHeader/Header";
import Footer from "../assets/componentsFooter/Footer";
import { ImgFilm } from "../assets/componentsBody/styleBody";

function Carrinho ({products}) {
    return(
        <>
         {products.map((item, index) => (
        <div key={item.id}>
          <ImgFilm src={item.image} name={item.value} />
         </div>
         ))}
        </>
    )
}

export default Carrinho