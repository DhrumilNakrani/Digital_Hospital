import React from "react";
import { Carousel } from "react-bootstrap";
import classes from "./AdminStarting.module.css";
import IMG1 from "../images/Admin1.jpg"
import IMG2 from "../images/Admin2.jpg"
import IMG3 from "../images/Admin3.jpg"
const AdminStarting = () => {
  return (
    <React.Fragment>
      <div>
        <section className={classes.starting}>
          <Carousel>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src={IMG1}
                alt="First slide"
                height={669}
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
                src={IMG3}
                alt="Second slide"
                height={669}
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
                src={IMG2}
                alt="Third slide"
                height={669}
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
        </section>
      </div>
    </React.Fragment>
  );
};

export default AdminStarting;