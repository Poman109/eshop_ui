
import NavList from "../../component/TopNavBar.tsx";
import Footer from "../../component/Footer.tsx";
import {ProductDetailDto} from "../../../data/dto/ProductListDto.ts";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as ProductApi from "../../../api/ProductApi.ts"
import ProductDetailContainer from "../../component/ProductDetailContainer.tsx";
import LoadingContainer from "../../component/LoadingContainer.tsx";

type Params ={
    productId : string
}


export default function ProductDetailPage() {
    const [productDetailsData, setProductDetailData] = useState<ProductDetailDto | undefined>(undefined);
    const {productId }= useParams<Params>();
    const navigate = useNavigate();

    const getProductDetail = async (pid:string)=>{
        try {
            setProductDetailData(await ProductApi.getProductsDetail(pid));
        } catch (error){
            navigate("/error");
        }
    }

   const renderProductDetailContainer = ()=>{
        if(productDetailsData){
            document.title = "Mario World -" + productDetailsData.name
            return   <ProductDetailContainer productDetailsData={productDetailsData}/>
        } else {
            return <LoadingContainer/>
        }
   }


    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior:'instant'
        })
        if(productId) {
            setProductDetailData(undefined);
            getProductDetail(productId);
        } else {
            navigate('/error')
        }

    }, [productId])



    return (
        <>
            <NavList/>
            <div>

                {
                    renderProductDetailContainer()
                }


            </div>

            <Footer/>


        </>


    )


}