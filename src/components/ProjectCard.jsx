import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/project/${project.id}`}>
        <img src={project.image} alt={project.title} loading="lazy"/>
        <h2>{project.title}</h2>
      </Link>

      {/* External Dribbble link */}
      {project.dribbble && (
        <a
          href={project.dribbble}
          target="_blank"
          rel="noopener noreferrer"
          className="dribbble-link"
        >
          View on Dribbble
        </a>
      )}
      {project.figma && (
        <a
          href={project.figma}
          target="_blank"
          rel="noopener noreferrer"
          className="figma-link"
        >
          View on Figma
        </a>
      )}
      {project.site && (
        <a
          href={project.site}
          target="_blank"
          rel="noopener noreferrer"
          className="liveSite-link"
        >
          View Site
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View on Github
        </a>
      )}
    </motion.div>
  );
};

export default ProjectCard;
