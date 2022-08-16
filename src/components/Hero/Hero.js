import { Container, Carousel } from 'react-bootstrap';
import image1 from "./../../assets/hero/ejen-ali-banner.webp";
import image2 from "../../assets/hero/nwh-banner.jpg";
import image3 from "../../assets/hero/walking-dead-banner.webp";
import "./Hero.css"

const Hero = () => {
    return (
        <Container fluid className='px-0'>
            <Carousel id='home'>
                <Carousel.Item className='hero-image-container'>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='hero-image-container'>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='hero-image-container'>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Hero;
