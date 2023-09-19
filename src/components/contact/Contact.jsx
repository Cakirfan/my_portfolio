import "./Contact.css"
import { HiLocationMarker } from "react-icons/hi";
import { HiEnvelope, HiPhoneArrowDownLeft } from "react-icons/hi2";

const Contact = () => {

  const contactInfo = [
    {
      cName: "Email",
      cInfo: "cakirfan.001@gmail.com",
      cHref: "https://www.google.de/gmail/about/",
      cIcon: <HiEnvelope className="sub-icon" />,
    },
    {
      cName: "Call",
      cInfo: "+49 (123) 456 7890",
      cHref: "https://web.whatsapp.com/",
      cIcon: <HiPhoneArrowDownLeft className="sub-icon" />,
    },
    {
      cName: "Location",
      cInfo: "Düsseldorf, NRW, Deutschland",
      cHref: "https://goo.gl/maps/Ddpe9oJdrpg7ERWV9",
      cIcon: <HiLocationMarker className="sub-icon" />,
    },
  ];

    return (
      <section id="contact">
        <h1 className="sub-heading">Contact</h1>
        <div className="divider"></div>
        <p className="sub-paraf">
          I am always here to communicate and learn more about cooperation
          opportunities. Working with you on projects, exchanging ideas or just
          saying hello is important to me. You can contact me via email, phone
          or social media. If you have any questions or suggestions, please do
          not hesitate to share. I will get back to you as soon as possible and
          do everything in my power to keep our communication warm and effective
          during this time. Here is my contact information:
        </p>

        <div className="contact-row">
          {/* <!--* Left Col --> */}
          <div className="contact-left">
            {contactInfo.map((info) => (
              <div className="icon-box">
                <div className="icon">
                  <a href={info.cHref} target="_blank">
                    {info.cIcon}
                  </a>
                </div>
                <div className="info">
                  <h4>{info.cName}:</h4>
                  <p>{info.cInfo}</p>
                </div>
              </div>
            ))}

            {/* <!--* Map --> */}

            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159868.3194697734!2d6.6495453697653595!3d51.23855399844443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c97bf1465907%3A0x42760fc4a2a73b0!2sD%C3%BCsseldorf!5e0!3m2!1str!2sde!4v1693940415381!5m2!1str!2sde"
                width="100%"
                height="250"
                style={{ border: "0px" }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* <!--* Right Col --> */}
          <div className="contact-right">
            <form action="">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
              <textarea
                name="msg"
                id="msg"
                rows="9"
                placeholder="Your Message"
              ></textarea>
              <input
                type="submit"
                name="submit"
                id="submit"
                placeholder="Send Message"
              />
            </form>
          </div>
        </div>
      </section>
    );
}

export default Contact;