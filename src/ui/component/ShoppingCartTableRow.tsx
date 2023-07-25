import Selector from "./Selector.tsx";
import {Button, Spinner} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-regular-svg-icons";
import {useEffect, useState} from "react";
import {CartItemDataDto} from "../../data/dto/CartItemDto.ts";
import * as CartItemApi from "../../api/CartItemApi.ts";


type Props={
    cartItemDetailsData : CartItemDataDto,
    cartItemDetailsDatas : CartItemDataDto [],
    setCartItemDetailsData: React.Dispatch<React.SetStateAction<CartItemDataDto[] | undefined>>
}

export default function ShoppingCartTableRow({cartItemDetailsData,cartItemDetailsDatas,setCartItemDetailsData}:Props){
    const [quantity, setQuantity] = useState<number>(cartItemDetailsData.cart_quantity);
    const [isUpdatingQuantity,setIsUpdatingQuantity]= useState<boolean>(false);
    const [isDeletingCartItem,setIsDeletingCartItem]= useState<boolean>(false);

    const calculateSubTotal = ()=>{
        return cartItemDetailsData.price * quantity;
    }

    const updateDtoList=(updatedCartItemDto : CartItemDataDto)=>{
        const updatedDtoList = cartItemDetailsDatas.map((value)=>{
            if(value.pid === cartItemDetailsData.pid){
                return updatedCartItemDto;
            } else {
                return value;
            }

        });
        return updatedDtoList;
    }

    const handleQuantityUpdate = async  ()=>{
        setIsUpdatingQuantity(true);
        const updatedCartItemDto = await CartItemApi.patchCartItemQuantity(cartItemDetailsData.pid,quantity);
        setCartItemDetailsData(updateDtoList(updatedCartItemDto));
        setIsUpdatingQuantity(false);
    }

    const handleDeleteCartItem = async ()=>{
        try{
            setIsDeletingCartItem(true);
            await CartItemApi.deleteCartItem(cartItemDetailsData.pid);
            const updatedDtoList = cartItemDetailsDatas.filter((value)=>{
                return value.pid !== cartItemDetailsData.pid;
            });
            setCartItemDetailsData(updatedDtoList);
            setIsDeletingCartItem(false);
        } catch (error){
            console.log(error);
        }
    }

    const checkStock=()=>{
        if (cartItemDetailsData.stock<30){
            return "存貨緊張！！！"
        } else {
            return "有存貨"
        }
    }


    useEffect(()=>{
        handleQuantityUpdate();
    },[quantity])




    return(
        <>

                        <tr>

                        <td style={{width:'150px',}}><img  src={cartItemDetailsData.image_url}
                                  style={{width:'7rem',height:'6rem'}}/>
                        </td>
                        <td style={{width:'150px',color: "#164f62"}} >
                            <p>{checkStock()}</p>
                            <p >貸品價錢： $ {cartItemDetailsData.price}</p>
                            <p>貸品數量：  {cartItemDetailsData.cart_quantity}</p>
                        </td>

                        <td style={{width:'20px',color: "#164f62"}}>

                            {
                                (cartItemDetailsData.stock > 0
                                    ? (
                                        <div>
                                            {
                                              isUpdatingQuantity
                                                ? <Spinner/>
                                              :<div>
                                                  <Selector
                                                quantity={quantity}
                                                setQuantity={setQuantity}
                                                stock={cartItemDetailsData.stock} />
                                                <br />
                                              </div>
                                            }

                                        </div>)
                                    : (
                                        <p>售罄</p>
                                    ))

                            }

                        </td>
                        <td style={{width:'150px',color: "#164f62"}}>$ {calculateSubTotal().toLocaleString()}</td>
                        <td>
                            <Button onClick={handleDeleteCartItem}
                        style={{backgroundColor:'#f0f2f3',
                            borderColor:'#c5c6c7',
                        }}>
                                {
                                    isDeletingCartItem
                                    ?<Spinner/>
                                        : <FontAwesomeIcon icon={faTrashCan} style={{color: "#8c9bb5",}} />

                                }
                            </Button></td>



                    </tr>

        </>
    )
}