import NavList from "../../component/TopNavBar.tsx";
import Footer from "../../component/Footer.tsx";
import "../../component/TopNavBarStyle.css"
import {Button, Table} from "react-bootstrap";
import ProductDetailQuantitySelector from "../../component/ProductDetailQuantitySelector.tsx";
import  {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {CartItemDataDto} from "../../../data/dto/CartItemDto.ts";
import mockData from "./response.json"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-regular-svg-icons";





export default function ShoppingCartPage(){
    const [quantity, setQuantity] = useState<number>(1);
    const [cartItemDetailsData, setcartItemDetailsData] = useState<CartItemDataDto[] |undefined>(undefined)


    useEffect(()=>{
        setcartItemDetailsData(mockData)
    },[])


    return(

        <>
        <NavList/>

            <div className="d-flex flex-wrap align-content-center" style={{ minHeight: "calc(100vh - 12rem)", width:'100%'}}>

                <div  style={{width:'65%',margin:'0 0 4rem 4rem'}}>

                <Table  style={{width:'100%'}}>
                    <thead style={{fontSize:'18px'}}>
                        <tr>
                            <th style={{width:'30%',color: "#1d6a88"}}>購物車</th>
                            <th style={{width:'40%',color: "#1d6a88"}}></th>
                            <th style={{width:'10%',color: "#1d6a88"}}></th>
                            <th style={{width:'10%',color: "#1d6a88"}}></th>
                            <th style={{width:'10%',color: "#96999a"}}></th>

                        </tr>
                    </thead>
                    <tbody style={{fontSize:'14px'}}>


                    {
                        cartItemDetailsData &&
                        cartItemDetailsData.map((value)=>{
                                return(<tr>

                                    <td><img  src={value.image_url}
                                          style={{width:'7rem',height:'6rem'}}/>
                                        </td>
                                    <td>
                                        <p>Low in Stock</p>
                                        <p>貸品價錢： $ {value.price}</p>
                                        <p>貸品數量：  {value.cart_quantity}</p>
                                    </td>

                                    <td>

                                        {
                                            (value.stock > 0
                                            ? (
                                                <div>
                                                    <ProductDetailQuantitySelector
                                                        quantity={quantity}
                                                        setQuantity={setQuantity}
                                                        stock={value.stock} />
                                                    <br />

                                                </div>)
                                            : (
                                                <p>售罄</p>
                                            ))

                                        }

                                    </td>
                                    <td>貨品小計</td>
                                    <td><Button
                                        style={{backgroundColor:'#f0f2f3',
                                        borderColor:'#c5c6c7',
                                    }}><FontAwesomeIcon icon={faTrashCan} style={{color: "#8c9bb5",}} /></Button></td>



                                </tr>)
                            })
                    }


                    </tbody>

                </Table>
                </div>



                <div style={{ width: '25%', margin: '2rem 0 4rem 1rem',
                    display: 'flex', flexDirection: 'column',
                    borderRadius:'4px',
                    alignItems: 'flex-start',
                    backgroundColor:'#e1e9ec',
                    color:'#1d6a88'
                }}>
                    <h4 style={{ margin:'1rem 0 0 1rem' }}>總額:</h4><br/>

                    <p style={{ alignSelf: 'flex-end',marginRight:'1rem' }}>商品總額 $  288</p>




                    <p style={{ alignSelf: 'flex-end',marginRight:'1rem' }}>運費 $  40</p>
                    <hr style={{width: '180px', textAlign: 'center',color:'black',
                        alignSelf: 'flex-end',marginRight:'1rem'
                    }}></hr>
                    <p style={{ alignSelf: 'flex-end',marginRight:'1rem' }}>訂單總額:$  318</p><br/>
                    <Link to={"/checkout/:transactionId"} style={{alignSelf: 'flex-end',marginRight:'1rem'}}>
                    <Button className='bouncing-image'
                            style={{
                                border:'0',
                                backgroundColor: "#3d86a1"

                            }}>付款</Button></Link>
                </div>

        </div>



            <Footer />
        </>

    )

}