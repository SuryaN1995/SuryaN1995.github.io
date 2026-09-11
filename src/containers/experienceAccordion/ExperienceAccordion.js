import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <Accordion>
          {this.props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  PanelContainer: {
                    // baseui draws a full-width rule under every panel, which
                    // reads as a stray line beneath these rounded headers.
                    style: () => ({
                      borderBottomWidth: "0px",
                      borderBottomStyle: "none",
                      borderBottomColor: "transparent",
                    }),
                  },
                  Header: {
                    // Styletron warns when a `border` shorthand sits next to a
                    // longhand, so every edge is declared longhand here.
                    style: () => ({
                      backgroundColor: theme.body,
                      borderTop: `1px solid ${theme.headerColor}`,
                      borderRight: `1px solid ${theme.headerColor}`,
                      borderBottom: `1px solid ${theme.headerColor}`,
                      borderLeft: `1px solid ${theme.headerColor}`,
                      borderTopLeftRadius: "14px",
                      borderTopRightRadius: "14px",
                      borderBottomLeftRadius: "14px",
                      borderBottomRightRadius: "14px",
                      marginBottom: "8px",
                      fontFamily: "Google Sans Regular",
                      color: theme.text,
                      ":hover": {
                        color: theme.secondaryText,
                      },
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: theme.body,
                      borderBottomLeftRadius: "14px",
                      borderBottomRightRadius: "14px",
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience, index) => (
                  <ExperienceCard
                    key={`${experience["company"]}-${experience["title"]}`}
                    index={index}
                    totalCards={section["experiences"].length}
                    experience={experience}
                    theme={theme}
                  />
                ))}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
