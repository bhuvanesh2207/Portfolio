  import React from 'react';

  export default function Home() {
    return (
      <main className="profile-container">

        {/* About Section */}
        <section className="about-section">
          <h2>About Me</h2>
          <p>
            Computer Science graduate with strong Full Stack Development skills and a keen interest in Backend Development.
            Experienced in building scalable, secure web applications using REST APIs and database integration.
            Passionate about solving real-world problems through technology and effective teamwork, continuously 
            updating skills to keep pace with modern web practices.
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
            <div className="education">
            <div>
              <h4>Adhiyamaan College of Engineering</h4>
              <p><strong>Degree:</strong> B.E – Computer Science and Engineering</p>
              <p><strong>Year:</strong> 2020 – 2024</p>
            </div>
            <div>
              <h4>Green Valley Matric. Hr. Sec. School</h4>
              <p><strong>Qualification:</strong> HSC</p>
              <p><strong>Year:</strong> 2019 – 2020</p>
            </div>
            <div>
              <h4>Green Valley Matric. Hr. Sec. School</h4>
              <p><strong>Qualification:</strong> SSLC</p>
              <p><strong>Year:</strong> 2017 – 2018</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
    <h1>Technical Skills</h1>

    <div className="skills-grid">

      {/* Frontend Technologies */}
      <div className="skill-card">
        <h3>Frontend Technologies</h3>
        <ul>
          <li><strong>HTML5:</strong> Proficient in structuring semantic and accessible webpages using modern HTML standards.</li>
          <li><strong>CSS3:</strong> Skilled in layout techniques including Flexbox, Grid, transitions, and responsive design with media queries.</li>
          <li><strong>JavaScript:</strong> Strong grasp of core concepts like DOM manipulation, async programming, and event handling.</li>
          <li><strong>React.js:</strong> Experienced in building component-based UIs, managing state with hooks, and working with React Router and props/state systems.</li>
        </ul>
      </div>

      {/* Backend Technologies */}
      <div className="skill-card">
        <h3>Backend Technologies</h3>
        <ul>
          <li><strong>Java:</strong> Object-Oriented Programming (OOP), file handling, exception handling, multithreading, collections framework.</li>
          <li><strong>Python:</strong> Clean scripting, automation, and foundational knowledge in web development using Flask/Django.</li>
        </ul>
      </div>

      {/* Databases */}
      <div className="skill-card">
        <h3>Databases</h3>
        <ul>
          <li><strong>MySQL:</strong> Writing complex queries, joins, indexes, normalization, and database design for real-time applications.</li>
        </ul>
      </div>

      {/* Frameworks */}
      <div className="skill-card">
        <h3>Frameworks</h3>
        <ul>
          <li><strong>Spring Boot:</strong> REST API development, dependency injection, project structuring, and integration with databases using JPA/Hibernate.</li>
          <li><strong>Hibernate:</strong> ORM mapping, lazy/eager fetching, query language (HQL), and efficient database operations.</li>
          <li><strong>React.js:</strong> Repeated because of frontend category – used for single-page apps, reusable components, and JSX templating.</li>
        </ul>
      </div>

      {/* Tools & Platforms */}
      <div className="skill-card">
        <h3>Tools & Platforms</h3>
        <ul>
          <li><strong>Docker:</strong> Containerizing applications, Dockerfile creation, and understanding of isolated environments.</li>
          <li><strong>Visual Studio Code:</strong> Extensions, debugging, Git integration, and efficient coding practices.</li>
          <li><strong>Eclipse:</strong> Java-based IDE for large-scale backend applications and Spring Boot development.</li>
          <li><strong>Git & GitHub:</strong> Version control, branching, pull requests, and collaboration using GitHub repositories.</li>
          <li><strong>Postman:</strong> API testing, request building, and automated API documentation.</li>
        </ul>
      </div>

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
          <h4>INTARM Technologies</h4>
          <p><i>Web Development Intern</i> | May – June 2023</p>
          <ul>
            <li>Designed and developed responsive web pages using HTML, CSS, and JavaScript.</li>
            <li>Improved UI performance and collaborated with mentors on modern design practices.</li>
          </ul>
        </div>


          <div>
            <h4>KodNest</h4>
            <p><i>Full Stack Development Intern</i> | Jan – July 2025</p>
            <ul>
              <li>Gained hands-on experience in Java, Python, SQL, Spring Boot, React.js, and MySQL, applying them to develop and deploy full-stack projects.</li>
              <li>Built multiple projects during the internship, applying the technologies and tools learned.</li>
              <li>Worked with Eclipse, Git, Postman, and Docker for version control, API testing, and containerization.</li>
            </ul>
          </div>

        </section>

        {/* Projects Section */}<section className="projects-section">
    <h1>Projects</h1>
    <div className="project-grid">
      {/* Project 1 */}
      <div className="project-card">
        <div className="project-image"></div>
        <div className="project-content">
          <h3 className="project-title">E-Commerce Platform</h3>
          <p className="project-description">
            A full-featured e-commerce solution with payment integration, inventory management, and customer analytics.
          </p>
          <div className="project-tech">
            <span className="tech-pill">React</span>
            <span className="tech-pill">Node.js</span>
            <span className="tech-pill">MongoDB</span>
          </div>
          <div className="project-links">
            <a className="project-link link-primary" >Live Demo</a>
            <a href="#" className="project-link link-secondary">View Code</a>
          </div>
        </div>
      </div>
      {/* Project 1 */}
      <div className="project-card">
  <div className="project-image todo-app-image"></div> {/* You can style this with background image or add an img tag */}
  <div className="project-content">
    <h3 className="project-title">Todo App</h3>
    <p className="project-description">
      A simple and efficient Todo app built with React and Vite, featuring task management with a clean UI.
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

      {/* Project 2 */}
      <div className="project-card">
      <div className="project-image"></div>
      <div className="project-content">
        <h3 className="project-title">React Tutorial Project</h3>
        <p className="project-description">
          A hands-on tutorial project built with React to understand components, routing, and state management.
        </p>
        <div className="project-tech">
          <span className="tech-pill">React</span>
          <span className="tech-pill">HTML</span>
          <span className="tech-pill">CSS</span>
        </div>
        <div className="project-links">
          <a href="https://bhuvanesh-react-tutorial-app.netlify.app/" target="_blank" className="project-link link-primary">Live Demo</a>
          <a href="https://github.com/bhuvanesh2207/React-Tutorial-Project" target="_blank" className="project-link link-secondary">View Code</a>
        </div>
      </div>
    </div>

      {/* Add more projects as needed */}
    </div>
  </section>

      </main>
    );
  }
