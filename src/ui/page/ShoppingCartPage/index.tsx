import NavList from "../../component/TopNavBar.tsx";
import Footer from "../../component/Footer.tsx";
import "../../component/TopNavBarStyle.css"
import {Button, Table} from "react-bootstrap";
import ProductDetailQuantitySelector from "../../component/ProductDetailQuantitySelector.tsx";
import { useState} from "react";
import {Link} from "react-router-dom";





export default function ShoppingCartPage(){
    const [quantity, setQuantity] = useState<number>(1);





    return(

        <>
        <NavList/>

            <div className="d-flex flex-wrap align-content-center" style={{ minHeight: "calc(100vh - 12rem)", width:'100%'}}>

                <div  style={{width:'65%',marginLeft:'4rem'}}>

                <Table  style={{width:'100%'}}>
                    <thead >
                        <tr>
                            <th style={{width:'10%',color: "#1d6a88" }}>Product No.</th>
                            <th style={{width:'30%',color: "#1d6a88"}}>Product Pic</th>
                            <th style={{width:'50%',color: "#1d6a88"}}>Product detail </th>
                            <th style={{width:'10%',color: "#1d6a88"}}>subTotal</th>

                        </tr>
                    </thead>
                    <tbody>


                    {
                        Array.from({length:2}).map(()=>{
                                return(<tr>
                                    <td>1</td>
                                    <img  src="https://shopage.s3.amazonaws.com/media/f857/000345666404_60037893044840803973.webp"
                                          style={{width:'10rem',height:'9rem'}}/>
                                    <td>
                                        <p>Low in Stock</p>
                                        <p>$288</p>
                                        <p>Quarity: 5</p>
                                    </td>

                                    <td>
                                        <ProductDetailQuantitySelector quantity={quantity} setQuantity={setQuantity} />
                                        <br/>
                                        <p>SubTotal: $ 288</p>
                                    </td>

                                </tr>)
                            })
                    }


                    </tbody>

                </Table>
                </div>



                <div style={{ width: '25%', margin: '2rem 0 0 1rem',
                    display: 'flex', flexDirection: 'column',
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