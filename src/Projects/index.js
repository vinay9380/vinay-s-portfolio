import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import './styles.css';

const ProjectsSection = styled.section`
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    color: #ffffff;
    padding: 6rem 2rem;
`;

const ProjectsGrid = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
`;

const ProjectCard = styled(motion.div)`
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    overflow: hidden;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(100, 255, 218, 0.1);
`;

const ProjectImage = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
`;

const ProjectContent = styled.div`
    padding: 1.5rem;
`;

const TechStack = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 1rem;
`;

const TechTag = styled(motion.span)`
    background: rgba(100, 255, 218, 0.1);
    color: #64ffda;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.85rem;
`;

function Projects() {
    const projects = [
        {
            title: "E-commerce Website",
            description: "A full-featured e-commerce platform with product catalog, shopping cart, and secure checkout.",
            image: "./Images/project1.png",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            link: "https://github.com/yourusername/project1"
        },
        {
            title: "Task Management App",
            description: "A responsive task management application with real-time updates and collaborative features.",
            image: "./Images/project2.png",
            technologies: ["React", "Firebase", "Material-UI"],
            link: "https://github.com/yourusername/project2"
        },
        {
            title: "Weather Dashboard",
            description: "A weather dashboard showing real-time weather data with interactive maps and forecasts.",
            image: "./Images/project3.png",
            technologies: ["JavaScript", "Weather API", "Chart.js"],
            link: "https://github.com/yourusername/project3"
        }
    ];

    return (
        <ProjectsSection>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h2
                    className="section-title"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Featured Projects
                </motion.h2>

                <ProjectsGrid>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * index, duration: 0.8 }}
                            whileHover={{ y: -10 }}
                        >
                            <ProjectImage>
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    whileHover={{ scale: 1.1 }}
                                />
                            </ProjectImage>
                            <ProjectContent>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <TechStack>
                                    {project.technologies.map((tech, techIndex) => (
                                        <TechTag
                                            key={techIndex}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {tech}
                                        </TechTag>
                                    ))}
                                </TechStack>
                                <motion.a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                    whileHover={{ x: 5 }}
                                >
                                    View Project <i className="fas fa-arrow-right"></i>
                                </motion.a>
                            </ProjectContent>
                        </ProjectCard>
                    ))}
                </ProjectsGrid>
            </motion.div>
        </ProjectsSection>
    );
}

export default Projects;
