import PaymentForm from "../../component/PaymentForm.tsx";
import {Col, Row, Table} from "react-bootstrap";
import NavList from "../../component/TopNavBar.tsx";
import Footer from "../../component/Footer.tsx";

export default function CheckoutPage(){
    return(
        <>
            <NavList/>
            <div  style={{ minHeight: "calc(100vh - 12rem)", width:'100%'}}>

            <Table>




            </Table>



            <div className='d-flex justify-content-center' style={{width:'100%'}}>

            <PaymentForm />


                <div style={{
                    width:'50%',
                    margin:'0 4rem 0 4rem',
                    borderRadius:'8px',
                    backgroundColor:'#dce9ee',
                    position: 'relative' // Add position property
                }} >
                    <Col style={{margin:'30px 50px 50px 50px'}}>
                        <Row>送貨地址 :</Row><br/>
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