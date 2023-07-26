import NavList from "../../component/TopNavBar.tsx";
import Footer from "../../component/Footer.tsx";
import "../../component/TopNavBarStyle.css"
import {Button} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {CartItemDataDto} from "../../../data/dto/CartItemDto.ts";
import ShoppingCartTable from "../../component/ShoppingCartTable.tsx";
import * as CartItemApi from "../../../api/CartItemApi.ts"
import {loginUserContext} from "../../../App.tsx";
import * as TransactionApi from "../../../api/TransactionApi.ts"





export default function ShoppingCartPage(){
    const [cartItemDetailsData, setCartItemDetailsData] = useState<CartItemDataDto[] |undefined>(undefined)
    const navigate = useNavigate();
    const loginUser = useContext(loginUserContext);


    const getAllCartItem = async () =>{
        try{
            const data = await CartItemApi.getAllCartItems();

            setCartItemDetailsData(data);

        }catch (error){
            navigate("/noitemincart");
        }
    }

    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:'instant'
        })
        if (loginUser){
            setCartItemDetailsData(undefined)
            getAllCartItem();
        } else if (loginUser ===null){
            navigate("/login");
        }
    },[loginUser]);

    const calculateTotal = ()=>{
        if(cartItemDetailsData){
            return cartItemDetailsData.reduce((accumulator, currentValue)=>{
                return accumulator + currentValue.price *currentValue.cart_quantity;
            },0);
        } else {
            return 0;
        }
    }

    const calculateTotalShipping = ()=>{
       return  calculateTotal() + 20
    }

    const handleCheckout = async ()=>{
        try {
            const transactionData = await TransactionApi.prepareTransaction();
            navigate(`/checkout/${transactionData.tid}`)
        } catch (error){
            navigate("/error");
        }
    }


    return(

        <>
        <NavList/>

            <div className="d-flex flex-wrap align-content-center" style={{ minHeight: "calc(100vh - 12rem)", width:'100%'}}>

                <div  style={{width:'65%',margin:'0 0 4rem 4rem'}}>

                    <ShoppingCartTable cartItemDetailsData={cartItemDetailsData} setCartItemDetailsData={setCartItemDetailsData}/>

                </div>



                <div style={{ width: '25%', margin: '2rem 0 4rem 1rem',
                    display: 'flex', flexDirection: 'column',
                    borderRadius:'4px',
                    alignItems: 'flex-start',
                    backgroundColor:'#e1e9ec',
                    color:'#1d6a88'
                }}>
                    <h4 style={{ margin:'1rem 0 0 1rem' }}>總額: </h4><br/>

                    <p style={{ alignSelf: 'flex-end',marginRight:'1rem' }}>商品總額 $  {calculateTotal().toLocaleString()}</p>




                    <p style={{ alignSelf: 'flex-end',marginRight:'1rem' }}>手續費 $  20</p>
                    <hr style={{width: '180px', textAlign: 'center',color:'black',
                        alignSelf: 'flex-end',marginRight:'1rem'
                    }}></hr>
                    <p style={{ alignSelf: 'flex-end',marginRight:'1rem' }}>訂單總額:$ {calculateTotalShipping().toLocaleString()}</p><br/>
                    <div style={{alignSelf: 'flex-end',marginRight:'1rem'}}>
                    <Button className='bouncing-image'
                            onClick={handleCheckout}
                            style={{
                                border:'0',
                                backgroundColor: "#3d86a1"

                            }}>付款</Button></div>
                </div>

        </div>



            <Footer />
        </>

    )

}