
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
                    <h3>Slide 1</h3>
                    <p>Description for Slide 1</p>
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
                <Carousel.Caption>
                    <h3>Slide 2</h3>
                    <p>Description for Slide 2</p>
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
                    <h3>Slide 3</h3>
                    <p>Description for Slide 2</p>
                </Carousel.Caption>
            </Carousel.Item>







            {/* Add more Carousel.Item for additional slides */}
        </Carousel>
    );
}