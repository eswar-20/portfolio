import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      abbreviation: "RPA",
      title: "Automation Anywhere Professional",
      provider: "Automation Anywhere University",
      description: "Professional certification in Robotic Process Automation (RPA) and intelligent automation solutions.",
      skills: ["RPA", "Process Automation", "Digital Workforce", "Bot Development"],
      date: "December 2025",
      level: "Professional",
      icon: "medal"
    },
    {
      abbreviation: "NET",
      title: "Multicloud Network Associate",
      provider: "Multicloud Network Certification Board",
      description: "Network certification covering multicloud architecture, networking protocols, and cloud infrastructure management.",
      skills: ["Cloud Networking", "Multicloud Architecture", "Network Security", "Infrastructure Management"],
      date: "August 2025",
      level: "Associate",
      icon: "certificate"
    },
    {
      abbreviation: "AI",
      title: "AI & ML Virtual Internship",
      provider: "AICTE-EduSkills (Google for Developers)",
      description: "Comprehensive AI and Machine Learning training program with hands-on experience in building predictive models and implementing AI solutions.",
      skills: ["Machine Learning", "Data Preprocessing", "Model Training", "AI Ethics", "Python"],
      date: "October - December 2025",
      level: "Internship",
      icon: "award"
    },
    {
      abbreviation: "SEC",
      title: "Cyber Security Virtual Internship",
      provider: "ShadowFox Security Academy",
      description: "Intensive cybersecurity training covering threat analysis, vulnerability assessment, and system security best practices.",
      skills: ["Cybersecurity", "Threat Analysis", "Network Security", "Vulnerability Assessment", "Security Tools"],
      date: "September 2025",
      level: "Internship",
      icon: "shield"
    }
  ];

  return (
    <section className="certifications-section">
      {/* Background Elements */}
      <div className="certifications-background">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>

      <div className="certifications-container">
        <div className="section-header">
          <h2>Certifications</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Professional certifications and training programs that enhance my technical skills and industry knowledge.</p>
        </div>

        {/* Premium Certificate Showcase Grid */}
        <div className="certificate-showcase">
          {certifications.map((cert, index) => (
            <div key={index} className="certificate-card">
              {/* Certificate Icon Badge */}
              <div className="certificate-icon">
                <div className="icon-badge">
                  {cert.icon === 'medal' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  )}
                  {cert.icon === 'certificate' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5l-2 2v1h8v-1l-2-2h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4zm0 1h16v12h-6.5l1.5 1.5v.5h-6v-.5L10.5 16H4V4zm8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 5h6v1a3 3 0 0 1-6 0v-1z"/>
                    </svg>
                  )}
                  {cert.icon === 'award' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  )}
                  {cert.icon === 'shield' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                  )}
                </div>
                <div className="abbreviation-badge">{cert.abbreviation}</div>
              </div>

              {/* Certificate Content */}
              <div className="certificate-content">
                <div className="content-header">
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-level">
                    <span className="level-badge">{cert.level}</span>
                  </div>
                </div>

                <div className="cert-provider">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>{cert.provider}</span>
                </div>

                <div className="cert-date">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                  <span>{cert.date}</span>
                </div>

                {/* Expandable Details */}
                <div className="cert-details">
                  <p className="cert-description">{cert.description}</p>
                  <div className="cert-skills">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="hover-overlay">
                <div className="overlay-content">
                  <div className="view-details">
                    <span>View Details</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .certifications-section {
          min-height: calc(100vh - 80px);
          background: #F8FAFC;
          position: relative;
          overflow: hidden;
          padding: 80px 40px;
        }

        .certifications-background {
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

        .certifications-container {
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

        .section-subtitle {
          font-size: 1.1rem;
          color: #6B4F3A;
          margin-top: 16px;
          font-weight: 500;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .certificate-showcase {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          grid-auto-rows: auto;
        }

        .certificate-card {
          background: #FFFFFF;
          border: 1px solid #EADBC8;
          border-radius: 24px;
          padding: 32px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .certificate-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #A67B5B;
          opacity: 0.8;
        }

        .certificate-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 60px rgba(111, 78, 55, 0.15);
          border-color: #EADBC8;
        }

        .certificate-icon {
          position: absolute;
          top: -15px;
          right: 24px;
          z-index: 3;
        }

        .icon-badge {
          width: 48px;
          height: 48px;
          background: #6F4E37;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 8px 25px rgba(111, 78, 55, 0.3);
          position: relative;
        }

        .abbreviation-badge {
          position: absolute;
          bottom: -8px;
          right: -8px;
          background: #F3E8DC;
          color: #6F4E37;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .certificate-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .content-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cert-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #2C1810;
          margin: 0;
          line-height: 1.3;
        }

        .cert-level {
          align-self: flex-start;
        }

        .level-badge {
          padding: 4px 12px;
          background: #F3E8DC;
          color: #6F4E37;
          border: 1px solid #EADBC8;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .cert-provider,
        .cert-date {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6B4F3A;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .cert-provider svg,
        .cert-date svg {
          color: #6F4E37;
          flex-shrink: 0;
        }

        .cert-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.4s ease;
          opacity: 0;
        }

        .certificate-card:hover .cert-details {
          max-height: 300px;
          opacity: 1;
        }

        .cert-description {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #6B4F3A;
          margin: 0;
        }

        .cert-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-tag {
          padding: 4px 10px;
          background: #F8EFE6;
          border: 1px solid #EADBC8;
          border-radius: 16px;
          font-size: 0.75rem;
          font-weight: 500;
          color: #6F4E37;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: #F3E8DC;
          transform: translateY(-2px);
        }

        .hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(111, 78, 55, 0.05), rgba(166, 123, 91, 0.02));
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .certificate-card:hover .hover-overlay {
          opacity: 1;
        }

        .overlay-content {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .view-details {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(15, 118, 110, 0.2);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #0F766E;
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }

        .certificate-card:hover .view-details {
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          .certifications-section {
            padding: 60px 24px;
          }

          .certificate-showcase {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
          }

          .certificate-card {
            padding: 28px;
          }

          .cert-title {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 768px) {
          .certifications-section {
            padding: 40px 16px;
          }

          .section-header {
            margin-bottom: 60px;
          }

          .certificate-showcase {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .certificate-card {
            padding: 24px;
          }

          .certificate-icon {
            top: -12px;
            right: 20px;
          }

          .icon-badge {
            width: 40px;
            height: 40px;
          }

          .abbreviation-badge {
            font-size: 0.6rem;
            padding: 3px 6px;
          }

          .cert-title {
            font-size: 1.2rem;
          }

          .cert-provider,
          .cert-date {
            font-size: 0.85rem;
          }

          .cert-description {
            font-size: 0.85rem;
          }

          .skill-tag {
            padding: 3px 8px;
            font-size: 0.7rem;
          }
        }

        @media (max-width: 480px) {
          .certifications-section {
            padding: 32px 12px;
          }

          .certificate-card {
            padding: 20px;
          }

          .certificate-icon {
            top: -10px;
            right: 16px;
          }

          .icon-badge {
            width: 36px;
            height: 36px;
          }

          .icon-badge svg {
            width: 18px;
            height: 18px;
          }

          .cert-title {
            font-size: 1.1rem;
          }

          .cert-provider,
          .cert-date {
            font-size: 0.8rem;
          }

          .cert-description {
            font-size: 0.8rem;
          }

          .skill-tag {
            padding: 2px 6px;
            font-size: 0.65rem;
          }

          .view-details {
            font-size: 0.75rem;
            padding: 6px 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
