import React, { Component } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

const NAV_LINKS = [
  { to: "/home", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

class Header extends Component {
  state = { isScrolled: false };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const isScrolled = window.scrollY > 8;
    if (isScrolled !== this.state.isScrolled) this.setState({ isScrolled });
  };

  closeMenu = () => {
    const toggle = document.getElementById("menu-btn");
    if (toggle) toggle.checked = false;
  };

  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "/home";

    return (
      <>
        <SeoHeader />
        <header
          className={`site-header${
            this.state.isScrolled ? " site-header--scrolled" : ""
          }`}
        >
          <div className="header">
            <NavLink
              to={link}
              tag={Link}
              className="logo"
              onClick={this.closeMenu}
            >
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">{greeting.logo_name}</span>
              <span className="logo-bracket">/&gt;</span>
            </NavLink>

            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label
              className="menu-icon"
              htmlFor="menu-btn"
              aria-label="Toggle menu"
            >
              <span className="navicon"></span>
            </label>

            <ul className="menu">
              {NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    tag={Link}
                    className="nav-link"
                    activeClassName="nav-link--active"
                    onClick={this.closeMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="menu-theme">
                <ThemeSwitcher
                  theme={theme}
                  onThemeChange={this.props.onThemeChange}
                />
              </li>
            </ul>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
