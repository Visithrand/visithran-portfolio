import React, { useEffect } from "react";
import { motion, useScroll, useAnimation } from "framer-motion";
import { FaReact, FaJava, FaCode, FaGithub, FaLinkedin, FaFileAlt, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiPython, SiMongodb } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import "./App.css";

const Portfolio = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-up');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <header className="header glass-effect">
        <motion.h1 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          VISITHRAN
        </motion.h1>
        <nav>
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </motion.ul>
        </nav>
      </header>

      <section className="hero-section" id="about">
        <div className="hero-content glass-effect">
          <h1 className="hero-title">Hello, I'm Visithran<br/>Welcome to My Page</h1>
          <p className="hero-description">Passionate about creating innovative solutions through technology</p>
          <div className="hero-roles">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Typewriter 
                words={["Software Engineer", "Full-Stack Developer", "AI Enthusiast"]} 
                loop 
                cursor 
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.h2>
          </div>
          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <a href="https://github.com/Visithrand" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/visithran-d-37a877291" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
      </section>

      <div className="section-wrapper">
        <section className="about glass-effect fade-up" id="about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a passionate Software Engineer with expertise in full-stack development and a keen interest in AI technologies. 
                My journey in software development has led me to work on various exciting projects, from React-based web applications 
                to Java Spring Boot backends.
              </p>
              <p>
                My repositories on <a href="https://github.com/Visithrand" target="_blank" rel="noopener noreferrer">GitHub</a> showcase 
                my work in areas like:
              </p>
              <ul className="project-highlights">
                <li>React Online Scheduler - A comprehensive scheduling application</li>
                <li>Public Speaking Enhancement Mobile App</li>
                <li>Data Structures and Algorithms Implementation</li>
                <li>REST API Development</li>
              </ul>
              <p>
                I believe in writing clean, maintainable code and creating user-friendly applications that solve real-world problems. 
                My experience includes working with modern technologies and frameworks, always staying updated with the latest industry trends.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </section>

        <section className="skills glass-effect fade-up" id="skills">
          <h2>Technical Expertise</h2>
          <div className="skills-grid">
            {/* Frontend Skills */}
            <motion.div 
              className="skill-category"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
            >
              <h3>Frontend Development</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <FaReact className="icon react" />
                  <span>React.js</span>
                </div>
                <div className="skill-item">
                  <SiTailwindcss className="icon tailwind" />
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div 
              className="skill-category"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
            >
              <h3>Backend Development</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <FaJava className="icon java" />
                  <span>Java</span>
                </div>
                <div className="skill-item">
                  <SiSpringboot className="icon springboot" />
                  <span>Spring Boot</span>
                </div>
              </div>
            </motion.div>

            {/* Database Skills */}
            <motion.div 
              className="skill-category"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
            >
              <h3>Database & Tools</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <SiMongodb className="icon mongodb" />
                  <span>MongoDB</span>
                </div>
                <div className="skill-item">
                  <SiPython className="icon python" />
                  <span>Python</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="projects glass-effect fade-up" id="projects">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {/* Project Cards */}
            <motion.div 
              className="project-card"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="project-image time-capsules"></div>
              <h3>Time Capsules</h3>
              <p>A digital time capsule application for preserving memories</p>
              <div className="project-links">
                <a href="#" className="button">View Demo</a>
                <a href="#" className="button">GitHub</a>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="project-image event-management"></div>
              <h3>Event Management</h3>
              <p>Comprehensive event planning and management platform</p>
              <div className="project-links">
                <a href="#" className="button">View Demo</a>
                <a href="#" className="button">GitHub</a>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="project-image accident-detection"></div>
              <h3>Accident Detection</h3>
              <p>AI-powered system for real-time accident detection</p>
              <div className="project-links">
                <a href="#" className="button">View Demo</a>
                <a href="#" className="button">GitHub</a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="resume glass-effect fade-up" id="resume">
          <h2>Resume</h2>
          <div className="resume-content">
            <motion.div 
              className="resume-download"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
            >
              <FaFileAlt className="resume-icon" />
              <a href="/path-to-your-resume.pdf" download className="download-button">
                Download Resume
              </a>
            </motion.div>
            <div className="resume-preview">
              <div className="resume-header">
                <h1>VISITHRAN D</h1>
                <div className="resume-contact">
                  <p>8220092495</p>
                  <p>visithrand@gmail.com</p>
                  <p><a href="https://www.linkedin.com/in/visithran-d-37a877291" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                  <p><a href="https://github.com/Visithrand" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </div>
              </div>

              <div className="education-section">
                <h3>Education</h3>
                <motion.div 
                  className="education-item"
                  whileHover={{ x: 5 }}
                >
                  <h4>Sri Krishna College of Engineering and Technology</h4>
                  <p className="location">Coimbatore, India</p>
                  <p className="degree">Bachelor of Engineering in Computer Science and Engineering</p>
                  <p className="details">CGPA: 8.1 | Graduation Year: 2027</p>
                </motion.div>

                <motion.div 
                  className="education-item"
                  whileHover={{ x: 5 }}
                >
                  <h4>INFANT JESUS MATRIC HIGHER SECONDARY SCHOOL</h4>
                  <p className="location">Sivagangai, India</p>
                  <p className="details">Class XII | Percentage: 84.6% | Year of Passing: 2023</p>
                </motion.div>
              </div>

              <div className="projects-section">
                <h3>Projects</h3>
                <motion.div className="project-item" whileHover={{ x: 5 }}>
                  <h4>Currency Converter</h4>
                  <p className="tech-stack">HTML, CSS, JavaScript, API</p>
                  <ul>
                    <li>Built a real-time currency converter that fetches live exchange rates via an API.</li>
                    <li>Designed an interactive UI with error handling and support for 100+ currencies.</li>
                    <li>Enhanced performance using fetch API, async/await, and event handling.</li>
                  </ul>
                </motion.div>

                <motion.div className="project-item" whileHover={{ x: 5 }}>
                  <h4>Accident-detection and rescue-management</h4>
                  <p className="tech-stack">REACT.JS, PYTHON AI</p>
                  <ul>
                    <li>Real-Time Accident Detection: Implemented a system using React.js and backend integration to detect accidents</li>
                    <li>Automated Rescue Coordination: Developed a responsive dashboard with interactive maps to track accidents, notify emergency services</li>
                  </ul>
                </motion.div>
              </div>

              <div className="achievements-section">
                <h3>Achievements</h3>
                <motion.div className="achievements-list" whileHover={{ x: 5 }}>
                  <ul>
                    <li>Runner on sprint event on top 200 teams: Developed an AI/ML model to predict peak energy loads for Delhi, winning among 500+ competing teams and receiving national recognition.</li>
                    <li>Finalist in Uyir Road Safety Hackathon 2025: Ranked among the top 144 out of 3,500+ teams for developing an AI-powered accident detection system using live CCTV footage.</li>
                    <li>Winner of 48-Hour Hackathena Hackathon: Built an AI-driven Feeder Optimization System to enhance load balancing and prevent outages.</li>
                    <li>First Place in HackHavoc Coding Contest: Secured 1st place among 200+ participants in a department-level competitive programming contest.</li>
                  </ul>
                </motion.div>
              </div>

              <div className="technical-skills-section">
                <h3>Technical Skills</h3>
                <motion.div className="skills-list" whileHover={{ x: 5 }}>
                  <div className="skill-group">
                    <h4>Programming Languages:</h4>
                    <p>C++, Java, Python (Basics)</p>
                  </div>
                  <div className="skill-group">
                    <h4>Frontend Development:</h4>
                    <p>HTML, CSS, JavaScript, React (MERN Stack)</p>
                  </div>
                  <div className="skill-group">
                    <h4>Backend Development:</h4>
                    <p>Node.js, Express.js, Spring Boot</p>
                  </div>
                  <div className="skill-group">
                    <h4>Database Management:</h4>
                    <p>SQL, MongoDB</p>
                  </div>
                  <div className="skill-group">
                    <h4>Version Control:</h4>
                    <p>Git</p>
                  </div>
                </motion.div>
              </div>

              <div className="core-subjects-section">
                <h3>Core Subjects</h3>
                <motion.div className="subjects-list" whileHover={{ x: 5 }}>
                  <p>Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Programming (OOP)</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="certifications glass-effect fade-up" id="certifications">
          <h2 className="section-title">Certifications & Achievements</h2>
          <div className="certifications-grid">
            <div className="certification-card">
              <div className="certification-badge">🏆</div>
              <h4>Women Safety Innovation Award</h4>
              <p>First place in National Hackathon for developing an IoT-based women safety device with real-time tracking and emergency response system</p>
              <span className="certification-date">2023</span>
            </div>

            <div className="certification-card">
              <div className="certification-badge">🌟</div>
              <h4>Smart City Safety Solutions</h4>
              <p>Winner of Smart India Hackathon for implementing ML-powered surveillance system for women safety in public spaces</p>
              <span className="certification-date">2023</span>
            </div>

            <div className="certification-card">
              <div className="certification-badge">🤖</div>
              <h4>Advanced Machine Learning Specialization</h4>
              <p>Completed comprehensive ML certification covering computer vision, NLP, and deep learning from Stanford Online</p>
              <span className="certification-date">2023</span>
            </div>

            <div className="certification-card">
              <div className="certification-badge">⚡</div>
              <h4>IoT Systems Architecture</h4>
              <p>Professional certification in IoT architecture and implementation from IBM, focusing on sensor networks and real-time data processing</p>
              <span className="certification-date">2023</span>
            </div>

            <div className="certification-card">
              <div className="certification-badge">🛡️</div>
              <h4>SafeHer Hackathon Champion</h4>
              <p>Developed an AI-powered personal safety application with gesture recognition and automated emergency protocols</p>
              <span className="certification-date">2023</span>
            </div>

            <div className="certification-card">
              <div className="certification-badge">📱</div>
              <h4>Women Tech Safety Innovation</h4>
              <p>Recognition for developing a wearable safety device with integrated ML algorithms for threat detection and prevention</p>
              <span className="certification-date">2023</span>
            </div>
          </div>
        </section>

        <section className="contact glass-effect fade-up" id="contact">
          <h2>Get In Touch</h2>
          <div className="contact-info">
            <motion.div 
              className="contact-details"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-text">
                  <h3>Email</h3>
                  <a href="mailto:727723eucs279@skcet.ac.in">727723eucs279@skcet.ac.in</a>
                  <a href="mailto:visithrand@gmail.com">visithrand@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div className="contact-text">
                  <h3>Phone</h3>
                  <a href="tel:+918220092495">+91 82200 92495</a>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-text">
                  <h3>Location</h3>
                  <p>Coimbatore, Tamil Nadu</p>
                </div>
              </div>
              <div className="social-links-contact">
                <a href="https://github.com/Visithrand" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="contact-social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/visithran-d-37a877291" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="contact-social-icon" />
                </a>
              </div>
            </motion.div>
            <motion.form 
              className="contact-form"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                window.location.href = `mailto:visithrand@gmail.com?subject=Portfolio Contact: ${formData.get('name')}&body=Message from: ${formData.get('name')}%0D%0AEmail: ${formData.get('email')}%0D%0A%0D%0A${formData.get('message')}`;
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Enter your name" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Enter your email" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Write your message here..." 
                  rows="5" 
                  required
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="submit-button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Portfolio;