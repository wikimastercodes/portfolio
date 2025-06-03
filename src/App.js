// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import moonImage from './assets/moons.webp';
import dragonImage from './assets/dragon.webp';
import backgroundImage from './assets/background.webp';

function App() {
  return (
    <div className="maindiv container-fluid"  style={{
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    minHeight: '100vh',
  }}>
      <nav>
        <div className="leftdiv shadow-lg" style={{
    position: 'fixed',
    top: '30px',
    left: '30px',
    width: '670px',
    height: 'calc(100vh - 60px)',
    backgroundImage: `url(${dragonImage})`,
    backgroundSize: 'cover',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    zIndex: 10,
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  }}>
          <h1 className="name display-4 text-white">R VIGNESH</h1>
          <hr />
          <p className="text-light">
  A Mechanical Engineering graduate who discovered a strong interest in software development after completing his degree. Motivated by a passion for technology, I began self-learning programming languages and web development through online resources and hands-on projects.
</p>
<p className="text-light">
  A career-changer with a solid engineering foundation, now fully committed to the IT domain. I have independently built a strong understanding of programming concepts and modern web technologies. Eager to apply this knowledge in a dynamic tech environment that values adaptability, problem-solving, and continuous learning.
</p>
<p className="text-light">
  Frontend developer with a keen eye for detail and experience in HTML, CSS, JavaScript, React.js, and responsive design. Passionate about crafting clean, user-centric interfaces and staying updated with the latest trends in frontend development. Actively building projects to sharpen skills and seeking opportunities to contribute to innovative teams.
</p>
          <hr />
        </div>
      </nav>

      <div className="rightdiv d-flex flex-column align-items-center gap-4">
        <div className="smalldivs" style={{
    backgroundImage: `url(${moonImage})`,backgroundSize: '700px',
    backgroundPosition: 'center',
    width: '430px',
    height: '430px',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    
    cursor: 'pointer',
    textAlign: 'center',
    overflow: 'hidden',
    marginBottom: '60px',
  }}>
          <h2 className="h4 text-white">Personal Details</h2>
          <hr />
          <ul className="list-unstyled">
            <li>Name: R Vignesh</li>
            <li>Location: Thanjavur, India</li>
            <li>Email: wikimaster1997@gmail.com</li>
          </ul>
        </div>

        <div className="smalldivs" style={{
    backgroundImage: `url(${moonImage})`,
  }}>
          <h2 className="h4 text-white">Skills</h2>
          <hr />
          <ul className="list-unstyled">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js & Bootstrap</li>
            <li>Responsive Web Design</li>
            <li>Git & GitHub</li>
            <li>Basic knowledge of APIs</li>
          </ul>
        </div>

        <div className="smalldivs" style={{
    backgroundImage: `url(${moonImage})`,
  }}>
          <h2 className="h4 text-white">Education</h2>
          <hr />
          <ul className="list-unstyled">
            <li>Vidhyaa Vikas.Matric.Hr.Sec.School</li>
            <li>Periyar Maniyammai Institute (PMIST)</li>
            <li>B.Tech in Mechanical Engineering</li>
            <li>Frontend Development Courses </li>
          </ul>
        </div>

        <div className="smalldivs" style={{
    backgroundImage: `url(${moonImage})`,
  }}>
          <h2 className="h4 text-white">Hobbies</h2>
          <hr />
          <ul className="list-unstyled">
            <li>Coding & building mini web projects</li>
            <li>Exploring new tech trends</li>
            <li>Listening to music & podcasts</li>
            <li>Watching Gaming YouTube channels</li>
            <li>Sketching and digital design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
