import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      title: "Blood Bank Management System",
      description: "Developed a full-featured Blood Bank Management System with donor registration, blood inventory tracking, user authentication, and request management using Spring Boot, React, and MySQL.",
      initial: "B",
      gradient: "linear-gradient(135deg, #14B8A6, #0F766E)",
      technologies: ["Spring Boot", "React", "MySQL", "RESTful APIs", "HTML", "CSS"],
      links: {
        frontend: "https://github.com/eswar-20/blood-frontend.git",
        backend: "https://github.com/eswar-20/blood-backend.git"
      },
      features: ["Donor Registration", "Blood Inventory Tracking", "Request Management", "User Authentication"],
      category: "Full Stack Application"
    }
  ];

  return (
    <section className="projects-section">
      {/* Background Elements */}
      <div className="projects-background">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>

      <div className="projects-container">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="title-underline"></div>
        </div>

        {/* Alternating Project Showcase */}
        <div className="projects-showcase">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className={`project-showcase-item ${index % 2 === 0 ? 'left-aligned' : 'right-aligned'}`}
            >
              {/* Project Preview */}
              <div className="project-preview">
                <div className="preview-container">
                  <div className="project-banner" style={{ background: project.gradient }}>
                    <div className="project-initial">{project.initial}</div>
                    <div className="project-overlay">
                      <div className="project-category">{project.category}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div className="content-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-features">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Floating Tech Stack Badges */}
                <div className="tech-stack">
                  <div className="tech-label">Technologies:</div>
                  <div className="tech-badges">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Premium CTA Buttons */}
                <div className="project-actions">
                  <a 
                    href={project.links.frontend}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Frontend
                  </a>
                  <a 
                    href={project.links.backend}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Backend
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          min-height: calc(100vh - 80px);
          background: #F8FAFC;
          position: relative;
          overflow: hidden;
          padding: 80px 40px;
        }

        .projects-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .bg-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.08;
        }

        .bg-shape-1 {
          top: -15%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #14B8A6, #0F766E);
        }

        .bg-shape-2 {
          top: 40%;
          right: -15%;
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #0F766E, #14B8A6);
        }

        .bg-shape-3 {
          bottom: -10%;
          left: 30%;
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #14B8A6, #0F766E);
        }

        .projects-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-header h2 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          background: linear-gradient(135deg, #6F4E37, #A67B5B, #2C1810);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .title-underline {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #6F4E37, #A67B5B);
          margin: 0 auto;
          border-radius: 2px;
        }

        .projects-showcase {
          display: flex;
          flex-direction: column;
          gap: 120px;
        }

        .project-showcase-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          min-height: 400px;
        }

        .project-showcase-item.left-aligned {
          direction: ltr;
        }

        .project-showcase-item.right-aligned {
          direction: rtl;
        }

        .project-showcase-item.right-aligned > * {
          direction: ltr;
        }

        .project-preview {
          position: relative;
        }

        .preview-container {
          position: relative;
          height: 400px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(111, 78, 55, 0.15);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .preview-container:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 80px rgba(111, 78, 55, 0.25);
        }

        .project-banner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .project-initial {
          font-size: 6rem;
          font-weight: 800;
          color: white;
          position: relative;
          z-index: 2;
          text-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(111, 78, 55, 0.1), rgba(166, 123, 91, 0.1));
          z-index: 1;
        }

        .project-category {
          position: absolute;
          top: 24px;
          right: 24px;
          background: #F3E8DC;
          backdrop-filter: blur(20px);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #6F4E37;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border: 1px solid #EADBC8;
        }

        .project-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .content-header {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .project-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #2C1810;
          line-height: 1.2;
          margin: 0;
        }

        .project-features {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: #F3E8DC;
          border: 1px solid #EADBC8;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #6F4E37;
        }

        .feature-item svg {
          color: #6F4E37;
        }

        .project-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #6B4F3A;
          margin: 0;
        }

        .tech-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .tech-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #6B4F3A;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .tech-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .tech-badge {
          padding: 8px 16px;
          background: #F8EFE6;
          border: 1px solid #EADBC8;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #6F4E37;
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          background: #F3E8DC;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(111, 78, 55, 0.1);
        }

        .project-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 24px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: none;
          cursor: pointer;
        }

        .btn-primary {
          background: #6F4E37;
          color: white;
          box-shadow: 0 4px 20px rgba(111, 78, 55, 0.25);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(111, 78, 55, 0.35);
          background: #5A402C;
        }

        .btn-secondary {
          background: transparent;
          color: #6F4E37;
          border: 2px solid #6F4E37;
        }

        .btn-secondary:hover {
          background: #6F4E37;
          color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .projects-section {
            padding: 60px 24px;
          }

          .projects-showcase {
            gap: 80px;
          }

          .project-showcase-item {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .project-showcase-item.right-aligned {
            direction: ltr;
          }

          .preview-container {
            height: 350px;
          }

          .project-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 40px 16px;
          }

          .section-header {
            margin-bottom: 60px;
          }

          .projects-showcase {
            gap: 60px;
          }

          .project-showcase-item {
            gap: 32px;
          }

          .preview-container {
            height: 300px;
          }

          .project-title {
            font-size: 1.75rem;
          }

          .project-features {
            gap: 12px;
          }

          .feature-item {
            padding: 6px 12px;
            font-size: 0.85rem;
          }

          .project-description {
            font-size: 1rem;
          }

          .tech-badges {
            gap: 8px;
          }

          .tech-badge {
            padding: 6px 12px;
            font-size: 0.8rem;
          }

          .project-actions {
            gap: 12px;
          }

          .btn {
            padding: 12px 20px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .projects-section {
            padding: 32px 12px;
          }

          .preview-container {
            height: 250px;
          }

          .project-title {
            font-size: 1.5rem;
          }

          .project-actions {
            flex-direction: column;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
