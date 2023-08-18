import {StylePrices} from "./styleBody"

export function Prices (props){

    return (
        <StylePrices>
            <>
            <input className="Check" type="checkbox"/> <b> Valor: {props.price}</b>
            </>
        </StylePrices>


    )

}

export default Prices