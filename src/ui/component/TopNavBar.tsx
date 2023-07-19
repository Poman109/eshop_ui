import {Button, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./TopNavBarStyle.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons/faCartArrowDown";

export default function NavList(){

    const cartButtonStyle = {
        background: "transparent",
        marginRight: 40,
        border: "none",
        padding: 0,
    };

    return (
        <>
            <Nav className="sticky-top navbar navbar-expand-sm navbar-light bg-light d-flex" style={{ backgroundImage: "linear-gradient(to right, #87CEEB, lightgreen)" }}>

                <div className="collaspe navbar-collapse" id="navbarNav" style={{ marginLeft: '40px' }}>

                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/product/1/1" className="nav-link">Product</Link>
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


                        }}>Welcome to Mario World</span>
                    </a>

                </div>




                <div className="justify-content-between">
                    <Link to="/shoppingcart">
                    <Button variant="outline-primary" style={cartButtonStyle}>
                        <FontAwesomeIcon icon={faCartArrowDown}  size="xl" style={{ color: "#184e3b" }} />
                    </Button>{' '}
                     </Link>


                    <Link to="/login">
                    <Button variant="outline-primary" style={{ marginRight: '40px' }}>Login</Button>{' '}
                    </Link>
                </div>
            </Nav>
        </>
    );
}