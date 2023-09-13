import React from 'react'
import MyLogo from './MyLogo'
import { Link } from 'react-router-dom'
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
import { FaUser } from "react-icons/fa"

const Navbar = () => {


  return (

    <header>

      <div className="profile">
        <MyLogo/>
        <h1>Irfan Cakir</h1>

        <div className="social-icons">
          <a href="https://de-de.facebook.com/" target="_blank"><BsFacebook /></a>
          <a href="https://www.instagram.com/" target="_blank"><BsInstagram /></a>
          <a href="https://twitter.com/" target="_blank"><BsTwitter /></a>
          <a href="https://www.linkedin.com/in/irfan-cakir-/" target="_blank"><BsLinkedin /></a>
        </div>
        
      </div>

      {/* <!--* Navbar --> */}
      <nav>
        <ul>
          <li><Link to="/" className="active a"><BsFillHouseDoorFill className='navbar-icon' /> Home</Link></li>
          <li><Link to="/about" className='a' ><FaUser className='navbar-icon' /> About Me</Link></li>
          <li><Link to="/portfolio" className='a'><BsFillBriefcaseFill className='navbar-icon' /> Portfolio</Link></li>
          <li><Link to="/services" className='a'><BsServer className='navbar-icon' /> Services</Link></li>
          <li><Link to="/contact" className='a'><BsFillEnvelopeFill className='navbar-icon' /> Contact</Link></li>
        </ul>
      </nav>

      {/* <!--* Footer --> */}
      <div class="footer">
        <p>&copy; Copyright 2023 <br />Designed By
          <a href="https://www.linkedin.com/in/irfan-cakir-/" target="_blank">Cakirfan</a>
        </p>
      </div>

    </header>

  )
}

export default Navbar
