import React from 'react';

export default function Home() {
  return (
    <main className="profile-container">

      {/* About Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a Computer Science graduate with a strong interest in full-stack web development and software engineering.
          I enjoy creating scalable, efficient, and user-friendly web applications. I am eager to learn new technologies
          and continuously improve my development skills.
        </p>

        <h3>Personal Information</h3>
        <ul>
          <li><strong>Name:</strong> Bhuvanesh KR</li>
          <li><strong>Email:</strong> bhuvaneshb546@gmail.com</li>
          <li><strong>Phone:</strong> +91 93453 17239</li>
          <li><strong>Address:</strong> Hosur, Tamil Nadu</li>
          <li><strong>Degree:</strong> B.E – Computer Science and Engineering</li>
        </ul>
      </section>
      <section className="education-section">
          <h2>Education</h2>
          <hr></hr>
          <div className="education">
          <div>
            <h4>Adhiyamaan College of Engineering</h4>
            <p><strong>Degree:</strong> B.E – Computer Science and Engineering</p>
            <p><strong>Year:</strong> 2020 – 2024</p>
            <p><strong>GPA:</strong> 7.3</p>
          </div>
          <hr></hr>
          <div>
            <h4>Green Valley Matric. Hr. Sec. School</h4>
            <p><strong>Qualification:</strong> HSC</p>
            <p><strong>Year:</strong> 2019 – 2020</p>
            <p><strong>Percentage:</strong> 64%</p>
          </div>
          <hr></hr>
          <div>
            <h4>Green Valley Matric. Hr. Sec. School</h4>
            <p><strong>Qualification:</strong> SSLC</p>
            <p><strong>Year:</strong> 2017 – 2018</p>
            <p><strong>Percentage:</strong> 84%</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h1>Technical Skills</h1>

        <div>
          <h3>Frontend Technologies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div>
          <h3>Backend Technologies</h3>
          <ul>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>

        <div>
          <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
          </ul>
        </div>

        <div>
          <h3>Frameworks</h3>
          <ul>
            <li>Spring Boot</li>
            <li>Hibernate</li>
            <li>React.js</li>
          </ul>
        </div>

        <div>
          <h3>Tools</h3>
          <ul>
            <li>Docker</li>
            <li>Visual Studio Code</li>
            <li>Eclipse</li>
            <li>Git & GitHub</li>
            <li>Postman</li>
          </ul>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <h1>Certifications</h1>
        <ul>
          <li>
            Completed certification on <strong>“Full Stack”</strong> in <strong>Infosys Springboard</strong>
          </li>
          <li>
            Completed workshop on <strong>“Machine learning for Image Processing”</strong> in <strong>Gestovalley Technovations</strong>
          </li>
        </ul>
      </section>

      {/* Internships Section */}
      <section className="internships-section">
        <h1>Internships</h1>

        <div>
          <h4>Intram Technologies</h4>
          <p>May – June 2023</p>
          <p>Front-End Developer Intern</p>
          <ul>
            <li>Gained hands-on experience in web development.</li>
            <li>Improved skills in modern web development practices.</li>
          </ul>
        </div>

        <div>
          <h4>KodNest Technologies</h4>
          <p>Jan – July 2025</p>
          <p>Full Stack Developer Trainee</p>
          <ul>
            <li>Worked on real-time full stack projects.</li>
            <li>Practiced frontend and backend technologies extensively.</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section slide-up-on-load">
        <h1>Projects</h1>
        <div className="project-card-container">
          {[1, 2, 3, 4].map((i) => (
            <div className="flip-card" key={i}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="your-image.jpg" alt="Project Preview" />
                  <h3 className="project-title">Project Name</h3>
                </div>
                <div className="flip-card-back">
                  <h4>Technologies Used</h4>
                  <p>HTML, CSS, JavaScript</p>
                  <a
                    href="https://yourprojectlink.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>View Project</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
