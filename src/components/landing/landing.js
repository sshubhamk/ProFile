import React from 'react';

import './landing.css';

const Landing = () => {
  return (
    <div className='landing-main'>
      <div className='headline'>Empowering Professionals Through Skill-Based Networking
        <div className='sub-headline'>Connect, collaborate, and grow with professionals across various fields.</div>
      </div>
      <div className='benefits'>
        Benefits of using your ProFile.
        <ul>
          <li> Create a comprehensive professional profile.</li>
          <li> Showcase your unique skills and talents.</li>
          <li> Connect with professionals across various industries.</li>
          <li> Foster collaborations and partnerships.</li>
          <li> Discover new opportunities.</li>
        </ul>
      </div>
    </div>
  )
}

export default Landing;