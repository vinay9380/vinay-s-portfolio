import React from "react";
import './style.css';


function HomePage() {
    return (
        <div className="homepage_container">
            <div className="card">
                <div>
                    <div className="homepahge_mainheading">
                        Hello, I am Vinay Singh
                        Front-End Developer
                    </div>
                    <div className="homepage_desc">
                        As a Front-End Developer,
                        I am passionate about transforming creative designs into interactive,
                        user-friendly web experiences. With a solid foundation in modern web technologies and a keen eye for detail,
                        I specialize in crafting responsive and visually appealing interfaces that provide a seamless user experience across various devices and browsers.
                    </div>
                    <div className="homepage_techlogo">
                        <i class="fab fa-html5"></i>
                        <i class="fab fa-css3-alt"></i>
                        <i class="fab fa-js-square"></i>
                        <i class="fab fa-react"></i>
                    </div>
                </div>
                <div className="image">
                    <img src='./Images/pc_ver_1.png' alt="Home" />
                </div>
            </div>
            <div className="homepage_cardbox">
                <div className="technology_card">

                </div>

            </div>
        </div>
    )
}

export default HomePage;