import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: "KL University, Vijayawada",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      cgpa: "8.6/10",
      duration: "2023 - 2027",
      type: "University",
      icon: "graduation",
      highlights: ["Computer Science", "Engineering", "Research"]
    },
    {
      institution: "Sri Viswa Junior College",
      degree: "Board of Intermediate Education, Andhra Pradesh",
      cgpa: "8.8/10",
      duration: "2021 - 2023",
      type: "Intermediate",
      icon: "school",
      highlights: ["Mathematics", "Physics", "Chemistry"]
    },
    {
      institution: "Bhashyam School",
      degree: "Board of Secondary Education, Andhra Pradesh",
      cgpa: "10.0/10",
      duration: "2020 - 2021",
      type: "High School",
      icon: "book",
      highlights: ["Academic Excellence", "Top Performer"]
    }
  ];

  return (
    <section className="education-section">
      {/* Background Elements */}
      <div className="education-background">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>

      <div className="education-container">
        <div className="section-header">
          <h2>Education</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Academic background and achievements</p>
        </div>

        {/* Staggered Academic Showcase */}
        <div className="academic-showcase">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className={`academic-card ${index % 2 === 0 ? 'card-left' : 'card-right'} ${index === 0 ? 'featured' : ''}`}
            >
              {/* Academic Icon Badge */}
              <div className="academic-icon">
                <div className="icon-container">
                  {edu.icon === 'graduation' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                  )}
                  {edu.icon === 'school' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                    </svg>
                  )}
                  {edu.icon === 'book' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                    </svg>
                  )}
                </div>
                <div className="type-badge">{edu.type}</div>
              </div>

              {/* Academic Content */}
              <div className="academic-content">
                <div className="content-header">
                  <h3 className="institution-name">{edu.institution}</h3>
                  <div className="duration-info">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <p className="degree-info">{edu.degree}</p>

                {/* Academic Highlights */}
                <div className="academic-highlights">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <span key={highlightIndex} className="highlight-tag">{highlight}</span>
                  ))}
                </div>

                {/* CGPA Stat Chip */}
                <div className="cgpa-stat">
                  <div className="stat-label">Performance</div>
                  <div className="stat-chip">
                    <span className="cgpa-value">{edu.cgpa}</span>
                    <div className="performance-indicator">
                      <div className="indicator-bar" style={{ width: `${parseFloat(edu.cgpa) * 10}%` }}></div>
                    </div>
                  </div>
                </div>

                {/* Decorative Accent */}
                <div className="decorative-accent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .education-section {
          min-height: calc(100vh - 80px);
          background: #F8FAFC;
          position: relative;
          overflow: hidden;
          padding: 80px 40px;
        }

        .education-background {
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

        .education-container {
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
        }

        .academic-showcase {
          display: flex;
          flex-direction: column;
          gap: 40px;
          position: relative;
        }

        .academic-card {
          background: #FFFFFF;
          border: 1px solid #EADBC8;
          border-radius: 24px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .academic-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #6F4E37, #A67B5B);
          opacity: 0.8;
        }

        .academic-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
          border-color: #EADBC8;
        }

        .academic-card.featured {
          transform: scale(1.02);
          box-shadow: 0 25px 70px rgba(111, 78, 55, 0.2);
        }

        .academic-card.card-left {
          margin-left: 0;
          margin-right: 60px;
        }

        .academic-card.card-right {
          margin-left: 60px;
          margin-right: 0;
        }

        .academic-icon {
          position: absolute;
          top: -20px;
          right: 40px;
          z-index: 3;
        }

        .icon-container {
          width: 64px;
          height: 64px;
          background: #F3E8DC;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6F4E37;
          box-shadow: 0 8px 25px rgba(111, 78, 55, 0.3);
          position: relative;
        }

        .type-badge {
          position: absolute;
          bottom: -8px;
          right: -8px;
          background: #F3E8DC;
          color: #6F4E37;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .academic-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .content-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .institution-name {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2C1810;
          margin: 0;
          line-height: 1.2;
        }

        .duration-info {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6B4F3A;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .duration-info svg {
          color: #6F4E37;
        }

        .degree-info {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #6B4F3A;
          margin: 0;
        }

        .academic-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .highlight-tag {
          padding: 8px 16px;
          background: #F8EFE6;
          border: 1px solid #EADBC8;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #6F4E37;
          transition: all 0.3s ease;
        }

        .highlight-tag:hover {
          background: #F3E8DC;
        }

        .cgpa-stat {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .stat-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #6B4F3A;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-chip {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 20px;
          background: #F8EFE6;
          border: 1px solid #EADBC8;
          border-radius: 50px;
          position: relative;
        }

        .cgpa-value {
          font-size: 1.2rem;
          font-weight: 700;
          color: #6F4E37;
          min-width: 60px;
        }

        .performance-indicator {
          flex: 1;
          height: 8px;
          background: #F3E8DC;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }

        .indicator-bar {
          height: 100%;
          background: #6F4E37;
          border-radius: 4px;
          transition: width 0.6s ease;
        }

        .decorative-accent {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(15, 118, 110, 0.05));
          border-radius: 50%;
          filter: blur(20px);
        }

        @media (max-width: 1024px) {
          .education-section {
            padding: 60px 24px;
          }

          .academic-card.card-left,
          .academic-card.card-right {
            margin-left: 0;
            margin-right: 0;
          }

          .academic-card {
            padding: 32px;
          }

          .institution-name {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .education-section {
            padding: 40px 16px;
          }

          .section-header {
            margin-bottom: 60px;
          }

          .academic-showcase {
            gap: 32px;
          }

          .academic-card {
            padding: 24px;
          }

          .academic-icon {
            top: -15px;
            right: 24px;
          }

          .icon-container {
            width: 56px;
            height: 56px;
          }

          .type-badge {
            font-size: 0.6rem;
            padding: 3px 6px;
          }

          .institution-name {
            font-size: 1.3rem;
          }

          .degree-info {
            font-size: 1rem;
          }

          .highlight-tag {
            padding: 5px 12px;
            font-size: 0.8rem;
          }

          .stat-chip {
            padding: 10px 16px;
          }

          .cgpa-value {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .education-section {
            padding: 32px 12px;
          }

          .academic-card {
            padding: 20px;
          }

          .academic-icon {
            top: -12px;
            right: 20px;
          }

          .icon-container {
            width: 48px;
            height: 48px;
          }

          .icon-container svg {
            width: 24px;
            height: 24px;
          }

          .institution-name {
            font-size: 1.2rem;
          }

          .academic-highlights {
            gap: 8px;
          }

          .highlight-tag {
            padding: 4px 10px;
            font-size: 0.75rem;
          }

          .stat-chip {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            padding: 12px;
          }

          .performance-indicator {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
