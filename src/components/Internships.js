const Internships = () => {
  const internshipsData = [
    {
      title: "AI and ML Virtual Internship",
      organization: "AICTE EduSkills",
      duration: "Oct - Dec 2025",
      type: "Virtual Internship",
      icon: "briefcase",
      achievements: [
        "Learned machine learning workflows including preprocessing, training, and model evaluation",
        "Worked with predictive models and explored real world AI applications",
        "Gained practical knowledge of optimization techniques and ethical AI concepts"
      ]
    },
    {
      title: "Cyber Security Virtual Internship",
      organization: "ShadowFox Security Academy",
      duration: "Sept 2025",
      type: "Virtual Internship",
      icon: "shield",
      achievements: [
        "Performed vulnerability assessments and threat analysis in simulated security environments",
        "Practiced identifying security weaknesses and applying protection methods",
        "Completed hands-on labs related to network security and risk management"
      ]
    }
  ];

  return (
    <section className="internships-section">
      {/* Background Elements */}
      <div className="internships-background">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>

      <div className="internships-container">
        <div className="section-header">
          <h2>Internships</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Professional experience and skill development</p>
        </div>

        {/* Premium Experience Cards Grid */}
        <div className="experience-showcase">
          {internshipsData.map((internship, index) => (
            <div key={index} className="experience-card">
              {/* Company/Briefcase Icon Badge */}
              <div className="company-icon">
                <div className="icon-badge">
                  {internship.icon === 'briefcase' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                    </svg>
                  )}
                  {internship.icon === 'shield' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                  )}
                </div>
                <div className="type-badge">{internship.type}</div>
              </div>

              {/* Experience Content */}
              <div className="experience-content">
                <div className="content-header">
                  <h3 className="internship-title">{internship.title}</h3>
                  <div className="duration-chip">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                    <span>{internship.duration}</span>
                  </div>
                </div>

                <div className="organization-info">
                  <div className="company-name">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>{internship.organization}</span>
                  </div>
                </div>

                {/* Achievement Bullet Highlights */}
                <div className="achievements-section">
                  <div className="achievements-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>Key Achievements</span>
                  </div>
                  <ul className="achievements-list">
                    {internship.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="achievement-item">
                        <div className="bullet-point"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="decorative-accent"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .internships-section {
          min-height: calc(100vh - 80px);
          background: #F8FAFC;
          position: relative;
          overflow: hidden;
          padding: 80px 40px;
        }

        .internships-background {
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

        .internships-container {
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

        .experience-showcase {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
        }

        .experience-card {
          background: #FFFFFF;
          border: 1px solid #EADBC8;
          border-radius: 24px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #6F4E37, #A67B5B);
          opacity: 0.8;
        }

        .experience-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(111, 78, 55, 0.15);
          border-color: #EADBC8;
        }

        .company-icon {
          position: absolute;
          top: -20px;
          right: 32px;
          z-index: 3;
        }

        .icon-badge {
          width: 56px;
          height: 56px;
          background: #6F4E37;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
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

        .experience-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .content-header {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .internship-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #2C1810;
          margin: 0;
          line-height: 1.3;
        }

        .duration-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: #F3E8DC;
          border: 1px solid #EADBC8;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #6F4E37;
          align-self: flex-start;
        }

        .duration-chip svg {
          color: #6F4E37;
        }

        .organization-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .company-name {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6B4F3A;
          font-size: 1rem;
          font-weight: 500;
        }

        .company-name svg {
          color: #6F4E37;
        }

        .achievements-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .achievements-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
          font-weight: 600;
          color: #2C1810;
        }

        .achievements-header svg {
          color: #6F4E37;
        }

        .achievements-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #6B4F3A;
        }

        .bullet-point {
          width: 8px;
          height: 8px;
          background: #A67B5B;
          border-radius: 50%;
          margin-top: 8px;
          flex-shrink: 0;
        }

        .decorative-accent {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(111, 78, 55, 0.1), rgba(166, 123, 91, 0.05));
          border-radius: 50%;
          filter: blur(20px);
        }

        @media (max-width: 1024px) {
          .internships-section {
            padding: 60px 24px;
          }

          .experience-showcase {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 32px;
          }

          .experience-card {
            padding: 32px;
          }

          .internship-title {
            font-size: 1.4rem;
          }
        }

        @media (max-width: 768px) {
          .internships-section {
            padding: 40px 16px;
          }

          .section-header {
            margin-bottom: 60px;
          }

          .experience-showcase {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .experience-card {
            padding: 28px;
          }

          .company-icon {
            top: -15px;
            right: 24px;
          }

          .icon-badge {
            width: 48px;
            height: 48px;
          }

          .type-badge {
            font-size: 0.6rem;
            padding: 3px 6px;
          }

          .internship-title {
            font-size: 1.3rem;
          }

          .duration-chip {
            padding: 6px 12px;
            font-size: 0.85rem;
          }

          .company-name {
            font-size: 0.9rem;
          }

          .achievements-header {
            font-size: 0.9rem;
          }

          .achievement-item {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .internships-section {
            padding: 32px 12px;
          }

          .experience-card {
            padding: 24px;
          }

          .company-icon {
            top: -12px;
            right: 20px;
          }

          .icon-badge {
            width: 40px;
            height: 40px;
          }

          .icon-badge svg {
            width: 20px;
            height: 20px;
          }

          .internship-title {
            font-size: 1.2rem;
          }

          .duration-chip {
            padding: 5px 10px;
            font-size: 0.8rem;
          }

          .company-name {
            font-size: 0.85rem;
          }

          .achievements-header {
            font-size: 0.85rem;
          }

          .achievement-item {
            font-size: 0.8rem;
            gap: 8px;
          }

          .bullet-point {
            width: 6px;
            height: 6px;
            margin-top: 6px;
          }
        }
      `}</style>
    </section>
  );
};

export default Internships;
