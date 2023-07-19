import NavList from "../../component/TopNavBar.tsx";
import Footer from "../../component/Footer.tsx";
import {Col, Row, Table} from "react-bootstrap";

export default function ShoppingCart(){
    return(
        <>
        <NavList/>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Prduct</th>
                            <th>Product Pic</th>
                            <th>Product name ,  </th>
                            <th>Username</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <img  src="https://shopage.s3.amazonaws.com/media/f857/000345666404_60037893044840803973.webp"
                                  style={{width:'10rem',height:'9rem'}}/>
                        </tr>








                    </tbody>




                        <Col>
                            <Row>Product Name</Row>
                            <Row>Product Stock</Row>
                            <Row>Product Price</Row>
                            <Row>Product quantity</Row>

                        </Col>

                        <Col>
                             <Row>Product Price</Row>
                        </Col>

                </Table>


        <Footer/>


        </>

    )

}