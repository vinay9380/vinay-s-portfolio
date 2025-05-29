import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import './style.css';

const StyledHomePage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

function HomePage() {
    useEffect(() => {
        // Add scroll animation to tech logos
        const techLogos = document.querySelectorAll('.tech-icon');
        techLogos.forEach((logo, index) => {
            logo.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
        });
    }, []);

    return (
        <StyledHomePage>
            <ContentWrapper>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="content-left"
                >
                    <motion.h1
                        className="title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Hello, I'm Vinay Singh
                        <span className="highlight">Front-End Developer</span>
                    </motion.h1>

                    <motion.p
                        className="description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        As a Front-End Developer,
                        I am passionate about transforming creative designs into interactive,
                        user-friendly web experiences. With a solid foundation in modern web technologies 
                        and a keen eye for detail, I specialize in crafting responsive and visually 
                        appealing interfaces.
                    </motion.p>

                    <motion.div
                        className="tech-stack"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <i className="fab fa-html5 tech-icon"></i>
                        <i className="fab fa-css3-alt tech-icon"></i>
                        <i className="fab fa-js-square tech-icon"></i>
                        <i className="fab fa-react tech-icon"></i>
                    </motion.div>

                    <motion.button
                        className="cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        View My Work
                    </motion.button>
                </motion.div>

                <motion.div
                    className="image-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src='./Images/pc_ver_1.png' alt="Home" />
                </motion.div>
            </ContentWrapper>
        </StyledHomePage>
    );
}

export default HomePage;