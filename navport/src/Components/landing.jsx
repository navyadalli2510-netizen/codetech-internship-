
// Landing.jsx

import "./landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();
  return (

    <div className="landing-container">

      {/* Animated Gradient Background */}
      <div className="gradient-bg"></div>

      {/* Floating Shapes */}
      <div className="floating-shapes">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Grid Overlay */}
      <div className="grid-overlay"></div>

      {/* Main Content */}
      <div className="landing-content">

        <h1 className="main-title">
          Navya&apos;s <span>Verse</span>
        </h1>

        <p className="subtitle">
          Designing futuristic digital experiences with creativity & code
        </p>
        <button
  className="explore-btn"
  onClick={() => navigate("/profile")}
>
  View Navya&apos;s Portfolio
</button>
      </div>

    </div>
  );
}

export default Landing;