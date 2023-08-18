import {StyleButton} from "./styleBody"

export default function Button (props) {
    return(
        <StyleButton onClick={()=> props.setCarrinho(false)}>
            {/* //A exclamação é o operador not */}
        <>
        <b> Ir para o carrinho </b> 
        </>
        </StyleButton> 

    )

}
