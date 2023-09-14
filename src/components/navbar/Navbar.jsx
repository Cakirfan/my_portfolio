import React, { useState } from "react";
import MyLogo from "../myLogo/MyLogo";
import "./Navbar.css"
// import { Link } from 'react-router-dom'
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsFillHouseDoorFill,
  BsFillBriefcaseFill,
  BsServer,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className={isMenuOpen ? "mobile-nav-active" : ""}>
      <header>
        <div className="profile">
          <MyLogo />
          <h1>Irfan Cakir</h1>

          <div className="social-icons">
            <a href="https://de-de.facebook.com/" target="_blank" rel="noreferrer">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <BsInstagram />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <BsTwitter />
            </a>
            <a href="https://www.linkedin.com/in/irfan-cakir-/" target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
          </div>
        </div>

        {/* <!--* Navbar --> */}
        <nav>
          <ul>
            <li>
              <a href="#" className="active a"><BsFillHouseDoorFill className="navbar-icon" /> Home</a>
            </li>
            <li>
              <a href="#about" className="a"><FaUser className="navbar-icon" /> About Me</a>
            </li>
            <li>
              <a href="portfolio" className="a"><BsFillBriefcaseFill className="navbar-icon" /> Portfolio</a>
            </li>
            <li>
              <a href="services" className="a"><BsServer className="navbar-icon" /> Services</a>
            </li>
            <li>
              <a href="contact" className="a"><BsFillEnvelopeFill className="navbar-icon" /> Contact</a>
            </li>
          </ul>
        </nav>

        {/* <!--* Footer --> */}
        <footer className="footer">
          <p>
            &copy; Copyright 2023 <br />
            Designed By
            <a href="https://www.linkedin.com/in/irfan-cakir-/" target="_blank" rel="noreferrer">Cakirfan</a>
          </p>
        </footer>
      </header>

      {/* <!--* Mobile Nav Toggle --> */}
      {isMenuOpen ? (
        <FaTimes className="" id="MenuBtn" onClick={toggleMenu} />
      ) : (
        <FaBars className="" id="MenuBtn" onClick={toggleMenu} />
      )}
    </div>
  );
};

export default Navbar;
