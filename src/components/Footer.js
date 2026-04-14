import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/eswar-20",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/eswar-manoj-mandavilli-2a8456350",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "Email",
      href: "mailto:eswarmanojmandavilli@gmail.com",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="premium-footer">
      {/* Subtle Top Border/Divider */}
      <div className="footer-divider"></div>
      
      <div className="footer-container">
        {/* Social Icons */}
        <div className="footer-social">
          <div className="social-title">Connect</div>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Clean Centered Typography */}
        <div className="footer-content">
          <div className="footer-text">
            <p className="footer-tagline">Crafted with passion</p>
            <p className="footer-copyright">
              © {currentYear} Eswar Manoj Mandavilli
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="footer-info">
          <p className="footer-location">India</p>
          <p className="footer-availability">Available for opportunities</p>
        </div>
      </div>

      <style jsx>{`
        .premium-footer {
          background: #FAF7F2;
          padding: 60px 40px 40px;
          position: relative;
        }

        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #6F4E37, transparent);
          margin-bottom: 40px;
          opacity: 0.3;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .footer-social {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .social-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #6F4E37;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .social-icons {
          display: flex;
          gap: 16px;
        }

        .social-icon {
          width: 44px;
          height: 44px;
          background: rgba(111, 78, 55, 0.05);
          border: 1px solid rgba(111, 78, 55, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6F4E37;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: linear-gradient(135deg, #6F4E37, #A67B5B);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(111, 78, 55, 0.2);
        }

        .footer-content {
          text-align: center;
        }

        .footer-text {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-tagline {
          font-size: 1rem;
          font-weight: 500;
          color: #6B4F3A;
          margin: 0;
        }

        .footer-copyright {
          font-size: 0.9rem;
          color: #6B4F3A;
          margin: 0;
        }

        .footer-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .footer-location,
        .footer-availability {
          font-size: 0.85rem;
          color: #6B4F3A;
          margin: 0;
        }

        @media (max-width: 768px) {
          .premium-footer {
            padding: 40px 24px 30px;
          }

          .footer-container {
            gap: 32px;
          }

          .social-icons {
            gap: 12px;
          }

          .social-icon {
            width: 40px;
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .premium-footer {
            padding: 32px 16px 24px;
          }

          .footer-container {
            gap: 24px;
          }

          .social-title {
            font-size: 0.8rem;
          }

          .social-icons {
            gap: 10px;
          }

          .social-icon {
            width: 36px;
            height: 36px;
          }

          .social-icon svg {
            width: 18px;
            height: 18px;
          }

          .footer-tagline {
            font-size: 0.9rem;
          }

          .footer-copyright {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
