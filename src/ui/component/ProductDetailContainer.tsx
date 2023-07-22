import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import React, {useState} from "react";
import ProductDetailQuantitySelector from "./ProductDetailQuantitySelector.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons/faCartArrowDown";
import {ProductDetailDto} from "../../data/dto/ProductListDto.ts";


type Props = {
    productDetailsData : ProductDetailDto
}
export default function ProductDetailContainer({productDetailsData}:Props){
    const [quantity, setQuantity] = useState<number>(1);

    const paymentButtonStyle = {
        width: "20rem",
        backgroundImage: "linear-gradient(to right, #ffcccb, lightblue)",
        border: "0"
    };


    return(
        <>

            <Container >
                <Row className="d-flex justify-content-center" style={{width:'100%',margin:'2rem 4rem 0 0'}}>

                    <Col md={6} style={{width: '40%'}}>
                        <div  className='d-flex justify-content-center align-items-center'
                              style={{width: '35%', height: '35rem',marginLeft:'8rem'}}>
                            <Image style={{width:'30rem',height:'30rem'}} src={
                                productDetailsData &&
                                productDetailsData.image_url
                            }
                                  />
                        </div>
                    </Col>


                    <Col md={6} style={{width: '60%'}}>
                        <Card style={{marginLeft:'6rem'}}>
                            <Card.Body>
                                <img style={{width: "4rem"}}
                                     src="https://www.toysrus.com.hk/dw/image/v2/BDGJ_PRD/on/demandware.static/-/Sites-storefront-catalog-toysrus-hk/
                                    default/dw1459d1a2/7/0/2/9/7029f8146d239c418f6f296642458227218a7900_supermario_color_343x343.png?q=75"/>


                                <Card.Title>{productDetailsData?.name}</Card.Title><br/>

                                <Card.Subtitle className="mb-2 text-muted">$ {productDetailsData?.price}</Card.Subtitle>

                                <Card.Text>
                                    {productDetailsData?.description && productDetailsData?.description.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br/>
                                        </React.Fragment>
                                    ))}
                                </Card.Text>


                                {productDetailsData.stock > 0
                                    ? (
                                    <div>
                                        <ProductDetailQuantitySelector
                                            quantity={quantity}
                                            setQuantity={setQuantity}
                                            stock={productDetailsData.stock} />
                                        <br />
                                        <div>
                                            <Button variant="success" style={paymentButtonStyle}>
                                                <FontAwesomeIcon icon={faCartArrowDown} beatFade size="lg" style={{ color: "#184e3b" }} />
                                            </Button>
                                        </div>
                                    </div>)
                                    : (
                                    <p style={{width:'42px',
                                        backgroundColor:'#e31a08',
                                        color:'white',
                                        fontSize:'20px'
                                    }}>售罄</p>
                                )}




                            </Card.Body>
                        </Card>

                    </Col>

                </Row>
            </Container>



        </>


    )


}