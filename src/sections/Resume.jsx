import React from 'react';

const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf'; 
        link.download = 'resume.pdf';
        link.click();
    };

    return (
        <div className="resume-container">
            <h1 className="resume-title">My Resume</h1>
            <h3>Proficiencies</h3>
            <ul className="resume-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Postgres</li>
                <li>Sequelize</li>
                <li>Express</li>
                <li>GitHub</li>
            </ul>
            <button className="resume-button" onClick={handleDownload}>Download Resume</button>
        </div>
    );
};

export default Resume;