import {Spinner} from "react-bootstrap";


export default function LoadingContainer(){
    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            height:"95hv"
        }}>

            <Spinner animation="border" variant="secondary" role="status"  style={{ width: "18rem", height: "18rem", marginTop:'4rem' }}>
                {/*<span className="visually-hidden">Loading...</span>*/}
            </Spinner>

        </div>

    )
}