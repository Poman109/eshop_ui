import {Button} from "react-bootstrap";
import React from "react";


type Props = {
    quantity: number,
    setQuantity: React.Dispatch<React.SetStateAction<number>>

}

export default function ProductDetailQuantitySelector({quantity, setQuantity}: Props) {
    const handleMinusButtonClick = () => {
        if (quantity > 1) {
            setQuantity((prevState) => (prevState - 1));

        }
    }

    const handlePlusButtonClick = () => {
        setQuantity((prevState) => (prevState + 1));
    }


    return (
        <>
            <div className="d-flex">


                <Button style={{width: '40px', height: '40px'}}
                        onClick={handleMinusButtonClick}>
                    -
                </Button>

                <div className="d-flex justify-content-center align-items-center"
                     style={{width: '40px', height: '40px'}}>
                    {quantity}
                </div>

                <Button style={{width: '40px', height: '40px'}}
                        onClick={handlePlusButtonClick}>
                    +
                </Button>


            </div>


        </>

    )
}