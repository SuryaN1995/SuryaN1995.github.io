import React from "react";
import "./Footer.css";
import { Fade } from "../reveal/Reveal";
import { greeting, socialMediaLinks } from "../../portfolio.js";

// Reuse the address already configured for the Gmail link rather than
// introducing a second place to keep it up to date.
const mailtoLink = socialMediaLinks.find((media) =>
  media.link.startsWith("mailto:")
);
const emailAddress = mailtoLink && mailtoLink.link.replace("mailto:", "");

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Fade bottom distance="16px" duration={1000}>
        <div className="site-footer__bar">
          {emailAddress && (
            <a className="site-footer__contact" href={mailtoLink.link}>
              <i className="fas fa-envelope" aria-hidden="true" />
              <span>{emailAddress}</span>
            </a>
          )}

          <div className="site-footer__legal">
            <p className="site-footer__copy">
              © {year} {greeting.title}. All rights reserved.
            </p>
            <p className="site-footer__made">
              Made with{" "}
              <span role="img" aria-label="love">
                ❤️
              </span>{" "}
              using React
            </p>
          </div>
        </div>
      </Fade>
    </footer>
  );
}
