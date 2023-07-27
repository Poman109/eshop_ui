
import {Col, FormControl, Row, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import {TransactionDataDto} from "../../../data/dto/TransactionDataDto.ts";
import LoadingContainer from "../../component/LoadingContainer.tsx";
import * as TransactionApi from "../../../api/TransactionApi.ts"
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

type Params ={
    transactionId : string | undefined
}


export default function CheckoutPage(){
    const [transactionDetailsData, setTransactionDetailData]=useState<TransactionDataDto|undefined>(undefined)
    const params = useParams<Params>();
    const navigate = useNavigate();

    const getTransactionByTid = async ()=>{
        try {
            if (params.transactionId) {

                const data = await TransactionApi.getTransactionByTid(params.transactionId);
                setTransactionDetailData(data);
            } else {
                navigate("/error");
            }
        } catch (error){
            navigate("/error");
        }
    }


    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:'instant'
        })
        getTransactionByTid();
        return ()=>{
            axios.CancelToken.source().cancel();
        }
    },[])

    const handleCheckout = async ()=>{
        try {
           if(params.transactionId){
               await TransactionApi.payTransaction(params.transactionId);
               await TransactionApi.finishTransaction(params.transactionId);
               navigate("/thankyou");

            } else {
                navigate("/error");
            }
        } catch (error){
            navigate("/error");
        }
    }

    const renderCheckoutContainer = ()=>{
        if (transactionDetailsData){
            return (
                <>
                    <td>{transactionDetailsData?.transactionId}</td>
                    <td>{
                        transactionDetailsData?.items.map((value)=>{
                            return(
                                <div key={value.product.pid}> {/* Add a unique key for each item */}
                                    <Row><img
                                        style={{width:'60px',height:'40px',marginLeft:'-10px'}}
                                        src={value.product.image_url}/></Row>
                                    <Row>貨品名稱:{value.product.name}</Row>
                                    <Row>貨品價錢:＄{value.product.price.toLocaleString()}</Row>
                                    <Row>貨品數量:   {value.quantity} 件</Row>
                                    <Row>貨品小計:＄{value.subtotal.toLocaleString()}</Row>
                                    <hr style={{marginLeft:"-12px",width: '240px', textAlign: 'center',color:'black',
                                    }}></hr>
                                </div>
                            );
                        })}</td>
                    <td>＄ {transactionDetailsData?.total + 40}</td>
                    <td>{transactionDetailsData?.datetime}</td>
                    <td>{transactionDetailsData?.status}</td>


                </>
            )
        } else {
            return (
                <LoadingContainer/>
            )
        }
    }




    return(
        <>
            <div  style={{ minHeight: "calc(100vh - 12rem)", width:'100%'}}>

            <div style={{margin:'2rem 2rem 2rem 2rem'}}>
            <Table>
                <thead>
                <tr>
                    <th>訂單編號</th>
                    <th>訂單貨品</th>
                    <th>訂單總共金額</th>
                    <th>訂單時間</th>
                    <th>訂單狀態</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    {
                        renderCheckoutContainer()
                    }
                </tr>
                </tbody>

            </Table>
            </div>



            <div className='d-flex justify-content-center' style={{width:'100%', marginBottom:'4rem'}}>

                <div className="container p-0" style={{width:'50rem',marginLeft:'6rem'}}>
                    <div className="card px-4">
                        <p className="h8 py-3" style={{fontWeight:'bold',fontSize:'20px'}}>Payment Details</p>
                        <div className="row gx-3">
                            <div className="col-12">
                                <div className="d-flex flex-column">
                                    <p className="text mb-1">Person Name</p>
                                    <FormControl className="form-control mb-3" type="text" placeholder="Name" value="Full Name"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex flex-column">
                                    <p className="text mb-1">Card Number</p>
                                    <FormControl className="form-control mb-3" type="text" placeholder="xxxx-xxxx-xxxx-xxxx"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex flex-column">
                                    <p className="text mb-1">Expiry</p>
                                    <FormControl className="form-control mb-3" type="text" placeholder="MM/YYYY"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex flex-column">
                                    <p className="text mb-1">CVV/CVC</p>
                                    <FormControl className="form-control mb-3 pt-2 " type="password" placeholder="***"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="btn btn-primary mb-3">
                                    <span className="ps-3" onClick={handleCheckout} style={{marginRight:'22px'}}>確認付款</span>
                                    <span className="fas fa-arrow-right"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div style={{
                    width:'50%',
                    margin:'0 4rem 0rem 4rem',
                    borderRadius:'8px',
                    backgroundColor:'#dce9ee',
                    position: 'relative' // Add position property
                }} >
                    <Col style={{margin:'30px 50px 50px 50px'}}>
                        <Row>自取地址 :</Row><br/>
                        <Row>806,</Row>
                        <Row>Hysan Place,</Row>
                        <Row>Causeway Bay,</Row>
                        <Row>Hong Kong</Row>
                    </Col>
                    <hr style={{marginLeft:"2rem",width: '260px', textAlign: 'center',color:'black',
                    }}></hr>
                    <p style={{
                        margin: '2rem 1rem 2rem 2rem',
                        position: 'absolute', // Add position property
                        bottom: 0, // Stick to the bottom
                        left: 0, // Align within the container
                        fontSize: '12px'
                    }}>
                        註：實際送貨日期及時間需視乎送貨地址、訂單數量及人手安排等不同因素而定，
                        以確定購買及付款頁面所顯示資料為準。Mario World會盡力安排最佳及最快之送貨日期及時間，
                        並保留最終之決定權。
                    </p>
            </div>
            </div>

            </div>

        </>
    )

}