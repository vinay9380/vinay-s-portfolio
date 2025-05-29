import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import styled from "styled-components";

const ProgressBar = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: #64ffda;
    transform-origin: 0%;
    z-index: 1001;
`;

const ScrollIndicator = styled(motion.div)`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(100, 255, 218, 0.1);
    border: 2px solid #64ffda;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64ffda;
    font-size: 0.8rem;
    z-index: 1000;
    backdrop-filter: blur(10px);
`;

function ScrollProgress() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const updateScrollPercentage = () => {
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (window.scrollY / height) * 100;
            setScrollPercentage(Math.round(progress));
        };

        window.addEventListener("scroll", updateScrollPercentage);
        return () => window.removeEventListener("scroll", updateScrollPercentage);
    }, []);

    return (
        <>
            <ProgressBar style={{ scaleX }} />
            <ScrollIndicator
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
            >
                {scrollPercentage}%
            </ScrollIndicator>
        </>
    );
}

export default ScrollProgress;
