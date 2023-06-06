import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill_htmlcss from "../assets/img/skill-html&css.png";
import skill_GIT from "../assets/img/skill-GIT.png";
import skill_JS from "../assets/img/skill-JS.png";
import skill_teamWork from "../assets/img/skill-teamWork.png";
import skill_React from "../assets/img/skill-React.png";
import skill_GO from "../assets/img/skill-GO.png";
import skill_GIN from "../assets/img/skill-GIN.png";
import postgre_SQL from "../assets/img/postgresql.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container .bg-light">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I have development support skills</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={skill_GIT} alt="GIT" className="carousel-image" />
                  <h5> GIT </h5>
                </div>
                <div className="item">
                  <img
                    src={skill_htmlcss}
                    alt="HTML & CSS"
                    className="carousel-image"
                  />
                  <h5> HTML & CSS </h5>
                </div>
                <div className="item">
                  <img src={skill_GO} alt="GO Language" className="carousel-image" />
                  <h5> GO Language</h5>
                </div>
                <div className="item">
                  <img src={skill_GIN} alt="GIN Gonic" className="carousel-image" />
                  <h5> GIN Gonic</h5>
                </div>
                <div className="item">
                  <img src={skill_JS} alt="JavaScript" className="carousel-image" />
                  <h5> JavaScript</h5>
                </div>
                <div className="item">
                  <img src={skill_React} alt="ReactJs" className="carousel-image" />
                  <h5> ReactJs</h5>
                </div>
                <div className="item">
                  <img src={postgre_SQL} alt="ReactJs" className="carousel-image" />
                  <h5> postgreSQL</h5>
                </div>
                <div className="item">
                  <img
                    src={skill_teamWork}
                    alt="Team Work"
                    className="carousel-image"
                  />
                  <h5> Team Work</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
