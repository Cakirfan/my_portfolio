import "./Qualification.css"
import { experiences } from "../../helper/data";

const education1 = [
  "Front-End Web Developer",
  "December 2022 - July 2023",
  "Clarusway IT School",
];

const education2 = [
  "Teaching at Elementary Schools",
  "September 2005 - June 2009",
  "Erciyes University in Kayseri",
];

const info = [
  "Dusseldorf 40225, NRW, Deutschland",
  "+49 (123) 456-7890",
  "cakirfan.001@gmail.com",
];

const hTitel = ["Summary", "Education", "Professional Experience"];



const Qualification = () => {
    return (
      <section id="qualification">
        <h1 className="sub-heading">Qualification</h1>
        <div className="divider"></div>
        <p className="sub-paraf">
          Hello, I'm Irfan. I am looking for new opportunities to contribute by
          using my experience and skills effectively in the field of Web
          Development!
        </p>

        <div className="qualification-row">
          <div className="qualification-cols">
            <h2>{hTitel[0]}</h2>

            <div className="my-info">
              <h3>IRFAN CAKIR</h3>
              <p className="sub-paraf">
                Lorem ipsum dolor sit amet. Officia labore odit exercitationem
                et obcaecati corporis!
              </p>
              <ul>
                <li>{info[0]}</li>
                <li>{info[1]}</li>
                <li>{info[2]}</li>
              </ul>
            </div>

            <h2 className="edu">{hTitel[1]}</h2>

            <div className="my-edu">
              <h3>{education1[0]}</h3>
              <span className="box">{education1[1]}</span>
              <p>{education1[2]}</p>
            </div>

            <div className="my-edu">
              <h3>{education2[0]}</h3>
              <span className="box">{education2[1]}</span>
              <p>{education2[2]}</p>
            </div>
          </div>

          <div className="qualification-cols">
            <h2>{hTitel[2]}</h2>

            {experiences.map((experience) => (
              <div className="pro-exp">
                <h3>{experience.position}</h3>
                <span className="sp-box">{experience.time}</span>
                <p>{experience.place}</p>
                <ul>
                  {experience.desc.map((a) => (
                    <li>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}


export default Qualification;