import "./Portfolio.css"
import { FaUpRightFromSquare } from "react-icons/fa6";
import { portWorks } from "../../helper/data"

const Portfolio = ()=> {
    return (
        <section id="portfolio">

            <h1 className="sub-heading">Portfolio</h1>
            <div className="divider"></div>
            <p className="sub-paraf">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quo similique qui distinctio quae facere harum doloribus mollitia sed nihil?
            </p>

            <div className="port-row">
                {
                    portWorks.map((work) => (
                    <div className="port-item" key={work.wId}>
                        <div className="port-img">
                            <img src={work.wImage} alt={work.wName} />
                        </div>
                        <div className="port-info">
                            <h4>{work.wName}</h4>
                            <p>{work.wDesc}</p>
                            <a href="#"><FaUpRightFromSquare /></a>
                        </div>
                    </div>                    
                    ))
                }
            </div>

        </section>
    )
}

export default Portfolio;