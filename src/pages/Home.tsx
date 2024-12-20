import "../css/Home.css";
import bgVid from "../assets/bg.mp4";
import { Link, useNavigate } from "react-router-dom";
import manOnLaptop from "../assets/man-on-laptop.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheckToSlot,
  faCompassDrafting,
  faMoneyCheckDollar,
  faPenRuler,
  faPlaneCircleCheck,
  faShip,
} from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <video id="bgVid" loop autoPlay muted src={bgVid}></video>
        <div className="description">
          <p>CHRISTABEL CONCEPTS</p>
          <h1>The Services You Rightfully Deserve</h1>
          <p className="description-text">
            A trusted name in real estate, specializing in personalized
            solutions for buying, selling, and leasing properties. At Christabel
            Concepts, we combine expertise with a client-first approach to
            deliver exceptional results tailored to your unique needs.
          </p>
          <button onClick={() => navigate("/properties")}>
            View Properties
          </button>
        </div>
      </header>
      <section className="introSlide">
        <div className="imgTact">
          <img src={manOnLaptop} />
        </div>
        <div className="description">
          <h1>Living From The Firm That Cares</h1>
          <p>
            Redefining real estate with a focus on care and commitment. Whether
            buying, selling, or leasing, we prioritize your comfort and
            satisfaction, delivering solutions that truly feel like home.
          </p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faShip} />
              <span>
                <b>Client-Centered Solutions</b>: Tailored real estate services
                designed to meet your unique needs and preferences.
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckToSlot} />
              <span>
                <b>Expertise You Can Trust</b>: Years of experience ensuring
                smooth transactions for buying, selling, and leasing properties.
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPenRuler} />
              <span>
                <b>Commitment to Excellence</b>: Delivering reliable,
                professional, and results-driven services with your satisfaction
                as our priority.
              </span>
            </li>
          </ul>
          <button onClick={() => navigate("/about")}>Learn More</button>
        </div>
      </section>
      <section className="about">
        <h1>Our Passion Is People, What's Yours?</h1>
        <div className="items">
          <div className="item">
            <p className="icon">
              <FontAwesomeIcon icon={faCompassDrafting} />
            </p>
            <p className="heading">Creative Design</p>
            <p className="description">
              Our creative design blends innovation and aesthetics to craft
              visually stunning and functional spaces.
            </p>
            <Link to={"/properties"}>
              See more <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="item">
            <p className="icon">
              <FontAwesomeIcon icon={faPlaneCircleCheck} />
            </p>
            <p className="heading">Experience Style</p>
            <p className="description">
              Discover quality crafted with elegance, delivering an experience
              that's as stylish as it is unforgettable.
            </p>
            <Link to={"/properties"}>
              See more <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="item">
            <p className="icon">
              <FontAwesomeIcon icon={faSearchengin} />
            </p>
            <p className="heading">Product Research</p>
            <p className="description">
              Delve into insights and innovation, ensuring every product
              reflects quality, purpose, and style.
            </p>
            <Link to={"/properties"}>
              See more <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="item">
            <p className="icon">
              <FontAwesomeIcon icon={faMoneyCheckDollar} />
            </p>
            <p className="heading">Affordable Price</p>
            <p className="description">
              Experience exceptional quality and thoughtful design, all crafted
              to deliver unmatched value at an affordable price.
            </p>
            <Link to={"/properties"}>
              See more <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
