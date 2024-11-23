import "../css/Home.css";
import bgVid from "../assets/bg.mp4";
import { useNavigate } from "react-router-dom";

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
          <button onClick={() => navigate("/properties")}>View Properties</button>
        </div>
      </header>
    </>
  );
};

export default Home;
