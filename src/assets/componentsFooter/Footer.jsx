import { ImagesCard } from "./styleFooter"

export default function Footer () {
    return (
        <>
        <div>
            <p>
                <b>
                Meios de pagamento:
                </b>
            </p>
            <div>
            <ImagesCard src="./Visa.png"/>
            <ImagesCard src="./Mastercard.png"/>
            <ImagesCard src="./Boleto.png"/>
            <ImagesCard src="./Hipercard.png"/>
            </div>
        </div>
        </>
    )
}