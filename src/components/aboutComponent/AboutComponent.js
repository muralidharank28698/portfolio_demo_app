import React from 'react';
import './AboutComponent.css';

function AboutComponent() {
  return (
    <div className="aboutMe">
      {/* <div className='aboutMeInnerContent'> */}
      <div className="leftCon">
        <div className="profile">
          <img src={require('../../assets/profile.jpg')} alt="profile"></img>
        </div>
      </div>
      <div className="rightCon">
        <div className="aboutMeContent">
          <h1>About Me</h1>
          <p>
            Hai I am Muralidharan.I am a MCA Graduate person. I have Completed the MCA degree in
            Puducherry Technological University.
            <br /> Basically I have a Interest in Web Development. I know some of the programming
            languages,they are C, C++, PHP, Python, HTML, CSS, Javascript, reactJs.
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default AboutComponent;
