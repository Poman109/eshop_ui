import PaymentForm from "../../component/PaymentForm.tsx";
import {Col, Row, Table} from "react-bootstrap";
import NavList from "../../component/TopNavBar.tsx";
import Footer from "../../component/Footer.tsx";
import {useEffect, useState} from "react";
import {TransactionDataDto} from "../../../data/dto/TransactionDataDto.ts";
import mockData from "./response.json";


export default function CheckoutPage(){
    const [transactionDetailsData, setTransactionDetailData]=useState<TransactionDataDto|undefined>(undefined)

    useEffect(()=>{
        setTransactionDetailData(mockData);
    },[])

    return(
        <>
            <NavList/>
            <div  style={{ minHeight: "calc(100vh - 12rem)", width:'100%'}}>

            <div style={{margin:'2rem 2rem 2rem 2rem'}}>
            <Table>
                <thead>
                <tr>
                    <th>訂單編號</th>
                    <th>訂單貨品(list)</th>
                    <th>訂單總共金額</th>
                    <th>訂單時間</th>
                    <th>訂單狀態</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>{transactionDetailsData?.transactionId}</td>
                    <td>{
                        transactionDetailsData?.items &&
                        transactionDetailsData?.items.map((value)=>{
                          return(
                              <div key={value.product.pid}> {/* Add a unique key for each item */}
                                  <Row><img
                                      style={{width:'60px',height:'40px',marginLeft:'-10px'}}
                                      src={value.product.image_url}/></Row>
                                  <Row>貨品名稱:＄{value.product.name}</Row>
                                  <Row>貨品價錢:＄{value.product.price}</Row>
                                  <Row>貨品數量:   {value.quantity} 件</Row>
                                  <Row>貨品小計:＄{value.subtotal}</Row>
                                  <hr style={{marginLeft:"-12px",width: '240px', textAlign: 'center',color:'black',
                                  }}></hr>
                              </div>
                          );
                        })}</td>
                    <td>＄ {transactionDetailsData?.total}</td>
                    <td>{transactionDetailsData?.datetime}</td>
                    <td>{transactionDetailsData?.status}</td>
                </tr>
                </tbody>

            </Table>
            </div>



            <div className='d-flex justify-content-center' style={{width:'100%', marginBottom:'4rem'}}>

            <PaymentForm />


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
            <Footer/>

        </>
    )

}