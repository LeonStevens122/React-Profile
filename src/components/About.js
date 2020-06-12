// pages/profile.js

import React from 'react';
import { Row, Col } from 'react-materialize'

// about component exports the component 
const About = () => {
  return (
      <div>
          <div className="row">
              <br/>
              <p className="about-parr abt-column"> Full Stack Web Developer, HTML - CSS - JS - REACT - Epxress - Node - Python - Django </p>
          </div>
              <Row>
              <Col m={2} s={3}>
          <img
                      src="https://raw.githubusercontent.com/LeonStevens122/React-Profile/master/public/profile.jpg"
            className="profile-image"
            alt="A photo of Leon"
            title="Leon Photo"
                  />        </Col>  
              <Col m={10} s={8}>
                      <p className="descriptionPar">
                          Full Stack web developer with extensive experience in supply chain
                          and manufacturing, and taking the years of experience in meetign
                          deadlines, finidng solutions, solving problems and just plain
                          getting things done. And taking the same drive and passion into an
            exciting new Tech career{" "}
                      </p>
                  </Col>
                  </Row>
       
          <br />
          <br />
              
              <div>
                  <h2 className="education-title">
                      Full Stack Web Developer Bootcamp - HyperionDev 2020 
          </h2>
                  <h3 className="about-parr abt-column" > Field of study: Full Stack web Development with the M.E.R.N. stack </h3>
                  <div className="row descriptionPar">
                      <p className="EduPar">
                          Specialization - Web Page, Digital/Multimedia and Information Resources Design
                      </p>
                  </div>
              </div>
              
              <div>
              <h2 className="education-title">Programme in Purchasing and Supply Management - UNISA 2015</h2>
                  <h3 className="education-par" >Field of study: Purchasing, Procurement/Acquisitions and Contracts Management </h3>
                  <div className="row descriptionPar">
                      <p className="EduPar">
                          Specialization - Procurement and Stock Control
                          </p>
                  </div>
              </div>            
          </div>
    
  );
};

export default About;
