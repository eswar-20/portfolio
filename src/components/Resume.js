import React, { useState } from 'react';

const Resume = () => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1);
    
    const link = document.createElement('a');
    link.href = '/resume.html';
    link.download = 'M_Eswar_Manoj_Resume.html';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resumeData = {
    personalInfo: {
      name: "M Eswar Manoj",
      title: "Computer Science Student / Full Stack Developer",
      email: "eswarmanoj@example.com",
      phone: "+91 98765 43210",
      location: "Andhra Pradesh, India",
      linkedin: "linkedin.com/in/eswarmanoj",
      github: "github.com/eswarmanoj"
    },
    objective: "To secure a challenging position as a Full Stack Developer where I can leverage my technical expertise in web development, problem-solving abilities, and passion for creating innovative solutions.",
    education: [
      {
        degree: "Bachelor of Technology in Computer Science",
        school: "KL University",
        period: "2020 - 2024",
        location: "Andhra Pradesh"
      },
      {
        degree: "Intermediate Education",
        school: "Sri Viswa Junior College", 
        period: "2018 - 2020",
        location: "Andhra Pradesh"
      },
      {
        degree: "Secondary School Education",
        school: "Bhashyam School",
        period: "2018",
        location: "Andhra Pradesh"
      }
    ],
    skills: {
      "Programming": ["Python", "C", "C++"],
      "Web Technologies": ["HTML", "CSS", "React"]
    },
    projects: [
      {
        title: "Blood Bank Management System",
        description: "A comprehensive web-based platform for managing blood bank operations including donor registration, blood inventory tracking, and hospital requests.",
        technologies: ["React", "Node.js", "MongoDB", "Express.js", "HTML", "CSS"]
      }
    ],
    certifications: [
      {
        title: "Automation Anywhere Certified Advanced RPA Professional",
        issuer: "Automation Anywhere",
        date: "2023"
      },
      {
        title: "Multicloud Network Associate",
        issuer: "Cisco",
        date: "2023"
      }
    ],
    internships: [
      {
        title: "AI and ML Virtual Internship",
        company: "SmartInternz",
        period: "2023",
        description: "Completed comprehensive virtual internship program focused on Artificial Intelligence and Machine Learning technologies and applications."
      },
      {
        title: "Cyber Security Virtual Internship",
        company: "SmartInternz",
        period: "2023",
        description: "Completed virtual internship program covering essential cybersecurity concepts, tools, and best practices."
      }
    ]
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center mb-xl">
          <h2>Resume</h2>
          <p className="section-subtitle">Professional resume and download options</p>
        </div>

        <div className="resume-content">
          {/* Action Buttons */}
          <div className="resume-actions">
            <button 
              className={`action-btn ${isPreviewMode ? 'active' : ''}`}
              onClick={() => setIsPreviewMode(!isPreviewMode)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              {isPreviewMode ? 'Hide Preview' : 'Show Preview'}
            </button>
            
            <button className="action-btn primary" onClick={handleDownload}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Download Resume
            </button>
            
            {downloadCount > 0 && (
              <div className="download-count">
                Downloaded {downloadCount} time{downloadCount > 1 ? 's' : ''}
              </div>
            )}
          </div>

          {/* Resume Preview */}
          {isPreviewMode && (
            <div className="resume-preview">
              <div className="resume-document">
                {/* Header */}
                <header className="resume-header">
                  <div className="header-content">
                    <div className="personal-info">
                      <h1>{resumeData.personalInfo.name}</h1>
                      <h2>{resumeData.personalInfo.title}</h2>
                      <div className="contact-info">
                        <div className="contact-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                          {resumeData.personalInfo.email}
                        </div>
                        <div className="contact-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                          </svg>
                          {resumeData.personalInfo.phone}
                        </div>
                        <div className="contact-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          {resumeData.personalInfo.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </header>

                {/* Main Content */}
                <main className="resume-main">
                  {/* Objective */}
                  <section className="resume-section">
                    <h3>Career Objective</h3>
                    <p>{resumeData.objective}</p>
                  </section>

                  {/* Education */}
                  <section className="resume-section">
                    <h3>Education</h3>
                    {resumeData.education.map((edu, index) => (
                      <div key={index} className="education-item">
                        <div className="education-header">
                          <h4>{edu.degree}</h4>
                          <span className="period">{edu.period}</span>
                        </div>
                        <div className="education-details">
                          <p className="school">{edu.school} - {edu.location}</p>
                        </div>
                      </div>
                    ))}
                  </section>

                  {/* Skills */}
                  <section className="resume-section">
                    <h3>Skills</h3>
                    {Object.entries(resumeData.skills).map(([category, skills]) => (
                      <div key={category} className="skill-category">
                        <h4>{category}</h4>
                        <div className="skills-list">
                          {skills.join(', ')}
                        </div>
                      </div>
                    ))}
                  </section>

                  {/* Projects */}
                  <section className="resume-section">
                    <h3>Projects</h3>
                    {resumeData.projects.map((project, index) => (
                      <div key={index} className="project-item">
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        <div className="technologies">
                          <strong>Technologies:</strong> {project.technologies.join(', ')}
                        </div>
                      </div>
                    ))}
                  </section>

                  {/* Certifications */}
                  <section className="resume-section">
                    <h3>Certifications</h3>
                    {resumeData.certifications.map((cert, index) => (
                      <div key={index} className="certification-item">
                        <h4>{cert.title}</h4>
                        <p>{cert.issuer} - {cert.date}</p>
                      </div>
                    ))}
                  </section>

                  {/* Internships */}
                  <section className="resume-section">
                    <h3>Internships</h3>
                    {resumeData.internships.map((internship, index) => (
                      <div key={index} className="internship-item">
                        <h4>{internship.title}</h4>
                        <p>{internship.company} - {internship.period}</p>
                        <p>{internship.description}</p>
                      </div>
                    ))}
                  </section>
                </main>
              </div>
            </div>
          )}

          {/* Download Info */}
          <div className="resume-info">
            <div className="info-card">
              <h3>Resume Information</h3>
              <p>
                Download my professional resume in PDF format to get a comprehensive overview 
                of my education, skills, projects, certifications, and internship experience.
              </p>
              <div className="resume-stats">
                <div className="stat-item">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Pages</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">PDF</span>
                  <span className="stat-label">Format</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{downloadCount}</span>
                  <span className="stat-label">Downloads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-lg);
          overflow-y: auto;
        }

        .section-header {
          margin-bottom: var(--spacing-xl);
        }

        .section-header h2 {
          color: var(--primary-navy);
          font-size: 2.5rem;
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--spacing-sm);
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .resume-content {
          max-width: 1000px;
          margin: 0 auto;
          width: 100%;
        }

        .resume-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
          flex-wrap: wrap;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-md) var(--spacing-lg);
          border: 1px solid var(--primary-navy);
          background: white;
          color: var(--primary-navy);
          border-radius: var(--radius-md);
          font-weight: var(--font-weight-medium);
          cursor: pointer;
          transition: all var(--transition-smooth);
        }

        .action-btn:hover {
          background: var(--primary-navy);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(6, 43, 104, 0.3);
        }

        .action-btn.active {
          background: var(--primary-navy);
          color: white;
        }

        .action-btn.primary {
          background: var(--accent-emerald);
          border-color: var(--accent-emerald);
          color: white;
        }

        .action-btn.primary:hover {
          background: var(--primary-navy);
          border-color: var(--primary-navy);
        }

        .download-count {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-style: italic;
        }

        .resume-preview {
          margin-bottom: var(--spacing-xl);
        }

        .resume-document {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: var(--radius-lg);
          box-shadow: var(--card-shadow);
          overflow: hidden;
          max-height: 800px;
          overflow-y: auto;
        }

        .resume-header {
          background: var(--primary-navy);
          color: white;
          padding: var(--spacing-xl);
        }

        .header-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .personal-info h1 {
          font-size: 2.5rem;
          font-weight: var(--font-weight-bold);
          margin-bottom: var(--spacing-xs);
        }

        .personal-info h2 {
          font-size: 1.3rem;
          font-weight: var(--font-weight-medium);
          margin-bottom: var(--spacing-lg);
          opacity: 0.9;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-sm);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          font-size: 0.9rem;
        }

        .contact-item svg {
          opacity: 0.8;
        }

        .resume-main {
          padding: var(--spacing-xl);
          max-width: 800px;
          margin: 0 auto;
        }

        .resume-section {
          margin-bottom: var(--spacing-xl);
        }

        .resume-section h3 {
          color: var(--primary-navy);
          font-size: 1.4rem;
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--spacing-md);
          padding-bottom: var(--spacing-xs);
          border-bottom: 2px solid var(--primary-navy);
        }

        .education-item,
        .project-item,
        .certification-item,
        .internship-item {
          margin-bottom: var(--spacing-md);
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-xs);
        }

        .education-header h4 {
          color: var(--primary-navy);
          font-weight: var(--font-weight-semibold);
          font-size: 1.1rem;
        }

        .period {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: var(--font-weight-medium);
        }

        .school {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-xs);
        }

        .skill-category {
          margin-bottom: var(--spacing-sm);
        }

        .skill-category h4 {
          color: var(--primary-navy);
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--spacing-xs);
        }

        .skills-list {
          color: var(--text-secondary);
        }

        .technologies {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .resume-info {
          max-width: 600px;
          margin: 0 auto;
        }

        .info-card {
          background: var(--card-bg);
          backdrop-filter: blur(10px);
          border: var(--card-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--card-shadow);
          padding: var(--spacing-xl);
          text-align: center;
          transition: all var(--transition-smooth);
        }

        .info-card:hover {
          box-shadow: var(--card-shadow-hover);
          transform: translateY(-4px);
        }

        .info-card h3 {
          color: var(--primary-navy);
          font-size: 1.5rem;
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--spacing-md);
        }

        .info-card p {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: var(--spacing-lg);
        }

        .resume-stats {
          display: flex;
          justify-content: space-around;
          gap: var(--spacing-lg);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: var(--font-weight-bold);
          color: var(--primary-navy);
          margin-bottom: var(--spacing-xs);
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: var(--font-weight-medium);
        }

        @media (max-width: 768px) {
          .section {
            padding: var(--spacing-md);
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1.1rem;
          }

          .resume-actions {
            flex-direction: column;
            gap: var(--spacing-md);
          }

          .action-btn {
            width: 100%;
            justify-content: center;
          }

          .resume-document {
            max-height: 600px;
          }

          .personal-info h1 {
            font-size: 2rem;
          }

          .personal-info h2 {
            font-size: 1.1rem;
          }

          .contact-info {
            grid-template-columns: 1fr;
          }

          .resume-main {
            padding: var(--spacing-lg);
          }

          .resume-stats {
            flex-direction: column;
            gap: var(--spacing-md);
          }

          .stat-item {
            flex-direction: row;
            gap: var(--spacing-sm);
          }
        }

        @media (max-width: 480px) {
          .section {
            padding: var(--spacing-sm);
          }

          .section-header h2 {
            font-size: 1.8rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .resume-document {
            max-height: 500px;
          }

          .personal-info h1 {
            font-size: 1.8rem;
          }

          .personal-info h2 {
            font-size: 1rem;
          }

          .resume-main {
            padding: var(--spacing-md);
          .item-card h4 {
            font-size: 1.1rem;
          }

          .info-card {
            padding: var(--spacing-md);
          }
        }

        @media print {
          .resume-actions,
          .download-info {
            display: none;
          }

          .resume-card {
            box-shadow: none;
            border: 1px solid #ddd;
            background: white;
          }

          .section-header {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Resume;
