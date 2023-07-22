import {Button, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./TopNavBarStyle.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons/faCartArrowDown";
import  {useContext} from "react";
import {loginUserContext} from "../../App.tsx";
import * as FirebaseAuthService from "../../authService/FirebaseAuthService.ts"
import {faFingerprint} from "@fortawesome/free-solid-svg-icons/faFingerprint";

export default function NavList(){
    const loginUser = useContext(loginUserContext);

    const renderLoginContainer = ()=>{
        if(loginUser){
            return <>
                <FontAwesomeIcon icon={faFingerprint} size="2xl" style={{color: "#1d4281",marginRight:'1rem'}} />
                <Button style={loginButtonStyle} onClick={FirebaseAuthService.handleSignOut}>Logout</Button>
            </>
        } else {
            return    <Link to="/login" style={{textDecoration: 'none'}}>
                <Button  style={loginButtonStyle} >
                   Login
                </Button>{''}
            </Link>
        }
    }


    const cartButtonStyle = {
        background: "transparent",
        width: 45,
        marginRight: 40,
        border: "0",
        padding: 0,
    };

    const loginButtonStyle = {
        width:'4rem',
        background: "transparent",
        marginRight: 40,
        padding: 0,
        border: '1px solid #184e3b', // Add border style here
        color: '#184e3b', // Add text color here
        textDecoration: 'none',
    };

    return (
        <>
            <Nav className="sticky-top navbar navbar-expand-sm navbar-light bg-light d-flex"
                 style={{ backgroundImage: "linear-gradient(to right, #87CEEB, lightgreen)" }}>

                <div className="collaspe navbar-collapse" id="navbarNav" style={{ marginLeft: '40px' }}>

                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>


                    </ul>
                </div>



                <div className="collaspe navbar-collapse" id="logo">
                    <a className="navbar-brand mb-01 h1 d-flex align-items-center bouncing-image">
                        <img
                            className="d-inline-block align-top mr-1"
                            src="https://easydrawingguides.com/wp-content/uploads/2021/04/Mario-Mushroom-Step-10.png"
                            width="40"
                            height="40"

                        />
                        <span className="flashing-text" style={{
                            marginLeft:'1rem',
                            fontWeight: 'bold',
                            color:'#246078'


                        }}>Mario World</span>
                    </a>
                </div>




                <div className="justify-content-between">
                    <Link to="/shoppingcart" style={{textDecoration: 'none'}}>
                    <Button variant="outline-info" style={cartButtonStyle}>
                        <FontAwesomeIcon icon={faCartArrowDown}  size="xl" style={{ color: "#184e3b" }} />
                    </Button>{' '}
                     </Link>



                    {renderLoginContainer()}

                </div>

            </Nav>
        </>
    );
}