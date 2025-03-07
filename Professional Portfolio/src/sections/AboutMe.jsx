import React from "react";
import profilePic from "/src/assets/portfolioPhoto.jpg";

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <h1>About Me</h1>
            <div className="about-me">
                <img src={profilePic} alt="Danyelle Kobes" className="profile-pic" />
                <p className="about-me-text">
                    Hi there! I'm Danyelle Kobes, a Software Developer with a strong foundation in full-stack web development. I currently work for the Department of Veterans Affairs 
                    Health Administation, and recently graduated from a coding bootcamp through the University of Madison, Wisconsin. I was able to hone my skills in modern technologies, 
                    including JavaScript, React, Node.js, and MongoDB.
                </p>
                <p className="about-me-text">
                    I am passionate about creating applications that are both user-friendly and visually appealing. 
                    I thrive on always looking for new opportunities to learn and grow as a developer. My projects showcase the expertise I have gained in web development along with
                    my ability to work with a team to create applications that meet the needs of the user. 
                </p>
                </div>
            </div>
                );
};

export default AboutMe;