// Profile.jsx

import "./profile.css";

import profilePic from "../assets/profile.jpeg.jpeg";
import cert1 from "../assets/certificate1.jpeg.jpeg";
import pro1 from "../assets/project.png.png";
import resumePDF from "../assets/navya resume.pdf";

import { useNavigate } from "react-router-dom";

function Profile() {

  const navigate = useNavigate();

  return (

    <div className="profile-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="nav-left">

          <button
            className="back-btn"
            onClick={() => navigate("/")}
          >
            ←
          </button>

          <h2 className="logo">
            Navya&apos;s Verse
          </h2>

        </div>

        <div className="nav-links">

          <button
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior:"smooth" })
            }
          >
            About
          </button>

          <button
            onClick={() =>
              document
                .getElementById("achievements")
                .scrollIntoView({ behavior:"smooth" })
            }
          >
            Achievements
          </button>

          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior:"smooth" })
            }
          >
            Projects
          </button>

          <button
            onClick={() =>
              document
                .getElementById("skills")
                .scrollIntoView({ behavior:"smooth" })
            }
          >
            Skills
          </button>

        </div>

      </nav>

      {/* ================= HERO SECTION ================= */}

      <section className="profile-section">

        {/* IMAGE */}

        <div className="profile-image-container">

          <div className="circle-bg"></div>

          <img
            src={profilePic}
            alt="Profile"
            className="profile-image"
          />

        </div>

        {/* CONTENT */}

        <div className="profile-content">

          <h1 className="animate-title">
            Hi, I&apos;m <span>Navya Sri</span>
          </h1>

          <h3 className="animate-subtitle">
            Web Developer | Java Enthusiast
          </h3>

          <p className="animate-text">
            Passionate about creating modern,
            responsive and interactive websites
            with creative UI design and strong
            problem solving skills.
          </p>

          {/* BUTTONS */}

          <div className="profile-buttons">

            <button
              className="primary-btn"
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior:"smooth" })
              }
            >
              Explore Projects
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior:"smooth" })
              }
            >
              Contact Me
            </button>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="section-box"
      >

        <h2>About Me</h2>

        <p>
          I&apos;m Navya Sri, a passionate Web Developer
          and aspiring Software Developer who enjoys
          building modern, responsive and user-friendly
          web applications.
        </p>

        <p>
          I love transforming ideas into interactive
          digital experiences using React JS,
          frontend technologies and creative UI design.
        </p>

        <p>
          I&apos;m continuously improving my skills in
          Java, React JS, problem solving and
          real-world project development.
        </p>

        {/* CURRENTLY LEARNING */}

        <div className="learning-section">

          <h3>Currently Learning</h3>

          <div className="learning-grid">

            <div>Advanced React JS</div>
            <div>REST APIs</div>
            <div>Backend Integration</div>
            <div>Java Development</div>
            <div>System Design Basics</div>

          </div>

        </div>

      </section>

      {/* ================= EDUCATION ================= */}

      <section className="section-box">

        <h2>Education</h2>

        <div className="education-card">

          <h3>
            Bachelor of Technology (B.Tech)
          </h3>

          <p>
            Information Technology
          </p>

          <span>
            2024 - 2028 Anil Neerukonda Institute of technology and Sciences 
          </span>

          <p>
            Passionately learning software development,
            frontend technologies and problem solving.
          </p>

        </div>

      </section>

      {/* ================= ACHIEVEMENTS ================= */}

      <section
        id="achievements"
        className="section-box"
      >

        <h2>Achievements & Certifications</h2>

        <div className="certificate-grid">

          <div className="certificate-card">

            <img
              src={cert1}
              alt="Certificate"
            />

            <h3>Java Programming</h3>

            <p>
              Completed Java programming certification
              and practical coding exercises.
            </p>

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="section-box"
      >

        <h2>Projects</h2>

        <div className="projects-grid">

          <div className="project-card">

            <img
              src={pro1}
              alt="Project"
              className="project-image"
            />

            <h3>Job Portal Application</h3>

            <p>

              • Developed a React.js Job Portal
              with API integration and secure login.

              <br /><br />

              • Built job listings and search
              functionality using APIs.

              <br /><br />

              • Implemented skill-based search
              and responsive UI design.

            </p>

            <div className="tech-stack">

              <span>React JS</span>
              <span>CSS</span>
              <span>API</span>

            </div>

            <div className="project-links">

              <a
                href="https://sunny-starlight-8f8d3d.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="section-box"
      >

        <h2>Skills</h2>

        <div className="skills-grid">

          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React JS</div>
          <div>Java</div>
          <div>SQL</div>
          <div>Data Structures</div>
          <div>Problem Solving</div>
          <div>Web Development</div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="section-box"
      >

        <h2>Contact Me</h2>

        <div className="contact-grid">

          <div className="contact-card">

            <h3>Email</h3>

            <a href="mailto:navyadalli2510@gmail.com">
              navyadalli2510@gmail.com
            </a>

          </div>

          <div className="contact-card">

            <h3>GitHub</h3>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub
            </a>

          </div>

          <div className="contact-card">

            <h3>LinkedIn</h3>

            <a
              href="https://www.linkedin.com/in/dalli-navya-sri-80abb836a"
              target="_blank"
              rel="noreferrer"
            >
              Visit LinkedIn
            </a>

          </div>

        </div>

      </section>

      {/* ================= RESUME ================= */}

      <section className="section-box">

        <h2>Resume</h2>

        <a
  href={resumePDF}
  target="_blank"
  rel="noreferrer"
  className="resume-btn"
>
  View Resume
</a>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <p>
          Designed & Developed by Navya Sri
        </p>

        <span>
          © 2026 All Rights Reserved
        </span>

      </footer>

    </div>

  );
}

export default Profile;