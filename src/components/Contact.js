import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: 'Email',
      value: 'eswarmanojmandavilli@gmail.com',
      href: 'mailto:eswarmanojmandavilli@gmail.com'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      label: 'Phone',
      value: '+91 9381909581',
      href: 'tel:+919381909581'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/eswar-20',
      href: 'https://github.com/eswar-20'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/eswar-manoj-mandavilli-2a8456350',
      href: 'https://linkedin.com/in/eswar-manoj-mandavilli-2a8456350'
    }
  ];

  return (
    <section className="contact-section">
      {/* Background Elements */}
      <div className="contact-background">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>

      <div className="contact-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Let's connect and discuss how we can work together</p>
        </div>

        {/* Modern Split-Panel Layout */}
        <div className="split-panel">
          {/* Left Side - Premium Info Card */}
          <div className="info-panel">
            <div className="info-card">
              <div className="info-header">
                <h3 className="info-title">Contact Information</h3>
                <p className="info-subtitle">Feel free to reach out through any of these channels</p>
              </div>

              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <a key={index} href={item.href} className="contact-item" target="_blank" rel="noopener noreferrer">
                    <div className="item-icon">
                      {item.icon}
                    </div>
                    <div className="item-content">
                      <div className="item-label">{item.label}</div>
                      <div className="item-value">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Floating Social Icons */}
              <div className="social-icons">
                <div className="social-header">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Connect With Me</span>
                </div>
                <div className="social-links">
                  <a href="https://github.com/eswar-20" className="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/eswar-manoj-mandavilli-2a8456350" className="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="decorative-accent"></div>
            </div>
          </div>

          {/* Right Side - Elegant Contact Form */}
          <div className="form-panel">
            <div className="form-card">
              <div className="form-header">
                <h3 className="form-title">Send Me a Message</h3>
                <p className="form-subtitle">I'd love to hear from you</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Project Discussion"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={!isFormValid || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v4m0 12v4m0-10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M11 13l-4 4 4-4zm0 0v5"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

                {formStatus && (
                  <div className={`form-status ${formStatus}`}>
                    {formStatus === 'success' ? (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Message sent successfully!
                      </>
                    ) : (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                        Something went wrong. Please try again.
                      </>
                    )}
                  </div>
                )}
              </form>

              {/* Decorative Accent */}
              <div className="form-accent"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          min-height: calc(100vh - 80px);
          background: #F8FAFC;
          position: relative;
          overflow: hidden;
          padding: 80px 40px;
        }

        .contact-background {
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

        .contact-container {
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

        .split-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .info-panel,
        .form-panel {
          display: flex;
          flex-direction: column;
        }

        .info-card,
        .form-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(209, 250, 229, 0.3);
          border-radius: 24px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .info-card::before,
        .form-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #14B8A6, #0F766E);
          opacity: 0.8;
        }

        .info-card:hover,
        .form-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(15, 118, 110, 0.15);
          border-color: rgba(209, 250, 229, 0.5);
        }

        .info-header,
        .form-header {
          margin-bottom: 32px;
        }

        .info-title,
        .form-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 12px;
        }

        .info-subtitle,
        .form-subtitle {
          font-size: 1rem;
          color: #475569;
          line-height: 1.6;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 32px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: rgba(111, 78, 55, 0.05);
          border: 1px solid rgba(111, 78, 55, 0.1);
          border-radius: 16px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(111, 78, 55, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(111, 78, 55, 0.1);
        }

        .item-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #6F4E37, #A67B5B);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .item-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .item-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #6F4E37;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .item-value {
          font-size: 1rem;
          color: #2C1810;
          font-weight: 500;
        }

        .social-icons {
          margin-top: 32px;
        }

        .social-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
          font-weight: 600;
          color: #2C1810;
          margin-bottom: 16px;
        }

        .social-header svg {
          color: #6F4E37;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-link {
          width: 44px;
          height: 44px;
          background: #F3E8DC;
          border: 1px solid #EADBC8;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6F4E37;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #F8EFE6;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(111, 78, 55, 0.1);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #6B4F3A;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-input,
        .form-textarea {
          padding: 16px;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid #EADBC8;
          border-radius: 12px;
          font-size: 1rem;
          color: #2C1810;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #A67B5B;
          box-shadow: 0 0 0 3px rgba(166, 123, 91, 0.1);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #9A7B63;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #6F4E37 0%, #A67B5B 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          justify-content: center;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(111, 78, 55, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-status {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .form-status.success {
          background: rgba(34, 197, 94, 0.1);
          color: #16a34a;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        .form-status.error {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .decorative-accent,
        .form-accent {
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
          .contact-section {
            padding: 60px 24px;
          }

          .split-panel {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .info-card,
          .form-card {
            padding: 32px;
          }

          .info-title,
          .form-title {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 40px 16px;
          }

          .section-header {
            margin-bottom: 60px;
          }

          .split-panel {
            gap: 32px;
          }

          .info-card,
          .form-card {
            padding: 28px;
          }

          .info-title,
          .form-title {
            font-size: 1.4rem;
          }

          .contact-item {
            padding: 12px;
          }

          .item-icon {
            width: 40px;
            height: 40px;
          }

          .social-link {
            width: 40px;
            height: 40px;
          }

          .form-input,
          .form-textarea {
            padding: 14px;
          }

          .submit-btn {
            padding: 14px 28px;
          }
        }

        @media (max-width: 480px) {
          .contact-section {
            padding: 32px 12px;
          }

          .info-card,
          .form-card {
            padding: 24px;
          }

          .info-title,
          .form-title {
            font-size: 1.3rem;
          }

          .contact-item {
            padding: 10px;
            gap: 12px;
          }

          .item-icon {
            width: 36px;
            height: 36px;
          }

          .item-icon svg {
            width: 18px;
            height: 18px;
          }

          .social-link {
            width: 36px;
            height: 36px;
          }

          .social-link svg {
            width: 18px;
            height: 18px;
          }

          .form-input,
          .form-textarea {
            padding: 12px;
          }

          .submit-btn {
            padding: 12px 24px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
