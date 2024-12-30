import React from 'react';
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Education = ({ education }) => {
  return (
    <Jumbotron fluid id="educations" className="bg m-0">
      <h2 className="display-4 mb-5 text-center">
        {education.heading}
      </h2>
      <Row>
        {education.schools.map((edu, index) => (
          <div
            key={index}
            className="d-flex align-items-center bg-white shadow-lg rounded-lg p-4 mb-4"
            style={{
              borderLeft: "4px solid #2563EB", // Tailwind's `border-blue-600`
            }}
          >
            {/* Icon with Circle Background */}
            <div
              className="d-flex justify-content-center align-items-center rounded-circle"
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "#555555",
                border: "4px solid #222222",
                flexShrink: 0,
              }}
            >
              <img
                src={edu.icon}
                alt="School Logo"
                style={{
                  width: "60%",
                  height: "60%",
                  objectFit: "contain"
                }}
              />
            </div>
            {/* Right-Aligned Content */}
            <div className="ml-4" style={{ marginLeft: "20px" }}>
              <h3 className="h5 text-dark">{edu.course}</h3>
              <p className="mb-1 text-muted">{edu.school}</p>
              <p className="mb-2 text-muted">{edu.date}</p>
              <p className="text-secondary">{edu.description}</p>
            </div>
          </div>
        ))}
      </Row>
    </Jumbotron>
  );

};

export default Education;
