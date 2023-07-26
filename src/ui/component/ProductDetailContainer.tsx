import {Button, Card, Col, Container, Image, OverlayTrigger, Row, Toast, Tooltip} from "react-bootstrap";
import React, {useContext, useState} from "react";
import Selector from "./Selector.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons/faCartArrowDown";
import {ProductDetailDto} from "../../data/dto/ProductListDto.ts";
import * as CartItemApi from "../../api/CartItemApi.ts"
import {loginUserContext} from "../../App.tsx";
import {useNavigate} from "react-router-dom";


type Props = {
    productDetailsData : ProductDetailDto
}
export default function ProductDetailContainer({productDetailsData}:Props){
    const [quantity, setQuantity] = useState<number>(1);
    const [show,setShow]=useState<boolean>(false);
    const loginUser = useContext(loginUserContext);
    const navigate = useNavigate();

    const paymentButtonStyle = {
        width: "15rem",
        backgroundImage: "linear-gradient(to right, #ffcccb, lightblue)",
        border: "0"
    };

    const handleAddToCart = async ()=>{
        try{
            await CartItemApi.putCartItem(productDetailsData.pid,quantity);
            setShow(true);
        } catch (error){
            console.log(error);
        }
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props} >
          <span >請先登入！！</span>
        </Tooltip>
    );

    const renderAddToCartButton = ()=>{
        if(loginUser){
            return  <Button variant="success" style={paymentButtonStyle} onClick={handleAddToCart}>
                <FontAwesomeIcon icon={faCartArrowDown} beatFade size="lg" style={{ color: "#184e3b" }} />
            </Button>
        } else {
            return   <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <Button variant="success" style={paymentButtonStyle} onClick={()=>{navigate("/login")}}>
                    <FontAwesomeIcon icon={faCartArrowDown} beatFade size="lg" style={{ color: "#184e3b" }} />
                </Button>
            </OverlayTrigger>
        }
    }



    return(
        <>

            <Container >
                <Row className="d-flex justify-content-center" style={{width:'100%',margin:'2rem 4rem 1rem 0'}}>

                    <Col md={6} style={{width: '40%'}}>
                        <div  className='d-flex justify-content-center align-items-center'
                              style={{width: '35%', height: '35rem',margin:'-2rem 0 0 8rem'}}>
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

                                <Card.Subtitle className="mb-2 text-muted"
                                               style={{fontSize: '21px'}}>$ {productDetailsData?.price}</Card.Subtitle><br/>

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
                                        <Selector
                                            quantity={quantity}
                                            setQuantity={setQuantity}
                                            stock={productDetailsData.stock} />
                                        <br />
                                        <div>
                                            {
                                                renderAddToCartButton()
                                            }
                                        </div>
                                    </div>)
                                    : (
                                    <p style={{width:'42px',
                                        backgroundColor:'#e31a08',
                                        color:'white',
                                        fontSize:'20px'
                                    }}>售罄</p>
                                )}
                                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide
                                    style={{
                                        position:'absolute',
                                        bottom:'0',
                                        right:'2rem'
                                    }}
                                >
                                    <Toast.Header>
                                        <img
                                            src="holder.js/20x20?text=%20"
                                            className="rounded me-2"
                                            alt=""
                                        />
                                        <small>剛剛</small>
                                    </Toast.Header>
                                    <Toast.Body>已成功加入購物車!</Toast.Body>
                                </Toast>


                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>



        </>


    )


}