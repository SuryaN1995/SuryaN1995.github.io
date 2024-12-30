import React from 'react';
import './Awards.css';

const awardsData = [
    {
      title: "Best Innovator Award",
      organization: "Tech Innovators Summit",
      date: "June 2023",
      description: "Awarded for exceptional innovation in AI-driven solutions.",
      logo:require("../../assets/img/airtel.png")
    },
    {
      title: "Full-Stack Developer Certification",
      organization: "Coursera - Meta",
      date: "December 2022",
      description: "Completed a comprehensive course on full-stack development.",
      logo:require("../../assets/img/airtel.png")
    },
    {
      title: "Leadership Excellence Award",
      organization: "XYZ Corporation",
      date: "March 2021",
      description: "Recognized for outstanding leadership in project execution.",
      logo:require("../../assets/img/airtel.png")
    }
  ];
  
  const AwardsCertifications = () => {
    return (
      <section className="awards-section">
        <div className="container">
          <h2 className="section-title">Awards & Certifications</h2>
          <div className="awards-grid">
            {awardsData.map((item, index) => (
              <div className="award-card" key={index}>
                <div className="award-header">
                  <img 
                    src={item.logo} 
                    alt={`${item.organization} logo`} 
                    className="award-logo"
                  />
                  <h3 className="award-title">{item.title}</h3>
                  <p className="award-organization">{item.organization}</p>
                </div>
                <div className="award-details">
                  <p className="award-date">{item.date}</p>
                  <p className="award-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default AwardsCertifications;