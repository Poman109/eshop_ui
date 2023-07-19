import {Button, Col, Form, Row} from "react-bootstrap";
import NavList from "../../component/TopNavBar.tsx";
import Footer from "../../component/Footer.tsx";

export default function LoginPage(){

return(
    <>
        <NavList/>

        <div className="d-flex justify-content-center align-items-center" style={{marginTop:'8rem'}}>
        <Form style={{width:'30rem', height:'25rem'}}>
            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label column sm="2">
                    Email Address
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="email" placeholder="name@example.com"  />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>

            <Button variant="primary" type="submit"
                    style={{backgroundImage: "linear-gradient(to right, lightgreen, #ffcccb)",
                    border: 0}}>
                Login
            </Button>
        </Form>
    </div>


        <Footer/>
    </>


)

}