import NavList from "../../component/TopNavBar.tsx";
import Footer from "../../component/Footer.tsx";
import { Table} from "react-bootstrap";
import ProductDetailQuantitySelector from "../../component/ProductDetailQuantitySelector.tsx";
import {useState} from "react";

export default function ShoppingCartPage(){
    const [quantity, setQuantity] = useState<number>(1);


    return(

        <>
        <NavList/>

            <div className="d-flex flex-wrap" style={{ minHeight: "calc(100vh - 12rem)", width:'100%'}}>

                <div  style={{width:'65%',marginLeft:'4rem'}}>

                <Table  style={{width:'100%'}}>
                    <thead>
                        <tr>
                            <th>Product No.</th>
                            <th>Product Pic</th>
                            <th>Product detail  </th>

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
                                        <ProductDetailQuantitySelector quantity={quantity} setQuantity={setQuantity}/>
                                    </td>
                                </tr>)
                            })
                    }


                    </tbody>

                </Table>
                </div>



                <div style={{width:'25%'}}>
                    Total Amount:

                </div>


        </div>



            <Footer />
        </>

    )

}