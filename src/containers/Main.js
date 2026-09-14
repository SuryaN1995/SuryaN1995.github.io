import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import Offline from "../pages/errors/offline/Offline";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

export default class Main extends Component {
  state = {
    isOnline: typeof navigator === "undefined" ? true : navigator.onLine,
  };

  componentDidMount() {
    window.addEventListener("online", this.handleConnectionChange);
    window.addEventListener("offline", this.handleConnectionChange);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.handleConnectionChange);
    window.removeEventListener("offline", this.handleConnectionChange);
  }

  handleConnectionChange = () => {
    this.setState({ isOnline: navigator.onLine });
  };

  render() {
    return (
      <BrowserRouter basename="/">
        <ScrollToTop />
        {!this.state.isOnline ? (
          <Offline
            theme={this.props.theme}
            onThemeChange={this.props.onThemeChange}
            onRetry={this.handleConnectionChange}
          />
        ) : (
          <Switch>
            <Route
              path="/"
              exact
              render={(props) =>
                settings.isSplash ? (
                  <Splash {...props} theme={this.props.theme} />
                ) : (
                  <Home
                    {...props}
                    theme={this.props.theme}
                    onThemeChange={this.props.onThemeChange}
                  />
                )
              }
            />
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  theme={this.props.theme}
                  onThemeChange={this.props.onThemeChange}
                />
              )}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience
                  {...props}
                  theme={this.props.theme}
                  onThemeChange={this.props.onThemeChange}
                />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education
                  {...props}
                  theme={this.props.theme}
                  onThemeChange={this.props.onThemeChange}
                />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact
                  {...props}
                  theme={this.props.theme}
                  onThemeChange={this.props.onThemeChange}
                />
              )}
            />
            {settings.isSplash && (
              <Route
                path="/splash"
                render={(props) => (
                  <Splash
                    {...props}
                    theme={this.props.theme}
                    onThemeChange={this.props.onThemeChange}
                  />
                )}
              />
            )}
            <Route
              path="/projects"
              render={(props) => (
                <Projects
                  {...props}
                  theme={this.props.theme}
                  onThemeChange={this.props.onThemeChange}
                />
              )}
            />
            <Route
              path="*"
              render={(props) => (
                <Error404
                  {...props}
                  theme={this.props.theme}
                  onThemeChange={this.props.onThemeChange}
                />
              )}
            />
          </Switch>
        )}
      </BrowserRouter>
    );
  }
}
