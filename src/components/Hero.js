import React from 'react';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.html';
    link.download = 'M_Eswar_Manoj_Resume.html';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero">
      {/* Abstract Background Elements */}
      <div className="hero-background">
        <div className="abstract-shape shape-1"></div>
        <div className="abstract-shape shape-2"></div>
        <div className="abstract-shape shape-3"></div>
        <div className="abstract-shape shape-4"></div>
      </div>

      <div className="hero-container">
        {/* Left Side - Content */}
        <div className="hero-left">
          <div className="hero-intro">
            <span className="intro-text">Hello, I'm</span>
          </div>
          
          <div className="hero-title-section">
            <h1 className="hero-name">M Eswar Manoj</h1>
            <div className="hero-role">
              <span className="role-text">Computer Science Student</span>
              <div className="role-underline"></div>
            </div>
          </div>

          <div className="hero-description">
            <p>
              Computer Science student with a strong foundation in data structures, algorithms, and problem solving. 
              Interested in software development and web technologies, with a focus on building practical applications 
              and improving coding skills through real world experience.
            </p>
          </div>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={handleDownloadResume}>
              <span className="btn-text">Download Resume</span>
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7,10 12,15 17,10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
            <button className="btn btn-secondary">
              <span className="btn-text">Contact Me</span>
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side - Profile */}
        <div className="hero-right">
          <div className="profile-wrapper">
            <div className="profile-frame">
              <div className="profile-image-container">
                <img 
                  key="profile-image"
                  src="/profile-pic.jpg" 
                  alt="M Eswar Manoj"
                  className="profile-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="profile-placeholder">
                  <span>M Eswar Manoj</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons Glass Card */}
          <div className="social-glass-card">
            <div className="social-card-header">
              <span className="social-title">Connect</span>
            </div>
            <div className="social-icons">
              <a href="mailto:eswarmanojmandavilli@gmail.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="https://github.com/eswar-20" className="social-icon" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/eswar-manoj-mandavilli-2a8456350" className="social-icon" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background: #FAF7F2;
          display: flex;
          align-items: center;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .abstract-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
        }

        .shape-1 {
          top: -10%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #6F4E37, #A67B5B);
        }

        .shape-2 {
          top: 30%;
          right: -10%;
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #A67B5B, #6F4E37);
        }

        .shape-3 {
          bottom: -5%;
          left: 20%;
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #6F4E37, #A67B5B);
        }

        .shape-4 {
          top: 50%;
          right: 30%;
          width: 250px;
          height: 250px;
          background: linear-gradient(135deg, #A67B5B, #6F4E37);
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .hero-intro {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .intro-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: #6F4E37;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .hero-title-section {
          opacity: 0;
          animation: fadeInUp 0.8s ease 0.2s forwards;
        }

        .hero-name {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          color: #2C1810;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
        }

        .hero-role {
          position: relative;
          display: inline-block;
          margin: 0;
        }

        .role-text {
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          font-weight: 600;
          color: #6F4E37;
          letter-spacing: 0.02em;
        }

        .role-underline {
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #6F4E37, #A67B5B);
          border-radius: 2px;
          transform: scaleX(0);
          animation: expandWidth 0.8s ease 0.6s forwards;
        }

        .hero-description {
          opacity: 0;
          animation: fadeInUp 0.8s ease 0.4s forwards;
          max-width: 500px;
        }

        .hero-description p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #6B4F3A;
          margin: 0;
        }

        .hero-actions {
          display: flex;
          gap: 24px;
          opacity: 0;
          animation: fadeInUp 0.8s ease 0.6s forwards;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 16px 28px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-decoration: none;
          border: none;
          position: relative;
          overflow: hidden;
        }

        .btn-primary {
          background: linear-gradient(135deg, #6F4E37, #A67B5B);
          color: white;
          box-shadow: 0 4px 20px rgba(111, 78, 55, 0.25);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(111, 78, 55, 0.35);
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

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .btn:hover .btn-icon {
          transform: translateY(2px);
        }

        .hero-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          position: relative;
        }

        .profile-wrapper {
          position: relative;
        }

        .profile-frame {
          width: 260px;
          height: 320px;
          background: linear-gradient(135deg, #6F4E37, #A67B5B);
          border-radius: 20px;
          padding: 8px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(111, 78, 55, 0.25);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .profile-frame:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 35px 70px rgba(111, 78, 55, 0.35);
        }

        .profile-image-container {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: #FAF7F2;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .profile-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: none;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #6F4E37, #A67B5B);
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          border-radius: 20px;
        }

        .social-glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(234, 219, 200, 0.3);
          border-radius: 24px;
          padding: 28px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(111, 78, 55, 0.1);
          transition: all 0.3s ease;
        }

        .social-glass-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(111, 78, 55, 0.15);
        }

        .social-card-header {
          margin-bottom: 20px;
        }

        .social-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #6B4F3A;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .social-icons {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #6F4E37, #A67B5B);
          color: white;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .social-icon:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 8px 25px rgba(111, 78, 55, 0.25);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes expandWidth {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @media (max-width: 1024px) {
          .hero {
            min-height: 100vh;
            padding: 80px 0;
          }

          .hero-container {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
            padding: 0 24px;
          }

          .hero-left {
            align-items: center;
            max-width: 600px;
            margin: 0 auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-right {
            order: -1;
          }

          .profile-frame {
            width: 220px;
            height: 280px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 100vh;
            padding: 60px 0;
          }

          .hero-container {
            padding: 0 20px;
            gap: 48px;
          }

          .hero-left {
            gap: 32px;
          }

          .hero-name {
            font-size: 2.5rem;
          }

          .role-text {
            font-size: 1.2rem;
          }

          .hero-actions {
            gap: 16px;
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero {
            min-height: 100vh;
            padding: 40px 0;
          }

          .hero-container {
            padding: 0 16px;
            gap: 40px;
          }

          .hero-left {
            gap: 28px;
          }

          .hero-name {
            font-size: 2.2rem;
          }

          .role-text {
            font-size: 1.1rem;
          }

          .hero-description p {
            font-size: 1rem;
          }

          .hero-actions {
            gap: 12px;
          }

          .btn {
            padding: 14px 24px;
            font-size: 0.9rem;
          }

          .profile-frame {
            width: 200px;
            height: 240px;
          }

          .social-glass-card {
            padding: 20px;
          }

          .social-icons {
            gap: 8px;
          }

          .social-icon {
            width: 36px;
            height: 36px;
          }

          .social-icon svg {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
