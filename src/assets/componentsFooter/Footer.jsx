import { ImagesCard, ContainerFooter, ContainerGeneral, ImagesGeneral } from "./styleFooter"

export default function Footer () {
    return (
        <>
        <ContainerGeneral>
        <ContainerFooter>
            <p>
                {/* <b>
                Meios de pagamento:
                </b> */}
            </p>
            <ImagesGeneral>
            <ImagesCard src="./Visa.png"/>
            <ImagesCard src="./Mastercard.png"/>
            <ImagesCard src="./Boleto.png"/>
            <ImagesCard src="./Hipercard.png"/>
            </ImagesGeneral>
        </ContainerFooter>
        </ContainerGeneral>
        </>
    )
}