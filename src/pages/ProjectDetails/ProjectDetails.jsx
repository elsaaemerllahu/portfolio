import { useParams, Link } from "react-router-dom";
import projects from "../../data/projects";
import { motion } from "framer-motion";
import "../ProjectDetails/ProjectDetails.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Header from "../../components/Header/Header";
import { FaGithub, FaFigma, FaExternalLinkAlt, FaBehance } from "react-icons/fa";


const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const navigate = useNavigate();

  if (!project) return <p>Project not found</p>;

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="project-wrapper">
        <Header />
        <motion.div
          className="case-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="case-header">

            <motion.div

              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="case-hero-container"
            >
              <div className="case-links">
                <Link to="/" className="back-link" onClick={handleBack}>
                  <p>← Back</p>
                </Link>

                {project.behance && (
                  <a href={project.behance} className="behance-link" target="_blank" rel="noopener noreferrer">
                    Behance <FaBehance />
                  </a>
                )}

                {project.figma && (
                  <a href={project.figma} className="figma-link" target="_blank" rel="noopener noreferrer">
                    Figma <FaFigma />
                  </a>
                )}

                {project.site && (
                  <a href={project.site} className="liveSite-link" target="_blank" rel="noopener noreferrer">
                    Live Site <FaExternalLinkAlt />
                  </a>
                )}

                {project.github && (
                  <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
                    GitHub <FaGithub />
                  </a>
                )}
              </div>
              <motion.img
                src={project.image} alt={project.title} className="case-hero"
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
              <div>
                <h1 className="case-title">{project.title}</h1>
                <p className="case-subtitle">{project.subtitle}</p>
              </div>
            </motion.div>
          </div>

          {project.custom ? (
            <div className="custom-showcase">
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 0.3, ease: "easeOut" }}
                className="case-section"
              >
                <h2>Overview</h2>
                <div className="text-image-pair">
                  <p>{project.overview}</p>
                  <motion.img
                    src={project.dashboardMac} alt="" className="case-hero"
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

              </motion.div>
              {/* Features */}
              <section className="case-section">
                <h2>Key Features</h2>
                {project.features.map((item, index) => (
                  <motion.div
                    className="text-image-pair"
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <p>{item}</p>
                    {index === 1 && (
                      <img src={project.imageGoals} alt="Goals" className="case-hero" />
                    )}
                    {index === 2 && (
                      <img src={project.imageTasks} alt="Tasks Kanban" className="case-hero" />
                    )}
                    {index === 3 && (
                      <img src={project.imageReporting} alt="Reports" className="case-hero" />
                    )}
                  </motion.div>
                ))}
              </section>


              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="case-section"
              >
                <h2>Responsive Design</h2>
                <div className="text-image-pair">
                  <p>The app is fully responsive, adapting cleanly across devices from desktop to mobile.</p>
                  <img src={project.responsiveImg} alt="" className="case-hero" />
                </div>
              </motion.div>

              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="case-section"
              >
                {/* Dev Notes */}
                <h2>Development Notes</h2>
                <div className="text-image-pair">
                  <p>{project.devNotes}</p>
                  <motion.img
                    src={project.imageDashboard}
                    alt=""
                    className="case-hero"
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />                </div>
              </motion.div>
            </div>


          ) : (
            <>
              {project.mission && (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="case-section"
                >
                  <h2>{project.sectionTitles?.mission}</h2>
                  <p>{project.mission}</p>
                  <motion.img
                    src={project.image1} alt="" className="case-hero"
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />                </motion.div>

              )}

              {project.problems && (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="case-section"
                >
                  <h2>{project.sectionTitles?.problems}</h2>
                  {project.problems.map((problem, i) => (
                    <p key={i}>{problem}</p>
                  ))}
                  <motion.img
                    src={project.image4} alt="" className="case-hero"
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>

              )}

              {project.solution && (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="case-section"
                >
                  <h2>{project.sectionTitles?.solution}</h2>
                  {project.solution.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                  <motion.img
                    src={project.image2} alt="" className="case-hero"
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />

                </motion.div>

              )}

              {project.outcome && (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="case-section"
                >
                  <h2 style={{ marginTop: '12px' }}>{project.sectionTitles?.outcome}</h2>
                  <p style={{ marginBottom: '12px' }}>{project.outcome}</p>
                  <motion.img
                    src={project.image3} alt="" className="case-hero"
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />

                </motion.div>

              )}
            </>
          )}
        </motion.div>
        <ScrollToTop />
      </div>
      <Footer />

    </div>


  );
};

export default ProjectDetails;
