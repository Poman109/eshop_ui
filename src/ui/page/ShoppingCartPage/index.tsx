import NavList from "../../component/TopNavBar.tsx";
import Footer from "../../component/Footer.tsx";
import {Button, Table} from "react-bootstrap";
import ProductDetailQuantitySelector from "../../component/ProductDetailQuantitySelector.tsx";
import { useState} from "react";


export default function ShoppingCartPage(){
    const [quantity, setQuantity] = useState<number>(1);





    return(

        <>
        <NavList/>

            <div className="d-flex flex-wrap align-content-center" style={{ minHeight: "calc(100vh - 12rem)", width:'100%'}}>

                <div  style={{width:'65%',marginLeft:'4rem'}}>

                <Table  style={{width:'100%'}}>
                    <thead>
                        <tr>
                            <th style={{width:'10%'}}>Product No.</th>
                            <th style={{width:'30%'}}>Product Pic</th>
                            <th style={{width:'50%'}}>Product detail </th>
                            <th style={{width:'10%'}}>subTotal</th>

                        </tr>
                    </thead>
                    <tbody>


                    {
                        Array.from({length:6}).map(()=>{
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
                                        <ProductDetailQuantitySelector quantity={quantity} setQuantity={setQuantity}/>
                                        <p>SubTotal: $ 288</p>
                                    </td>

                                </tr>)
                            })
                    }


                    </tbody>

                </Table>
                </div>



                <div style={{ width: '25%', marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <h4 style={{ marginBottom: '0.5rem' }}>Total Amount:</h4>
                    <Button style={{ alignSelf: 'flex-end' }}>付款</Button>
                </div>

        </div>



            <Footer />
        </>

    )

}