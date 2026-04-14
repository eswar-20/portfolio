import React from 'react';

const About = () => {
  const skillCards = [
    {
      title: 'Programming',
      content: ['Python', 'C', 'C++'],
      icon: 'code',
      gradient: 'linear-gradient(135deg, #14B8A6, #0F766E)'
    },
    {
      title: 'Web Technologies',
      content: ['HTML', 'CSS', 'React'],
      icon: 'web',
      gradient: 'linear-gradient(135deg, #0F766E, #14B8A6)'
    },
    {
      title: 'Core Skills',
      content: ['Data Structures', 'Problem Solving'],
      icon: 'brain',
      gradient: 'linear-gradient(135deg, #14B8A6, #0F766E)'
    },
    {
      title: 'Interests',
      content: ['Web Development', 'Software Architecture'],
      icon: 'heart',
      gradient: 'linear-gradient(135deg, #0F766E, #14B8A6)'
    }
  ];

  return (
    <section className="about-section">
      {/* Background Elements */}
      <div className="about-background">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>

      <div className="about-container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="title-underline"></div>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-grid">
          {/* Main About Card - Large */}
          <div className="bento-card main-card">
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon main-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <h3 className="card-title">Career Objective</h3>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Motivated third-year B.Tech Computer Science student at KL University with a solid foundation in core data structures, Python, and problem-solving. Passionate about developing scalable software solutions and continuously improving algorithmic thinking and web development skills.
                </p>
                <p className="card-text secondary">
                  I believe in building elegant solutions that not only work efficiently but also make a positive impact on society through continuous learning and innovation.
                </p>
              </div>
              <div className="card-footer">
                <div className="highlight-text">
                  <span className="highlight-label">Focus:</span>
                  <span className="highlight-value">Software Development & Web Technologies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Programming Card */}
          <div className="bento-card programming-card">
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon" style={{ background: skillCards[0].gradient }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                </div>
                <h4 className="card-title">{skillCards[0].title}</h4>
              </div>
              <div className="card-body">
                <div className="skill-tags">
                  {skillCards[0].content.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Web Technologies Card */}
          <div className="bento-card web-card">
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon" style={{ background: skillCards[1].gradient }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h4 className="card-title">{skillCards[1].title}</h4>
              </div>
              <div className="card-body">
                <div className="skill-tags">
                  {skillCards[1].content.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Skills Card */}
          <div className="bento-card skills-card">
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon" style={{ background: skillCards[2].gradient }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
                <h4 className="card-title">{skillCards[2].title}</h4>
              </div>
              <div className="card-body">
                <div className="skill-tags">
                  {skillCards[2].content.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interests Card */}
          <div className="bento-card interests-card">
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon" style={{ background: skillCards[3].gradient }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h4 className="card-title">{skillCards[3].title}</h4>
              </div>
              <div className="card-body">
                <div className="skill-tags">
                  {skillCards[3].content.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          min-height: calc(100vh - 80px);
          background: #F8FAFC;
          position: relative;
          overflow: hidden;
          padding: 80px 40px;
        }

        .about-background {
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

        .about-container {
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

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 24px;
          grid-auto-flow: dense;
        }

        .main-card {
          grid-column: span 2;
          grid-row: span 2;
        }

        .programming-card {
          grid-column: span 1;
          grid-row: span 1;
        }

        .web-card {
          grid-column: span 1;
          grid-row: span 1;
        }

        .skills-card {
          grid-column: span 1;
          grid-row: span 1;
        }

        .interests-card {
          grid-column: span 1;
          grid-row: span 1;
        }

        .bento-card {
          background: #FFFFFF;
          border: 1px solid #EADBC8;
          border-radius: 24px;
          padding: 32px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .bento-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #6F4E37, #A67B5B);
          opacity: 0.8;
        }

        .bento-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
          border-color: #EADBC8;
        }

        .card-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .card-icon {
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

        .main-icon {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          background: #F3E8DC;
          color: #6F4E37;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2C1810;
          margin: 0;
          line-height: 1.2;
        }

        .info-card-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #2C1810;
          margin: 0 0 20px 0;
        }

        .info-card-content {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #6B4F3A;
          margin: 0;
          text-align: center;
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 60px 15px;
          }

          .section-header h2 {
            font-size: 2.5rem;
          }

          .main-heading h1 {
            font-size: 2rem;
          }

          .about-paragraph {
            font-size: 1rem;
          }

          .mini-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            max-width: 400px;
          }

          .mini-card {
            padding: 20px 15px;
          }

          .info-card {
            padding: 25px;
          }

          .info-card-title {
            font-size: 1.2rem;
          }

          .info-card-content {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .about-section {
            padding: 40px 10px;
          }

          .section-header {
            margin-bottom: 40px;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .main-heading {
            margin-bottom: 30px;
          }

          .main-heading h1 {
            font-size: 1.6rem;
          }

          .about-paragraphs {
            margin-bottom: 40px;
          }

          .about-paragraph {
            font-size: 0.95rem;
          }

          .mini-cards-grid {
            gap: 15px;
            margin-bottom: 40px;
          }

          .mini-card {
            padding: 15px 12px;
          }

          .mini-card-title {
            font-size: 1rem;
          }

          .mini-card-content {
            font-size: 0.9rem;
          }

          .info-cards {
            gap: 20px;
          }

          .info-card {
            padding: 20px;
          }

          .info-card-title {
            font-size: 1.1rem;
            margin-bottom: 15px;
          }

          .info-card-content {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
