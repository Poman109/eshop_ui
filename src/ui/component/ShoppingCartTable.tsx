import {Table} from "react-bootstrap";
import ShoppingCartTableRow from "./ShoppingCartTableRow.tsx";
import {CartItemDataDto} from "../../data/dto/CartItemDto.ts";
import LoadingContainer from "./LoadingContainer.tsx";



type Props={
    cartItemDetailsData : CartItemDataDto [] |undefined
    setCartItemDetailsData: React.Dispatch<React.SetStateAction<CartItemDataDto[] | undefined>>

}
export default function ShoppingCartTable( {cartItemDetailsData,setCartItemDetailsData}:Props){


    const renderTable=()=>{
        if(cartItemDetailsData){
          return  cartItemDetailsData.map((value)=>(
                <ShoppingCartTableRow key={value.pid} cartItemDetailsData={value} setCartItemDetailsData={setCartItemDetailsData} cartItemDetailsDatas={cartItemDetailsData}/>
          ))
        } else{
              return <LoadingContainer/>
            }
    }


    return (
        <>

            <Table  >
                <thead style={{fontSize:'18px'}}>
                <tr>
                    <th style={{color: "#1d6a88"}}>購物車</th>
                    <th ></th>
                    <th ></th>
                    <th ></th>
                    <th ></th>

                </tr>
                </thead>
                <tbody style={{fontSize:'14px'}}>
                {
                    renderTable()
                }
                </tbody>

            </Table>

        </>
    )
}