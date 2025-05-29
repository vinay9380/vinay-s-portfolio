import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ToggleButton = styled(motion.button)`
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgba(100, 255, 218, 0.1);
    border: 2px solid #64ffda;
    color: #64ffda;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1000;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;

    &:hover {
        background: rgba(100, 255, 218, 0.2);
    }

    i {
        font-size: 1.2rem;
    }
`;

function ThemeToggler({ isDark, toggleTheme }) {
    return (
        <ToggleButton
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <i className={`fas fa-${isDark ? 'sun' : 'moon'}`}></i>
        </ToggleButton>
    );
}

export default ThemeToggler;
