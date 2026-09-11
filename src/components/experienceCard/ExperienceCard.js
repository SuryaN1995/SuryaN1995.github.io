import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const { experience, index, totalCards, theme } = this.props;
    const isFirst = index === 0;
    const isLast = index === totalCards - 1;

    return (
      <div
        className={`experience-list-item${
          isFirst ? " experience-list-item--first" : ""
        }${isLast ? " experience-list-item--last" : ""}`}
      >
        <Fade left duration={2000} distance="40px">
          <div className="experience-card-logo-div">
            <img
              className="experience-card-logo"
              src={require(`../../assets/images/${experience["logo_path"]}`)}
              alt={`${experience["company"]} logo`}
            />
          </div>
        </Fade>
        <div className="experience-card-stepper" aria-hidden="true">
          <span
            className="experience-card-stepper-rail"
            style={{ backgroundColor: theme.headerColor }}
          />
          <span
            className="experience-card-stepper-dot"
            style={{
              backgroundColor: theme.headerColor,
              boxShadow: `0 0 0 4px ${theme.body}`,
            }}
          />
        </div>
        <Fade right duration={2000} distance="40px">
          <div className="experience-card-wrapper">
            <div
              className="arrow-left"
              style={{ borderRight: `10px solid ${theme.body}` }}
            />
            <div
              className="experience-card"
              style={{ background: `${theme.body}` }}
            >
              <div className="experience-card-header-div">
                <div>
                  <h3
                    className="experience-card-title"
                    style={{ color: theme.text }}
                  >
                    {experience["title"]}
                  </h3>
                  <p
                    className="experience-card-company"
                    style={{ color: theme.text }}
                  >
                    <a
                      href={experience["company_url"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience["company"]}
                    </a>
                  </p>
                </div>
                <div className="experience-card-heading-right">
                  <p
                    className="experience-card-duration"
                    style={{ color: theme.secondaryText }}
                  >
                    {experience["duration"]}
                  </p>
                  <p
                    className="experience-card-location"
                    style={{ color: theme.secondaryText }}
                  >
                    {experience["location"]}
                  </p>
                </div>
              </div>
              <p
                className="experience-card-description"
                style={{ color: theme.text }}
              >
                {experience["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
