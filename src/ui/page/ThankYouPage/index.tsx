import NavList from "../../component/TopNavBar.tsx";
import Footer from "../../component/Footer.tsx";
import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ThankYouPage(){
    const [countdown, setCountdown]= useState<number>(5);
    const navigate = useNavigate();

    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:'instant'
        })
        setTimeout(()=>{
            if(countdown > 1) {
                setCountdown((prevState) => (prevState - 1));
            } else {
                navigate('/');
            }
        }, 1000)
    },[countdown])


    return(
        <>
            <NavList/>
            <Container className="d-flex justify-content-center align-items-center flex-column"
                       style={{ minHeight: "calc(100vh - 12rem)" }}>



                    <h2 style={{color: '#4876c2'}}>Thank You for Your Purchase!</h2>
                    <img style={{width:'24rem'}}
                        src="https://i.pinimg.com/originals/03/8d/c5/038dc5003e3f7fefca06ada0d8e5f2cc.gif"/>
                    <h4 style={{color: '#4876c2'}}> {countdown} 秒後將回到主頁</h4>







            </Container>

            <Footer/>
        </>
    )
}