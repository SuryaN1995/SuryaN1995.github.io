import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "../../components/reveal/Reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header">Certifications</h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {certifications.certifications.map((cert) => (
            <CertificationCard
              key={cert.title}
              certificate={cert}
              theme={theme}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Certifications;
