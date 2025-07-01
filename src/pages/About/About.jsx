import "../About/About.css";
import "../../styles/main.css";
import elsa from "../../assets/elsa1.png";
import Header from "../../components/Header/Header";
import CatAnimation from "../../components/CatAnimation/CatAnimation";
import react from "../../assets/react.png";
import adobe from "../../assets/adobe.png";
import nodejs from "../../assets/nodejs.png";
import phphtmlcss from "../../assets/phphtmlcss.png";
import mongodb from "../../assets/mongodb.png";
import git from "../../assets/git.png";
import spider from "../../assets/spider.png";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <div className="project-wrapper">
        <Header />
        <div className="about-page">
          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-card-content">
              <div className="about-heading">
                <h1 className="about-title">
                  About Me
                </h1>
                <p>
                  I'm a front-end developer and graphic designer who loves
                  combining creativity with clean, functional design.
                </p>
              </div>
<motion.img
  src={elsa}
  alt="Elsa Emerllahu"
  className="about-image"
  loading="lazy"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
/>
            </div>
            <div className="about-bio">
              <p className="about-description">
                As a Computer Science student at "Kadri Zeka" University, I specialize in building visually engaging and user-focused websites. My main toolkit includes React for dynamic front-end experiences and PHP for handling powerful back-end logic.

                With a strong interest in UI/UX, I often complement my development work with design tools like Adobe Photoshop and Illustrator, blending code with creativity to deliver polished, responsive web interfaces.
              </p>
              <p className="about-description">
                While front-end is my focus, I’m also comfortable working across the full stack — from designing pixel-perfect layouts to implementing server-side functionality — giving me the flexibility to take on diverse development challenges.

              </p>
            </div>
          </motion.div>

          <div className="about-flip-cards">
            <h2 className="sub-title">Here’s a bit more about what I bring to the table</h2>

            <div className="flip-cards">
              <div className="flip-grid">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={react} alt="react" loading="lazy"/>
                      <p>React</p>
                    </div>
                    <div className="flip-card-back">
                      <p>Dynamic UI with component-based design.</p></div>
                  </div>
                </div>
              </div>
              <div className="flip-grid">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={adobe} alt="adobe" loading="lazy"/>
                      <p>
                        Adobe Photoshop & Illustrator
                      </p>
                    </div>
                    <div className="flip-card-back">
                      <p>Creative design meets precise visual storytelling.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flip-grid">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front last-card">
                      <img src={phphtmlcss} alt="phphtmlcss" loading="lazy"/>
                      <p>PHP, HTML/CSS</p>
                    </div>
                    <div className="flip-card-back">
                      <p>Building responsive and accessible web foundations.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flip-grid">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={nodejs} alt="nodejs" loading="lazy"/>
                      <p>Node.js</p>
                    </div>
                    <div className="flip-card-back">
                      <p>Scalable backends with clean, efficient APIs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flip-grid">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={mongodb} alt="mongodb" loading="lazy"/>
                      <p>MongoDB</p>
                    </div>
                    <div className="flip-card-back">
                      <p>Flexible NoSQL data management at scale.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flip-grid">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={git} alt="git" loading="lazy"/>
                      <p>Git</p>
                    </div>
                    <div className="flip-card-back">
                      <p>Version control that keeps my code clean and collaborative.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-card-end">
            <img src={spider} className="spider-svg" alt="spider" />
            {/* <img src={coffee} className="lady-svg"/> */}
            <div className="description-paragraphs" >

              <p className="about-description">
                Alongside my technical expertise, I bring
                strong soft skills including <span className="highlight">effective communication</span>, <span className="highlight">adaptability</span>, <span className="highlight">consistency</span>,
                and a <span className="highlight">collaborative mindset</span>, allowing me to contribute meaningfully
                in both independent and team-based projects.
              </p>

              <p className="about-description">
                Outside of tech, I enjoy exploring my <span className="highlight">creative side</span> through
                design, photography, drawing, and reading. These hobbies fuel my
                creativity and help me approach both my work and life with fresh
                perspectives.
              </p>
            </div>

          </div>
        </div>

        <CatAnimation />
      </div>
      <Footer />
    </div>
  );
};

export default About;
