import "./Services.css";
import { services } from "../../helper/data";

const Services = () => {
  return (
    <section id="services">
      <h1 className="sub-heading">Services</h1>
      <div className="divider"></div>
      <p className="sub-paraf">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatum
        aperiam minus quos aut! Dolores, officia, consequatur voluptatibus sunt
        aspernatur rerum ex placeat a praesentium est quas quidem hic dolore?
      </p>

      <div className="service-row">
        {services.map((service) => (
          <div className="service-box" key={service.id}>
            <div className="icon">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <div className="user-info">
              <h4>{service.sName}</h4>
              <p>{service.sDesc}</p>
              <p>{service.sDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
