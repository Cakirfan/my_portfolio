import React, { useState } from "react";
import MyLogo from "../myLogo/MyLogo";
import "./Navbar.css";
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
  const [active, setActive] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarItems = [
    {
      title: " Home",
      href: "#",
      icon: <BsFillHouseDoorFill className="navbar-icon" />,
    },
    {
      title: " About Me",
      href: "#about",
      icon: <FaUser className="navbar-icon" />,
    },
    {
      title: " Portfolio",
      href: "#portfolio",
      icon: <BsFillBriefcaseFill className="navbar-icon" />,
    },
    {
      title: " Services",
      href: "#services",
      icon: <BsServer className="navbar-icon" />,
    },
    {
      title: " Contact",
      href: "#contact",
      icon: <BsFillEnvelopeFill className="navbar-icon" />,
    },
  ];

    const socialIcons = [
      {
        href: "https://de-de.facebook.com/",
        icon: <BsFacebook />,
      },
      {
        href: "https://www.instagram.com/",
        icon: <BsInstagram />,
      },
      {
        href: "https://twitter.com/",
        icon: <BsTwitter />,
      },
      {
        href: "https://www.linkedin.com/in/irfan-cakir-/",
        icon: <BsLinkedin />,
      },
    ];


  return (
    <div className={isMenuOpen ? "mobile-nav-active" : ""}>
      <header>
        <div className="profile">
          <MyLogo />
          <h1 className="header-h1">Irfan Cakir</h1>

          <div className="social-icons">
            {socialIcons.map((icons) => (
              <a
                href={icons.href}
                target="_blank"
                rel="noreferrer"
                style={{ cursor: "pointer" }}
              >
                {icons.icon}
              </a>
            ))}
          </div>
        </div>

        {/* <!--* Navbar --> */}
        <nav>
          <ul>
            {navbarItems.map((item) => (
              <li>
                <a
                  href={item.href}
                  className="a"
                  onClick={() => setActive(!active)}
                >
                  {item.icon}
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* <!--* Footer --> */}
        <footer className="footer">
          <p>
            &copy; Copyright 2023 <br />
            Designed By
            <a
              href="https://www.linkedin.com/in/irfan-cakir-/"
              target="_blank"
              rel="noreferrer"
            >
              Cakirfan
            </a>
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
