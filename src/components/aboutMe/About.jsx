import React from "react";
import "./About.css";
import MyFoto from "../../assets/images/myFoto.jpeg";
import { FaAngleDoubleRight } from "react-icons/fa";
import { BsFillDiamondFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h1 class="sub-heading">About Me</h1>
      <div class="divider"></div>
      <p>
        {/* As an enthusiastic newcomer to the IT industry, I am aiming for a professional reorientation and am motivated to start my career in web development. My training as a frontend developer at Clarusway IT School gave me a solid foundation in the development of user-friendly and attractive web applications. I have a high willingness to learn and I am willing to continue my education to keep up with the latest technologies and trends in web development. */}
        Als begeisterter Neueinsteiger in die IT-Branche strebe ich eine
        berufliche Neuorientierung an und bin motiviert, meine Karriere in der
        Webentwicklung zu starten. Durch meine Weiterbildung zum
        Frontend-Entwickler an der Clarusway IT School habe ich eine solide
        Grundlage für die Entwicklung benutzerfreundlicher und attraktiver
        Webanwendungen gelegt. Ich habe eine hohe Lernbereitschaft und bin
        bereit, mich weiterzubilden, um mit den neuesten Technologien und Trends
        in der Webentwicklung Schritt zu halten.
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
            {/* I'm here to make the digital world a more user-friendly place by1
            creating web solutions that put user experience first and combine
            aesthetics and functionality. */}
            <p>
              <BsFillDiamondFill className="sub-paraf-icon" />
              Ich bin hier, um die digitale Welt benutzerfreundlicher zu machen,
              indem ich Weblösungen entwickle, bei denen das Benutzererlebnis an
              erster Stelle steht und die Ästhetik und Funktionalität vereinen.
            </p>

            <p>
              <BsFillDiamondFill className="sub-paraf-icon" />
              Ich verfüge über umfassende Kenntnisse in den Grundlagen der
              Webentwicklung, einschließlich HTML und CSS, und kann ansprechende
              und gut strukturierte Webseiten erstellen.
            </p>
            <p>
              <BsFillDiamondFill className="sub-paraf-icon" />
              Mit meiner Kompetenz in JavaScript kann ich interaktive Funktionen
              und dynamische Inhalte in Webanwendungen integrieren, um die
              Benutzererfahrung zu verbessern und komplexe Aufgaben zu
              automatisieren.
            </p>
            <p>
              <BsFillDiamondFill className="sub-paraf-icon" />
              Ich bin erfahren in der Verwendung von React, einer führenden
              JavaScript-Bibliothek für die Entwicklung von
              benutzerfreundlichen, skalierbaren und performanten
              Single-Page-Anwendungen (SPAs).
            </p>

            <p>
              <BsFillDiamondFill className="sub-paraf-icon" />
              Mein technisches Know-how und meine Fähigkeit, nahtlos mit
              verschiedenen Frontend-Technologien zu arbeiten, ermöglichen es
              mir, innovative und moderne Webanwendungen zu entwickeln, die den
              Anforderungen der heutigen digitalen Welt gerecht werden.
            </p>
          </p>
          <div class="icon-list-col">
            {/* <!--* Left-Side List --> */}
            <div class="icon-list">
              <ul>
                <li>
                  <FaAngleDoubleRight className="icon" />{" "}
                  <strong>Birthday:</strong> <span>04 April 1988</span>
                </li>
                <li>
                  <FaAngleDoubleRight className="icon" />{" "}
                  <strong>Website:</strong> <span>www.google.com</span>
                </li>
                <li>
                  <FaAngleDoubleRight className="icon" />{" "}
                  <strong>Phone:</strong> <span>-</span>
                </li>
                <li>
                  <FaAngleDoubleRight className="icon" /> <strong>City:</strong>{" "}
                  <span>Deutschland, Dusseldorf</span>
                </li>
              </ul>
            </div>

            {/* <!--* Right-Side List --> */}
            <div class="icon-list">
              <ul>
                <li>
                  <FaAngleDoubleRight className="icon" /> <strong>Age:</strong>{" "}
                  <span>35</span>
                </li>
                <li>
                  <FaAngleDoubleRight className="icon" />{" "}
                  <strong>Degree:</strong> <span>Junior</span>
                </li>
                <li>
                  <FaAngleDoubleRight className="icon" />{" "}
                  <strong>Email:</strong> <span>cakirfan.001@gmail.com</span>
                </li>
                <li>
                  <FaAngleDoubleRight className="icon" />{" "}
                  <strong>freelance:</strong> <span>Project pending</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
