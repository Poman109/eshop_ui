import {Button, Card, Modal} from "react-bootstrap";
import {ProductListDto} from "../../data/dto/ProductListDto.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons/faCartArrowDown";
import  {useState} from "react";
import {Link} from "react-router-dom";


type Props ={
    allProductData : ProductListDto
}

export default function AllProduct(props:Props){
    const [isModalOpen, setModalOpen] = useState(false);

    const cardImgStyle={
        width: "300px",
        height: "300px"
    }


    const buttonStyle = {
        backgroundImage: "linear-gradient(to right, lightgreen, #ffcccb)",
        color: "rgb(24,78,59)",
        border:"0"
    };

    const paymentButtonStyle = {
        marginLeft:"150px",
        backgroundImage: "linear-gradient(to right, #ffcccb, lightblue)",
        border:"0"
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    return(
        <>
    <Card style={{ width: '20rem', height:'35rem'}}>
        <div style={{ display: 'flex', justifyContent: 'center' ,marginTop: '12px'}}
             onClick={openModal} >
            <Card.Img variant="top" src={props.allProductData.image_url} style={cardImgStyle} />
        </div>

       <Card.Body>

            <Card.Title style={{height:"45px"}}>{props.allProductData.name}</Card.Title>

            <Card.Text>
               貨品編號： {props.allProductData.pid}
            </Card.Text>

            <Card.Text>
               貨品庫貨 :  {props.allProductData.has_stock?"有貨":"售罄"}
            </Card.Text>

            <Card.Text>
                貨品價錢：$ {props.allProductData.price}
            </Card.Text>


            <Link to={`/product/${props.allProductData.pid}`}>
           <Button variant="success" style={buttonStyle}>詳細資料</Button>
            </Link>

        </Card.Body>
    </Card>

            <Modal show={isModalOpen} onHide={closeModal}>
                <Modal.Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <img style={{width:"4rem"}}
                         src="https://www.toysrus.com.hk/dw/image/v2/BDGJ_PRD/on/demandware.static/-/Sites-storefront-catalog-toysrus-hk/
                                    default/dw1459d1a2/7/0/2/9/7029f8146d239c418f6f296642458227218a7900_supermario_color_343x343.png?q=75"/>
                    <Modal.Title style={{marginLeft:"2rem"}}>{props.allProductData.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={props.allProductData.image_url} alt="Enlarged Product Photo" style={{ width: "100%" }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" style={{ color: "rgb(24,78,59)",
                        border:"0",backgroundImage: "linear-gradient(to right, lightgreen, #ffcccb)"}} onClick={closeModal} >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


            </>
    )
}