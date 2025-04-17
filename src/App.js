import React from 'react';
import './App.css'; 


function App() {
  return (
    <div className="maindiv">
      <nav>
        <div className="leftdiv">
          <h1 className="name">R VIGNESH</h1>
          <hr />
          <p>
            A dusky Indian guy, unsure about his future after school, ended up choosing Mechanical Engineering due to lack of direction at the time. After completing his degree, he discovered a genuine interest in the IT field and started learning programming languages on his own. Now, he's actively building his skills and waiting for the right opportunity to kick-start his career in tech.
          </p>
          <p>
            "Aspiring techie with a background in mechanical engineering, now fully switched gears to the IT world. Passionate about coding, self-taught in key programming languages, and constantly leveling up through projects and online learning. Actively seeking opportunities to break into the tech industry and bring fresh energy, adaptability, and a growth mindset to the table."
          </p>
          <p>
            "Frontend enthusiast with a creative mindset and a solid grip on HTML, CSS, JavaScript, and modern frameworks. Passionate about building sleek, responsive UIs and turning designs into smooth, interactive web experiences. Constantly learning, experimenting, and staying in sync with the latest trends in web dev. Ready to bring fresh vibes and clean code to a dynamic frontend team."
          </p>
          <hr />
        </div>
      </nav>

      <div className="rightdiv">
        <div className="smalldivs">
          <h2>Personal Details</h2>
          <hr />
          <ul>
            <li>Name: R Vignesh</li>
            <li>Location: Thanjavur, India</li>
            <li>Email: rcva1997@gmail.com</li>
            <li>Phone: +91 7904518945</li>
          </ul>
        </div>

        <div className="smalldivs">
          <h2>Skills</h2>
          <hr />
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js & Bootstrap</li>
            <li>Responsive Web Design</li>
            <li>Git & GitHub</li>
            <li>Basic knowledge of APIs</li>
          </ul>
        </div>

        <div className="smalldivs">
          <h2>Education</h2>
          <hr />
          <ul>
            <li>Vidhyaa Vikas Matriculation Higher Secondary School</li>
            <li>Periyar Maniyammai Institute of Science and Technology</li>
            <li>B.Tech in Mechanical Engineering</li>
            <li>Frontend Development Courses (Online - Ongoing)</li>
          </ul>
        </div>

        <div className="smalldivs">
          <h2>Hobbies</h2>
          <hr />
          <ul>
            <li>Coding & building mini web projects</li>
            <li>Exploring new tech trends</li>
            <li>Listening to music & podcasts</li>
            <li>Gaming & watching tech YouTube channels</li>
            <li>Sketching and digital design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

