import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import './style.css';

const NavbarContainer = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
`;

const NavContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoContainer = styled(motion.div)`
    font-size: 1.8rem;
    color: #64ffda;
    cursor: pointer;
`;

const NavLinks = styled.ul`
    display: flex;
    gap: 2rem;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`;

const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: #64ffda;
    font-size: 1.5rem;
    cursor: pointer;
    
    @media (max-width: 768px) {
        display: block;
    }
`;

const MobileMenu = styled(motion.div)`
    display: none;
    
    @media (max-width: 768px) {
        display: block;
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: rgba(26, 26, 26, 0.95);
        backdrop-filter: blur(10px);
        padding: 1rem;
    }
`;

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, section) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        navigate(section);
    };

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/projects", label: "Projects" },
        { path: "/contact", label: "Contact" }
    ];

    return (
        <NavbarContainer
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                background: isScrolled ? 'rgba(26, 26, 26, 0.95)' : 'transparent',
                boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
            }}
        >
            <NavContent>
                <LogoContainer
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => handleClick(e, "/")}
                >
                    <i className="fa fa-code" aria-hidden="true"></i>
                </LogoContainer>

                <NavLinks>
                    {navItems.map((item) => (
                        <motion.li
                            key={item.path}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href={item.path}
                                onClick={(e) => handleClick(e, item.path)}
                                className={location.pathname === item.path ? "active" : ""}
                            >
                                {item.label}
                            </a>
                        </motion.li>
                    ))}
                </NavLinks>

                <MobileMenuButton
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
                </MobileMenuButton>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <MobileMenu
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ul className="mobile-nav-links">
                                {navItems.map((item) => (
                                    <motion.li
                                        key={item.path}
                                        whileHover={{ x: 10 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <a
                                            href={item.path}
                                            onClick={(e) => handleClick(e, item.path)}
                                            className={location.pathname === item.path ? "active" : ""}
                                        >
                                            {item.label}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </MobileMenu>
                    )}
                </AnimatePresence>
            </NavContent>
        </NavbarContainer>
    );
}

export default NavBar;