import React from 'react';
import "../../src/App.css";

const Footer = () => {
    return (
        <footer>
            <div>
                <a href="https://github.com/Dkobes" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                {' | '}
                <a href="https://www.linkedin.com/in/danyelle-kobes-82824b354/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Danyelle Kobes. All rights reserved.</p>
        </footer>
    );
};

export default Footer;