import {FormControl} from "react-bootstrap";



export default function PaymentForm(){
    return(
        <>

            <div className="container p-0" style={{width:'50rem',marginLeft:'6rem'}}>
                <div className="card px-4">
                    <p className="h8 py-3">Payment Details</p>
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
                                <span className="ps-3">Confirm</span>
                                <span className="fas fa-arrow-right"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}