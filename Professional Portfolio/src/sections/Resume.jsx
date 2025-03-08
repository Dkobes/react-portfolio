import React from 'react';
import Resume from '../assets/resume.pdf';

const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = './assets/resume.pdf'; 
        link.download = 'resume.pdf';
        link.click();
    };

    return (
        <div>
            <h1>My Resume</h1>
            <button onClick={handleDownload}>Download Resume</button>
        </div>
    );
};

export default Resume;