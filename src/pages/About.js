import React from "react";

const About = () => {
  return (
    <>
      <div className="main-image-container about-us-img">
        <h1>ABOUT US</h1>
        <p>BEGINNING. PROGRESS. SUCCESS.</p>
      </div>

      <div className="cards mx-auto">
          <p>
          This an Nutrition and workout application built with react to form an interactive web page. It is pulling from an api built by Team 5(better name is still pending).
          Api is built using moogose and stored online using mongoDB. This a project built out as a part of a software engineering immersive program at General Assmebly.

          Reason for building this application is to build something that the everyday person would use and because we enjoy working on projects.

          
          </p>
    
         <div>

           <h3> Team Members</h3>
          <br></br>
            <a href="https://github.com/ABarranco95" className="btn">Angel Barranco <img className="github" src="https://i.imgur.com/GpOnmrS.png" alt="image"/></a>
            <a href="https://github.com/fmuwanguzi" className="btn">Felix Muwanguzi <img className="github" src="https://i.imgur.com/GpOnmrS.png" alt="image"/></a>
            <a href="https://github.com/codebypaul" className="btn">Paul Williams <img className="github" src="https://i.imgur.com/GpOnmrS.png" alt="image"/></a>
            <a href="https://github.com/richardleung1" className="btn">Richard Leung <img className="github" src="https://i.imgur.com/GpOnmrS.png" alt="image"/></a>
         </div>

                
         
      </div>
    </>
  );
};

export default About;
