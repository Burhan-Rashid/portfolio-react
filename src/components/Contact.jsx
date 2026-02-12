import React from 'react';
import contactData from '../data/contact.json';

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="contact-container">
          <div className="section-header fade-in">
            <div className="section-label">// {contactData.sectionLabel}</div>
            <h2 className="section-title">{contactData.sectionTitle}</h2>
            <p className="section-description">{contactData.sectionDescription}</p>
          </div>
          <div className="contact-grid">
            {contactData.contactMethods.map((method) => (
              <div key={method.id} className="contact-card fade-in">
                <div className="contact-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <a href={method.link}>{method.value}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="social-links">
            {contactData.socialLinks.map((social, index) => (
              <a key={index} href={social.url} aria-label={social.platform}>
                {social.icon}
              </a>
            ))}
          </div>
          <p className="copyright">{contactData.footer.copyright}</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
