import { React, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
const NavBar = lazy(() => import('./Components/Navbar'));
const HomePage = lazy(() => import('./HomePage'));
const AboutPage = lazy(() => import('./About/index'));
const ContactPage = lazy(() => import('./Contect/index'));


function App() {
  const handleClick = () => {

  }
  return (
    <Router>
      <div >

        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>

  );
}

export default App;
