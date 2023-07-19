
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook ,faSquareInstagram} from "@fortawesome/free-brands-svg-icons";





export default function Footer() {
    return (
        <div style={{ backgroundImage: "linear-gradient(to right, lightgreen, lightblue)" }}>
            <Container className="footer-container" >
                <Row>
                    <Col style={{ marginTop: "20px", marginBottom:"50px"}}>
                        <strong style={{marginLeft:"-12px"}}>關於我們</strong>
                        <Row>--------------</Row>
                        <Row>公司資料</Row>
                        <Row>廣告查詢</Row>
                        <Row>使用條款</Row>
                        <Row>私隱政策</Row>
                    </Col>

                    <Col style={{ marginTop: "20px" }}>
                       <strong style={{marginLeft:"-12px"}}>資料查詢</strong>
                        <Row>--------------</Row>
                        <Row>常見問題</Row>
                        <Row>關於送貨</Row>
                        <Row>關於退貨</Row>
                        <Row>訂單追踨</Row>
                    </Col>


                    <Col style={{ marginTop: "20px" }}>
                        <strong style={{marginLeft:"-12px"}}>購物指南</strong>
                        <Row>--------------</Row>
                        <Row>新手攻略</Row>
                        <Row>憑積分消費</Row>
                    </Col>

                    <Col style={{ marginTop: "20px" }}>
                        <strong style={{marginLeft:"-12px"}}>關注我們 : </strong>
                        <Row><FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#497ad0",}} /><br/>
                            <FontAwesomeIcon icon={faSquareInstagram} size="2xl" style={{color: "#3f8292"}} />
                        </Row>

                    </Col>

                </Row>




            </Container>
        </div>
    );
}