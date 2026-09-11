import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        {degree.logo_path && (
          <Flip left duration={2000}>
            <div
              className="card-img"
              style={{ backgroundColor: theme.imageHighlight }}
            >
              <img
                src={require(`../../assets/images/${degree.logo_path}`)}
                alt={degree.alt_name}
              />
            </div>
          </Flip>
        )}
        <Fade right duration={2000} distance="40px">
          <div
            className="card-body"
            style={{ width: degree.logo_path ? "90%" : "100%" }}
          >
            <div className="body-header">
              <div className="body-header-title">
                <h2 className="card-title">{degree.title}</h2>
                <h3 className="card-subtitle">{degree.subtitle}</h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration">{degree.duration}</h3>
                {degree.gpa && <p className="degree-gpa">{degree.gpa}</p>}
              </div>
            </div>
            <div className="body-content">
              {degree.descriptions.map((sentence, index) => (
                <p className="content-list" key={index}>
                  {sentence}
                </p>
              ))}
              {degree.website_link && (
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="visit-btn">
                    <p className="btn">Visit Website</p>
                  </div>
                </a>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
