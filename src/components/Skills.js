import React from 'react';

const Skills = () => {
  const techStackData = [
    {
      title: 'Programming Languages',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #6F4E37, #A67B5B)',
      skills: ['Python', 'C', 'C++', 'JavaScript']
    },
    {
      title: 'Web Technologies',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #A67B5B, #6F4E37)',
      skills: ['HTML', 'CSS', 'React', 'Node.js']
    },
    {
      title: 'Core Skills',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #6F4E37, #A67B5B)',
      skills: ['Data Structures', 'Problem Solving', 'Algorithms', 'OOP']
    },
    {
      title: 'Development Tools',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #A67B5B, #6F4E37)',
      skills: ['Git', 'VS Code', 'GitHub', 'npm']
    },
    {
      title: 'Database',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #6F4E37, #A67B5B)',
      skills: ['MySQL', 'MongoDB', 'SQLite']
    },
    {
      title: 'Frameworks',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #A67B5B, #6F4E37)',
      skills: ['React', 'Express.js', 'Bootstrap', 'Tailwind CSS']
    }
  ];

  return (
    <section className="skills-section">
      {/* Background Elements */}
      <div className="skills-background">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>

      <div className="skills-container">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <div className="title-underline"></div>
        </div>

        {/* Tech Stack Grid */}
        <div className="tech-stack-grid">
          {techStackData.map((category, index) => (
            <div key={index} className="tech-card">
              <div className="card-header">
                <div className="category-icon" style={{ background: category.gradient }}>
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="card-content">
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-badge">
                      <span className="skill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-footer">
                <div className="skill-count">
                  <span className="count-number">{category.skills.length}</span>
                  <span className="count-label">technologies</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          min-height: calc(100vh - 80px);
          background: #F8FAFC;
          position: relative;
          overflow: hidden;
          padding: 80px 40px;
        }

        .skills-background {
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
          background: linear-gradient(135deg, #6F4E37, #A67B5B);
        }

        .bg-shape-2 {
          top: 40%;
          right: -15%;
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #A67B5B, #6F4E37);
        }

        .bg-shape-3 {
          bottom: -10%;
          left: 30%;
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #6F4E37, #A67B5B);
        }

        .skills-container {
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

        .tech-stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        .tech-card {
          background: #FFFFFF;
          border: 1px solid #EADBC8;
          border-radius: 24px;
          padding: 32px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .tech-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #6F4E37, #A67B5B);
          opacity: 0.8;
        }

        .tech-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
          border-color: #EADBC8;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .category-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6F4E37;
          flex-shrink: 0;
          background: #F3E8DC;
        }

        .category-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2C1810;
          margin: 0;
          line-height: 1.2;
        }

        .card-content {
          margin-bottom: 24px;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .skill-badge {
          padding: 10px 16px;
          background: #F8EFE6;
          border: 1px solid #EADBC8;
          border-radius: 20px;
          transition: all 0.3s ease;
          cursor: default;
        }

        .skill-badge:hover {
          background: #F3E8DC;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(111, 78, 55, 0.1);
        }

        .skill-name {
          font-size: 0.95rem;
          font-weight: 500;
          color: #6F4E37;
          letter-spacing: 0.02em;
        }

        .card-footer {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid #EADBC8;
        }

        .skill-count {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .count-number {
          font-size: 1.8rem;
          font-weight: 700;
          color: #6F4E37;
          line-height: 1;
        }

        .count-label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #6B4F3A;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 1024px) {
          .skills-section {
            padding: 60px 24px;
          }

          .tech-stack-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
          }

          .tech-card {
            padding: 28px;
          }
        }

        @media (max-width: 768px) {
          .skills-section {
            padding: 40px 16px;
          }

          .section-header {
            margin-bottom: 60px;
          }

          .tech-stack-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .tech-card {
            padding: 24px;
          }

          .card-header {
            margin-bottom: 20px;
          }

          .category-icon {
            width: 48px;
            height: 48px;
          }

          .category-title {
            font-size: 1.25rem;
          }

          .skills-grid {
            gap: 10px;
          }

          .skill-badge {
            padding: 8px 14px;
          }

          .skill-name {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .skills-section {
            padding: 32px 12px;
          }

          .tech-card {
            padding: 20px;
          }

          .card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .category-icon {
            width: 40px;
            height: 40px;
          }

          .category-title {
            font-size: 1.1rem;
          }

          .skill-badge {
            padding: 6px 12px;
          }

          .skill-name {
            font-size: 0.85rem;
          }

          .count-number {
            font-size: 1.5rem;
          }

          .count-label {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
