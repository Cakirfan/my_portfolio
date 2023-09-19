import React, { useState } from "react";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { portWorks } from "../../helper/data";
import "./Portfolio.css";

const Portfolio = () => {
    
  const [activeButton, setActiveButton] = useState("all");
  const [filteredWorks, setFilteredWorks] = useState(portWorks);

  const handleButtonClick = (btn) => {
    setActiveButton(btn);

    // Tıklanan düğmeye göre portfolyo öğelerini filtrele
    if (btn === "all") {
      setFilteredWorks(portWorks);
    } else {
      const filtered = portWorks.filter((work) => work.wCategory === btn);
      setFilteredWorks(filtered);
    }
  };

  

  return (
    <section id="portfolio">
      <h1 className="sub-heading">Portfolio</h1>
      <div className="divider"></div>
      <p className="sub-paraf">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quo
        similique qui distinctio quae facere harum doloribus mollitia sed nihil?
      </p>

      <div className="btn-group">
        <button
          className={activeButton === "all" ? "active" : ""}
          data-name="all"
          onClick={() => handleButtonClick("all")}
        >
          all
        </button>
        <button
          className={activeButton === "easy" ? "active" : ""}
          data-name="easy"
          onClick={() => handleButtonClick("easy")}
        >
          easy
        </button>
        <button
          className={activeButton === "intermediate" ? "active" : ""}
          data-name="intermediate"
          onClick={() => handleButtonClick("intermediate")}
        >
          intermediate level
        </button>
        <button
          className={activeButton === "high" ? "active" : ""}
          data-name="high"
          onClick={() => handleButtonClick("high")}
        >
          high level
        </button>
      </div>
      <div className="port-row">
        {filteredWorks.map((work) => (
          <div className="port-item" key={work.wId} data-name={work.wCategory}>
            <div className="port-img">
              <img src={work.wImage} alt={work.wName} />
            </div>
            <div className="port-info">
              <h4>{work.wName}</h4>
              <p>{work.wDesc}</p>
              <a href={work.wHref} target="_blank">
                <FaUpRightFromSquare />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
