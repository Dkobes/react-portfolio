import React from 'react';

const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/path/to/your/resume.pdf'; // Update this path to your resume file
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