import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import './styles.css';

const AboutSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
  padding: 6rem 2rem;
`;

const AboutGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

const SkillItem = styled(motion.div)`
  background: rgba(100, 255, 218, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #64ffda;
`;

function About() {
    const skillsList = [
        "React.js",
        "JavaScript (ES6+)",
        "HTML & CSS",
        "Java Spring Boot",
        "Responsive Design",
        "RESTful APIs",
        "Git & Version Control",
        "Problem Solving"
    ];

    return (
        <AboutSection>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <AboutGrid>
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="about-content"
                    >
                        <motion.h2
                            className="section-title"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            About Me
                        </motion.h2>
                        
                        <motion.div
                            className="about-text"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <p>Hello! I'm <span className="highlight">Vinay Singh</span>, a passionate Software Developer based in Bangalore. With a background in technology, I specialize in creating innovative software solutions that meet user needs.</p>
                            
                            <p>I graduated from <span className="highlight">Visvesvaraya Technological University (VTU)</span> with a degree in Computer Science and have gained experience in HTML, CSS, JavaScript, Java Spring Boot, and React.js.</p>
                            
                            <p>Throughout my career, I've worked on projects such as an E-commerce website and various product applications, allowing me to develop a strong foundation in web development.</p>
                            
                            <p>I believe in the power of collaboration and continuous learning. Whether working on a team or independently, I strive to push the boundaries of what's possible and deliver exceptional results.</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="skills-section"
                    >
                        <motion.h3
                            className="skills-title"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Skills & Technologies
                        </motion.h3>

                        <Skills>
                            {skillsList.map((skill, index) => (
                                <SkillItem
                                    key={skill}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        delay: 0.6 + index * 0.1,
                                        duration: 0.5
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: 'rgba(100, 255, 218, 0.2)'
                                    }}
                                >
                                    {skill}
                                </SkillItem>
                            ))}
                        </Skills>
                    </motion.div>
                </AboutGrid>
            </motion.div>
        </AboutSection>
    );
}

export default About;