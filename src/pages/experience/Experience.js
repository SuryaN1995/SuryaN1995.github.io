import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} onThemeChange={this.props.onThemeChange} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1 className="experience-heading-text">{experience.title}</h1>
                <h3 className="experience-heading-sub-text">
                  {experience["subtitle"]}
                </h3>
                <p className="experience-header-detail-text subTitle">
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
