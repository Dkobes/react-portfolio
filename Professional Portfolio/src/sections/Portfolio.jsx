import React from "react";
import adventurersBoard from "../assets/adventurersBoard.jpg";
import spellCaster from "../assets/spellCaster.jpg";
import treasureBarBrawl from "../assets/treasureBarBrawl.jpg";

const Portfolio = () => {
    const projects = [
        {
            title: "Adventurer's Board",
            description: "A Dungeons and Dragons based character creation and storage companion.",
            deployedLink: "https://adventurers-board.onrender.com/",
            githubLink: "https://github.com/Dkobes/adventurers-board",
            image: adventurersBoard
        },
        {
            title: "Caster Leveling Sheet",
            description: "A way to track caster levels and spell lists.",
            deployedLink: "https://tiecaelwaerts.github.io/caster-leveling-sheet/",
            githubLink: "https://github.com/Dkobes/caster-leveling-sheet",
            image: spellCaster
        },
        {
            title: "Treasure Bar Brawl",
            description: "A turn based RPG style web based video game.",
            deployedLink: "https://treasure-bar-brawl.onrender.com",
            githubLink: "https://github.com/Dkobes/Treasure-Bar-Brawl",
            image: treasureBarBrawl
        },
    ];  

    return (
        <div>
            <h1>Portfolio</h1>
            <div className="portfolio">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h2>{project.title}</h2>
                        <img src={project.image} alt={project.title} />
                        <p>{project.description}</p>
                        <a href={project.deployedLink}>Deployed Link</a> | 
                        <a href={project.githubLink}>GitHub Link</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;