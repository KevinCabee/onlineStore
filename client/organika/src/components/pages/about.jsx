import { useState } from "react";
import "./about.css";

function About() {
    const [isVisible, setIsVisible] = useState(false);

    function displayInfo() {
        setIsVisible(!isVisible);
    }

    function getInfo() {
    if (!isVisible) return "";

        return(
            <div className="info">
                <h3>Email: onlinstore@gmail.com</h3>
                <h3>Phone: (858) 123-4567</h3>
            </div>
        );
    }

    return (
        <div className="about">
            <h1>About the Developer</h1>
            <h2>Kevin Cabrera</h2>

            {getInfo()}
            
            <button onClick={displayInfo}>See Info</button>

        </div>
    )
};

export default About;

