// pages/profile.js
// import Layout & Link
import React from 'react';





// Import styling SCSS File



// Create Projects object, NEXT routes as a page
const Projects = (props) => {
  return (
      <>
          <div>
              <h1>PROJECTS</h1>
              
              <br />
          </div>
          
         
          <div className="grid-container">
              
        <div className="grid-item">
          <a
            href="https://sleepy-hamlet-64046.herokuapp.com/"
            alt="Django Craigslist Viewer"
          >
            <img
                className="portfolio-image"
                          src="https://raw.githubusercontent.com/LeonStevens122/React-Weather-App/master/public/screenshot.jpg"
                alt="Django Craigslist Viewer"
            />
          </a>
              </div>
             
     

        <div className="grid-item">
          <a
            href="https://github.com/LeonStevens122/HyperionDev-Full-Stack-WebDev-Bootcamp.git"
            alt="Online store"
          >
            <img
              className="portfolio-image"
              src="https://raw.githubusercontent.com/LeonStevens122/Personal-Website/master/data/webstore.jpg"
              alt="Web Store"
            />
          </a>
        </div>

        <div className="grid-item">
          <a
            href="https://github.com/LeonStevens122/React-Weather-App.git"
            alt="React Weather App"
          >
            <img
              className="portfolio-image"
              src="https://raw.githubusercontent.com/LeonStevens122/React-Weather-App/master/public/screenshot.jpg"
            />
          </a>
        </div>

        <div className="grid-item">
          <a
            href="https://git.heroku.com/secret-island-56752.git"
            alt="Tetris Game using React & TypeScript"
          >
            <img
              className="portfolio-image"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Emacs_Tetris_vector_based_detail.svg"
              alt="Tetris image"
            />
          </a>
        </div>

        <div className="grid-item">
          <a
            href="https://codepen.io/LeonStevens122/pen/oqRNGq"
            alt="Wikipedia Viewer"
          >
            <img
              className="portfolio-image"
              src="https://screenshot.codepen.io/1691929.oqRNGq.73d037dd-dab9-41f1-b97f-de1ead6971b9.png"
              alt="Wikipedia Viewer"
            />
          </a>
        </div>
      </div>
   </>
  );
};

export default Projects;
