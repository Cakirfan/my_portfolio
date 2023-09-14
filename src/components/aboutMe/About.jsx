import React from 'react'
import "./About.css"
import MyFoto from "../../assets/images/myFoto.jpeg"
import { FaAngleDoubleRight } from "react-icons/fa";

const About = () => {
  return (
            <section id="about">
            <h1 class="sub-heading">About Me</h1>
            <div class="divider"></div>
            <p>
                As an enthusiastic newcomer to the IT industry, I am aiming for a professional reorientation and am motivated to start my career in web development. My training as a frontend developer at Clarusway IT School gave me a solid foundation in the development of user-friendly and attractive web applications. I have a high willingness to learn and I am willing to continue my education to keep up with the latest technologies and trends in web development.
            </p>

            <div class="about-col">

                {/* <!--* img-col --> */}
                <div class="img-col">
                    <img src={MyFoto} alt="..." />
                </div>

                {/* <!--* information --> */}
                <div class="info-col">
                    <h2>Front-End Developer!</h2>
                    <p class="sub-paraf">
                        "I'm here to make the digital world a more user-friendly place by creating web solutions that put user experience first and combine aesthetics and functionality."
                    </p>
                    <div class="icon-list-col">

                        {/* <!--* Left-Side List --> */}
                        <div class="icon-list">
                            <ul>
                                <li><FaAngleDoubleRight className='icon'/> <strong>Birthday:</strong> <span>04 April 1988</span></li>
                                <li><FaAngleDoubleRight className='icon'/> <strong>Website:</strong> <span>www.google.com</span></li>
                                <li><FaAngleDoubleRight className='icon'/> <strong>Phone:</strong> <span>-</span></li>
                                <li><FaAngleDoubleRight className='icon'/> <strong>City:</strong> <span>Deutschland, Dusseldorf</span></li>
                            </ul>
                        </div>

                        {/* <!--* Right-Side List --> */}
                        <div class="icon-list">
                            <ul>
                                <li><FaAngleDoubleRight className='icon'/> <strong>Age:</strong> <span>35</span></li>
                                <li><FaAngleDoubleRight className='icon'/> <strong>Degree:</strong> <span>Junior</span></li>
                                <li><FaAngleDoubleRight className='icon'/> <strong>Email:</strong> <span>cakirfan.001@gmail.com</span></li>
                                <li><FaAngleDoubleRight className='icon'/> <strong>freelance:</strong> <span>Project pending</span></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
            
        </section>
  )
}

export default About
