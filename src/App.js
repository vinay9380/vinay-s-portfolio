import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { motion } from "framer-motion";
import { init } from '@emailjs/browser';
import ScrollProgress from './Components/ScrollProgress';
import ThemeToggler from './Components/ThemeToggler';
import ParticleBackground from './Components/ParticleBackground/index.jsx';
import './index.css';

// Initialize EmailJS
init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

// Lazy load components
const NavBar = lazy(() => import('./Components/Navbar'));
const HomePage = lazy(() => import('./HomePage'));
const AboutPage = lazy(() => import('./About'));
const ContactPage = lazy(() => import('./Contect'));
const ProjectsPage = lazy(() => import('./Projects'));

// Theme configuration
const darkTheme = {
  background: '#1a1a1a',
  text: '#ffffff',
  accent: '#64ffda',
  secondary: '#a8b2d1',
  particleColor: '#64ffda'
};

const lightTheme = {
  background: '#f5f5f5',
  text: '#1a1a1a',
  accent: '#0a8c6a',
  secondary: '#4a4a4a',
  particleColor: '#0a8c6a'
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  #tsparticles {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .app-container {
    position: relative;
    z-index: 1;
  }
`;

function App({ initialState = {} }) {
  const [theme, setTheme] = useState(initialState.theme || 'dark');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      setTheme(savedTheme);
      setIsLoading(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="app-container">
        <ScrollProgress />
        <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
        <ParticleBackground theme={theme} />
        <Suspense fallback={<motion.div>Loading...</motion.div>}>
          <NavBar />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
