import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import NavList from "../../component/TopNavBar.tsx";
import Footer from "../../component/Footer.tsx";
import {ProductDetailDto} from "../../../data/dto/ProductListDto.ts";
import mockData from "./response.json"
import {useEffect, useState} from "react";
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons/faCartArrowDown";
import ProductDetailQuantitySelector from "../../component/ProductDetailQuantitySelector.tsx";


export default function ProductDetailPage() {
    const [quantity, setQuantity] = useState<number>(1);
    const [productDetailsData, setProductDetailData] = useState<ProductDetailDto | undefined>(undefined);


    useEffect(() => {
        setProductDetailData(mockData);
    }, [])

    const paymentButtonStyle = {
        width: "30rem",
        backgroundImage: "linear-gradient(to right, #ffcccb, lightblue)",
        border: "0"
    };

    return (
        <>
            <NavList/>
            <Container>
                <Row className="justify-content-center">


                    <Col md={6}>
                        <div style={{width: '30rem', height: '35rem'}}>
                            <Image src={
                                productDetailsData &&
                                productDetailsData.image_url
                            } fluid
                                   style={{width: '25rem', margin: "3rem 0 0 5rem"}}/>
                        </div>
                    </Col>


                    <Col md={6}>
                        <Card style={{width: '35rem', margin: "3rem 0 0 3rem"}}>
                            <Card.Body>
                                <img style={{width: "4rem"}}
                                     src="https://www.toysrus.com.hk/dw/image/v2/BDGJ_PRD/on/demandware.static/-/Sites-storefront-catalog-toysrus-hk/
                                    default/dw1459d1a2/7/0/2/9/7029f8146d239c418f6f296642458227218a7900_supermario_color_343x343.png?q=75"/>


                                <Card.Title>{productDetailsData?.name}</Card.Title>

                                <Card.Subtitle className="mb-2 text-muted">$ {productDetailsData?.price}</Card.Subtitle>

                                <Card.Text>
                                    {productDetailsData?.description && productDetailsData?.description.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br/>
                                        </React.Fragment>
                                    ))}
                                </Card.Text>


                                <ProductDetailQuantitySelector quantity={quantity} setQuantity={setQuantity}/><br/>

                                <div>
                                    <Button variant="success" style={paymentButtonStyle}>
                                        <FontAwesomeIcon icon={faCartArrowDown} beatFade size="lg"
                                                         style={{color: "#184e3b",}}/></Button>
                                </div>
                            </Card.Body>
                        </Card>

                    </Col>

                </Row>
            </Container>

            <Footer/>


        </>


    )


}