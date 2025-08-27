import React from "react";

export default function Home() {
  return (
    <main className="profile-container">
      {/* About Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          Computer Science graduate with strong Full Stack Development skills
          and a keen interest in Backend Development. Experienced in building
          scalable, secure web applications using REST APIs and database
          integration. Passionate about solving real-world problems through
          technology and effective teamwork, continuously updating skills to
          keep pace with modern web practices.
        </p>

        <h3>Personal Information</h3>
        <ul>
          <li>
            <strong>Name:</strong> Bhuvanesh KR
          </li>
          <li>
            <strong>Email:</strong> bhuvaneshb546@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> +91 93453 17239
          </li>
          <li>
            <strong>Address:</strong> Hosur, Tamil Nadu
          </li>
          <li>
            <strong>Degree:</strong> B.E – Computer Science and Engineering
          </li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h2>Education</h2>
        <div className="education">
          <div>
            <h4>Adhiyamaan College of Engineering</h4>
            <p>
              <strong>Degree:</strong> B.E – Computer Science and Engineering
            </p>
            <p>
              <strong>Year:</strong> 2020 – 2024
            </p>
          </div>
          <div>
            <h4>Green Valley Matric. Hr. Sec. School</h4>
            <p>
              <strong>Qualification:</strong> HSC
            </p>
            <p>
              <strong>Year:</strong> 2019 – 2020
            </p>
          </div>
          <div>
            <h4>Green Valley Matric. Hr. Sec. School</h4>
            <p>
              <strong>Qualification:</strong> SSLC
            </p>
            <p>
              <strong>Year:</strong> 2017 – 2018
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h1>Technical Skills</h1>
        {/* ...Your existing skills cards here... */}
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <h1>Certifications</h1>
        {/* ...Your certifications list here... */}
      </section>

      {/* Internships Section */}
      <section className="internships-section">
        <h1>Internships</h1>
        {/* ...Your internships list here... */}
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h1>Projects</h1>
        <div className="project-grid">
          {/* Oftenshopping E-Commerce Website */}
          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-content">
              <h3 className="project-title">
                Oftenshopping E-Commerce Website
              </h3>
              <p className="project-description">
                Built a scalable e-commerce platform with product browsing,
                cart, and checkout features.
              </p>
              <div className="project-tech">
                <span className="tech-pill">Java</span>
                <span className="tech-pill">Spring Boot</span>
                <span className="tech-pill">React.js</span>
                <span className="tech-pill">MySQL</span>
                <span className="tech-pill">HTML</span>
                <span className="tech-pill">CSS</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/bhuvanesh2207/often-shopping-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link link-secondary"
                >
                  BE Code
                </a>
                <a
                  href="https://github.com/bhuvanesh2207/often-shopping-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link link-secondary"
                >
                  FE Code
                </a>
              </div>
            </div>
          </div>

          {/* Todo App */}
          <div className="project-card">
            <div className="project-image todo-app-image"></div>
            <div className="project-content">
              <h3 className="project-title">Todo App</h3>
              <p className="project-description">
                A simple and efficient Todo app built with React and Vite,
                featuring task management with a clean UI.
              </p>
              <div className="project-tech">
                <span className="tech-pill">React</span>
                <span className="tech-pill">Vite</span>
                <span className="tech-pill">HTML</span>
                <span className="tech-pill">CSS</span>
                <span className="tech-pill">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://bhuvanesh-react-todo.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link link-primary"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/bhuvanesh2207/React-Todo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link link-secondary"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* React Tutorial Project */}
          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-content">
              <h3 className="project-title">React Tutorial Project</h3>
              <p className="project-description">
                A hands-on tutorial project built with React to understand
                components, routing, and state management.
              </p>
              <div className="project-tech">
                <span className="tech-pill">React</span>
                <span className="tech-pill">HTML</span>
                <span className="tech-pill">CSS</span>
              </div>
              <div className="project-links">
                <a
                  href="https://bhuvanesh-react-tutorial-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link link-primary"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/bhuvanesh2207/React-Tutorial-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link link-secondary"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Employee Management CRUD Application */}
          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-content">
              <h3 className="project-title">
                Employee Management CRUD Application
              </h3>
              <p className="project-description">
                Developed an Employee Management System with Spring Boot and
                MySQL, implementing full CRUD functionality.
              </p>
              <div className="project-tech">
                <span className="tech-pill">Java</span>
                <span className="tech-pill">Spring Boot</span>
                <span className="tech-pill">MySQL</span>
                <span className="tech-pill">HTML</span>
                <span className="tech-pill">CSS</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/bhuvanesh2207/SpringBoot-Employee-CRUD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link link-secondary"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Student Leave Management System */}
          <div className="project-card">
            <div className="project-image student-leave-image"></div>
            <div className="project-content">
              <h3 className="project-title">Student Leave Management System</h3>
              <p className="project-description">
                Developed a web application to manage student leave requests
                efficiently.
              </p>
              <div className="project-tech">
                <span className="tech-pill">JavaScript</span>
                <span className="tech-pill">CSS</span>
                <span className="tech-pill">HTML</span>
                <span className="tech-pill">SQL</span>
                <span className="tech-pill">PHP</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/bhuvanesh2207/Student-Leave-Management-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link link-secondary"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
