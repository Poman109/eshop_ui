import {Button, Col, Form, Row} from "react-bootstrap";
import NavList from "../../component/TopNavBar.tsx";
import Footer from "../../component/Footer.tsx";
import React, {useContext, useEffect, useState} from "react";
import * as FirebaseAuthService from '../../../authService/FirebaseAuthService.ts'
import {useNavigate} from "react-router-dom";
import {loginUserContext} from "../../../App.tsx";

export default function LoginPage(){
    const navigate = useNavigate();
    const[email, setEmail] = useState<string>("");
    const[password, setPassword] = useState<string>("")
    const loginUser = useContext(loginUserContext);

    const handleEmailOnchange = ( event:React.ChangeEvent<HTMLInputElement>)=> {
        setEmail(event.currentTarget.value);
    }

    const handlePasswordOnchange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(event.currentTarget.value);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        const isLogin = await FirebaseAuthService.handleSignInWithEmailAndPassword(email,password);
        navigate(-1);

    }




    useEffect(()=>{
        if(loginUser){
            navigate("/");
        }

    },[loginUser])


    return(
        <>
            <NavList/>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "calc(100vh - 12rem)", width:'100%'}}>

                <Form className="rounded border d-flex flex-column align-items-center justify-content-center" style={{width:'30rem', height:'25rem'}} onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{color: '#236b88'}}>Email address</Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" placeholder="Enter Email"
                                          value={email}
                                          onChange={handleEmailOnchange}
                                          style={{ width: "20rem" }}/>
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{color: '#236b88'}}>
                        <Form.Label >Password</Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password"
                                          value={password}
                                          onChange={handlePasswordOnchange}
                                          style={{ width: "20rem" }}/>
                        </Col>
                    </Form.Group>


                    <Button variant="primary" type="submit"
                            style={{width:"20rem",backgroundImage: "linear-gradient(to right, lightgreen, white)",
                                border: 0,
                                color:'#236b88'}}>
                        Sign in
                    </Button><br/><br/>

                    <hr style={{width:'80%'}}/>

                    <div>
                        <Button style={{width:"20rem",
                            backgroundImage:"linear-gradient(to right, white, #ffcccb)",
                            border:'0',
                            color:'#236b88'
                        }}><img
                            style={{width:'35px', height:'35px',marginRight:'3rem'}}
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                            Login with Google
                            </Button>
                    </div>

                </Form>

            </div>




            <Footer/>
        </>


    )

}