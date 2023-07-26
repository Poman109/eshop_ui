import NavList from "../../component/TopNavBar.tsx";
import Footer from "../../component/Footer.tsx";
import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function NoItemInCartPage(){
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





                <h2 style={{color: '#4876c2'}}>購物車沒有貨品!</h2>
                <img style={{width:'24rem'}}
                     src="https://media4.giphy.com/media/WoEr2sdaY4OaVg2xsf/200w.gif?cid=82a1493b6obs9qaujsw5pigq3tn36d79i0vrrln3z3a1qrq7&ep=v1_gifs_search&rid=200w.gif&ct=g"/>

                <h4 style={{color: '#4876c2'}}> {countdown} 秒後將回到主頁</h4>







            </Container>

            <Footer/>
        </>
    )
}