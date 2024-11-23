import "../css/Home.css";
import bgVid from "../assets/bg.mp4";
import { useNavigate } from "react-router-dom";
// import manOnLaptop from "../assets/man-on-laptop.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckToSlot, faPenRuler, faShip } from "@fortawesome/free-solid-svg-icons";

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
      {/* <section className="introSlide">
        <div className="imgTact">
          <img src={manOnLaptop} />
        </div>
        <div className="description">
          <h1>Living From The Firm That Cares</h1>
          Redefining real estate with a focus on care and commitment. Whether
          buying, selling, or leasing, we prioritize your comfort and
          satisfaction, delivering solutions that truly feel like home.
        </div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faShip} />
            Client-Centered Solutions: Tailored real estate services designed to
            meet your unique needs and preferences.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckToSlot} />
            Expertise You Can Trust: Years of experience ensuring smooth
            transactions for buying, selling, and leasing properties.
          </li>
          <li>
            <FontAwesomeIcon icon={faPenRuler} />
            Commitment to Excellence: Delivering reliable, professional, and
            results-driven services with your satisfaction as our priority.
          </li>
        </ul>
      </section> */}
    </>
  );
};

export default Home;
