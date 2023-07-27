
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyCarousel() {
    return (
        <Carousel>


            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://gifdb.com/images/high/nintendo-super-mario-prank-his-brother-luigi-lqk9dd9c9hcgzf0s.webp"
                    width="50px"
                    height="600px"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 style={{fontSize:'50px',margin:'2rem 0 20rem 0'}}>New Arrivals !!!</h3>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://gifdb.com/images/high/nintendo-super-mario-bros-different-forms-japg0ynxgi9slxx9.webp"
                    width="1000px"
                    height="600px"
                    alt="Second slide"
                />
                <Carousel.Caption style={{margin:'0 0 16rem 0', fontSize:'50px'}}>
                    <p>New Collection</p>
                    <p>Launch on 10/11/2023</p>
                </Carousel.Caption>
            </Carousel.Item>




            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://gifdb.com/images/high/nintendo-ds-super-mario-bros-adventure-lpy34b0xpdmn5tj1.webp"
                    width="1000px"
                    height="600px"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3><img style={{width:'740px',height:'300px',margin:'0 0 0 0'}} src='https://mario.wiki.gallery/images/6/61/Mario_Day_Logo.png'/></h3>
                    <h3 style={{marginBottom:'10rem'}}>10 March</h3>
                </Carousel.Caption>
            </Carousel.Item>







            {/* Add more Carousel.Item for additional slides */}
        </Carousel>
    );
}