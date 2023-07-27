import AllProduct from "../../component/AllProduct.tsx";
import {Col, Container, Row} from "react-bootstrap";
import NavList from "../../component/TopNavBar.tsx";
import {ProductListDto} from "../../../data/dto/ProductListDto.ts";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from "../../component/Carousel.tsx";
import Footer from "../../component/Footer.tsx";
import axios from "axios";
import LoadingContainer from "../../component/LoadingContainer.tsx";
import * as ProductApi from "../../../api/ProductApi.ts"
import {useNavigate} from "react-router-dom";



export default function ProductListingPage() {
    const [allProductDataList ,setProductListData ] = useState< ProductListDto[] | undefined>(undefined);
    const navigate = useNavigate();


    const getAllProductFromApi = async () =>{
     try{
         setProductListData(undefined);
         setProductListData( await ProductApi.getAllProducts());
     } catch(err) {
         console.log(err)
         navigate("/error")
     }
    }


    const renderCards =()=>{


        if(allProductDataList){
           return allProductDataList.map((value) => (
                <Col xs={4} style={cardItemStyle}>
                    <AllProduct allProductData={value}/>
                </Col>
            ))
        } else {
            return <LoadingContainer/>
        }

    }


    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:'instant'
        })
        getAllProductFromApi();
        return ()=>{
            axios.CancelToken.source().cancel();
        }
        },[])




    const cardItemStyle = {
        marginBottom: "40px", // Adjust the value to control the spacing between rows
    };

    return (

        <>
            <NavList/>

            <MyCarousel/>

            <Container style={{marginTop:'2rem', display: 'd-flex flex-wrap', justifyContent: 'center'}}>

                <Row >

                    {
                        renderCards()
                    }
                </Row>

            </Container>
            <Footer/>

        </>
    );
}