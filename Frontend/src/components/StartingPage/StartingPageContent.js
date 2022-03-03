// import Slider from '../UI/Slider';
//import classes from "./StartingPageContent.module.css";
import { Carousel } from "react-bootstrap";
import React from "react";
import Footer from "../../pages/Footer";
import IMG1 from "../images/StartingHomePage1.jpg";
import IMG2 from "../images/StartingHomePage2.jpg";
import IMG3 from "../images/StartingHomePage3.jpg";

const StartingPageContent = () => {
  return (
    <React.Fragment>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={IMG1}
            alt="First slide"
            height={550}
            width={100}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={IMG2}
            alt="Second slide"
            height={550}
            width={100}
          />
          <Carousel.Caption>
            Specialization
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={IMG3}
            alt="Third slide"
            height={550}
            width={100}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default StartingPageContent;