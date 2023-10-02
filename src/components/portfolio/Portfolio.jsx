import React, { useState } from "react";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { portWorks } from "../../helper/data";
import "./Portfolio.css";

const Portfolio = () => {
  const [activeButton, setActiveButton] = useState("all");
  const [filteredWorks, setFilteredWorks] = useState(portWorks);
  const [showAll, setShowAll] = useState(false); // Toggle durumu ekledik

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

  const toggleShowAll = () => {
    setShowAll(!showAll); // Toggle durumunu tersine çevirir
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
          upper intermediate
        </button>
        <button
          className={activeButton === "intermediate" ? "active" : ""}
          data-name="intermediate"
          onClick={() => handleButtonClick("intermediate")}
        >
          intermediate
        </button>
        <button
          className={activeButton === "high" ? "active" : ""}
          data-name="high"
          onClick={() => handleButtonClick("high")}
        >
          elementary
        </button>
      </div>

      <div className="port-row">
        {showAll
          ? filteredWorks.map((work) => (
              <div
                className="port-item"
                key={work.wId}
                data-name={work.wCategory}
              >
                <div className="port-img">
                  <img src={work.wImage} alt={work.wName} />
                </div>
                <div className="port-info">
                  <h4>{work.wName}</h4>
                  <p>{work.wDesc}</p>
                  <a href={work.wHref} target="_blank" rel="noreferrer">
                    <FaUpRightFromSquare />
                  </a>
                </div>
              </div>
            ))
          : filteredWorks.slice(0, 6).map((work) => (
              <div
                className="port-item"
                key={work.wId}
                data-name={work.wCategory}
              >
                <div className="port-img">
                  <img src={work.wImage} alt={work.wName} />
                </div>
                <div className="port-info">
                  <h4>{work.wName}</h4>
                  <p>{work.wDesc}</p>
                  <a href={work.wHref} target="_blank" rel="noreferrer">
                    <FaUpRightFromSquare />
                  </a>
                </div>
              </div>
            ))}
      </div>
      {filteredWorks.length > 6 && (
        <button onClick={toggleShowAll} className="show-more-button">
          {showAll ? "Show Less" : "Show More"}{" "}
          {/* Toggle durumuna göre düğme metnini değiştirir */}
        </button>
      )}
    </section>
  );
};

export default Portfolio;
