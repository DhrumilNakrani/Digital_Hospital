import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <section className="bg-dark text-white py-4">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Company Info</h5>
                        <hr />
                        <p>
                            Digital Hospital is a concept contributing to enhancing personnel productivity, facilitating hospital operations, improving the process quality and ensuring patient safety by integrating cutting-edge technologies such as medical devices, smart information systems, facility control and automatic conveyor systems, location-based services, sensors and digital communication tools into health processes
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <hr />
                        <Link to="/" className="mx-2" style={{fontSize:"17px"}}> Home</Link>
                        <Link to="/about" className=" mx-2" style={{fontSize:"17px"}}> About Us </Link>
                        <Link to="/contact" className=" mx-2" style={{fontSize:"17px"}}> Contact US</Link>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Information</h5>
                        <hr />
                        <div className="lower">
                            <div className="phone">
                                <a href="#" style={{color:"white",fontSize:"17px"}}><i className="fas fa-phone-volume mx-3" style={{color:"orange"}}></i>+91 9876543210</a>
                            </div>
                            <div className="email">
                                <a href="#" style={{color:"white",fontSize:"17px"}}><i className="fas fa-envelope mx-3" style={{color:"orange"}}></i>digitalhospital@gmai.com</a>
                            </div>
                        </div>
                        <br></br>
                        
                            <div className="media-icons">
                                <a href="https://www.facebook.com/DHforgood/" target="_blank"><i className="fab fa-facebook-f mx-2" style={{color:"orange"}}></i></a>
                                <a href="https://www.instagram.com/dhforall/?hl=en" target="_blank"><i className="fab fa-instagram mx-2" style={{color:"orange"}}></i></a>
                                <a href="https://twitter.com/htdigitalhealth" target="_blank"><i className="fab fa-twitter mx-2" style={{color:"orange"}}></i></a>
                                <a href="https://www.youtube.com/results?search_query=digital+hospital" target="_blank"><i className="fab fa-youtube mx-2" style={{color:"orange"}}></i></a>
                                <a href="https://www.linkedin.com/company/digital-hospital-inc" target="_blank"><i className="fab fa-linkedin-in mx-2" style={{color:"orange"}}></i></a>
                            </div>
                        
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Footer;