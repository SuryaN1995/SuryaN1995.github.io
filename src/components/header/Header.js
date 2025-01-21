import React, { Component, useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import { themesList } from "../../theme";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  removeDropdown = (isOpen) => {
    if (!isOpen) return;
    this.setState(() => ({
      isDropdownOpen: false,
    }));
  };

  handleTheme = (theme) => {
    this.toggleDropdown();
    this.props.onThemeChange(theme);
  };

  render() {
    const theme = this.props.theme;
    const currentTheme = themesList.find((local) => local.theme === theme);
    const { isDropdownOpen } = this.state;
    const link = settings.isSplash ? "/splash" : "home";

    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span
                className="logo-name"
                style={{ color: theme.text, borderRadius: "48px" }}
              >
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text, borderRadius: "48px" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text, borderRadius: "48px" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text, borderRadius: "48px" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text, borderRadius: "48px" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/opensource"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Open Source
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text, borderRadius: "48px" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </NavLink>
              </li>
              <li>
                <div
                  className="btn"
                  style={{
                    color: theme.text,
                    backgroundColor: theme.highlight,
                  }}
                  onClick={this.toggleDropdown}
                >
                  {currentTheme.displayName}
                </div>
              </li>
            </ul>
          </header>
          {isDropdownOpen && (
            <ul
              style={{
                all: "unset",
                cursor: "pointer",
                listStyle: "none",
                borderRadius: "8px",
                display: "grid",
                backgroundColor: theme.imageHighlight,
              }}
            >
              {themesList.map((local) => {
                return (
                  <li
                    className=""
                    key={local.id}
                    style={{
                      border: `2px solid ${
                        local.theme === theme
                          ? theme.jacketColor
                          : "transparent"
                      }`,
                      color: theme.text,
                      padding: "10px 5px",
                      borderRadius: "6px",
                    }}
                    onClick={() => this.handleTheme(local)}
                    activeStyle={{ fontWeight: "bold" }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    {local.displayName}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </Fade>
    );
  }
}
export default Header;
