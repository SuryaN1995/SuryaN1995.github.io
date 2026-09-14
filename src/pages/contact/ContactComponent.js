import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "../../components/reveal/Reveal";
import "./ContactComponent.css";
import {
  greeting,
  socialMediaLinks,
  contactPageData,
} from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

// Same address the footer uses, so there is still one place to change it.
const mailtoLink = socialMediaLinks.find((media) =>
  media.link.startsWith("mailto:")
);

const locationParts = [
  addressSection.locality,
  addressSection.region,
  addressSection.country,
].filter(Boolean);

class Contact extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="contact-main">
        <Header theme={theme} onThemeChange={this.props.onThemeChange} />

        <main className="contact-shell">
          <section className="contact-hero">
            <Fade bottom duration={900} distance="24px">
              <div className="contact-portrait">
                <span className="contact-portrait__glow" aria-hidden="true" />
                <span className="contact-portrait__ring" aria-hidden="true" />
                <span className="contact-portrait__frame">
                  <img
                    className="contact-portrait__img"
                    src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                    alt={greeting.title}
                  />
                </span>
              </div>
            </Fade>

            <Fade bottom duration={900} distance="24px" delay={140}>
              <div className="contact-hero__body">
                <p className="contact-eyebrow">
                  <span className="contact-eyebrow__dot" aria-hidden="true" />
                  Replies within 24 hours
                </p>
                <h1 className="contact-hero__title">{ContactData["title"]}</h1>
                <p className="contact-hero__text">
                  {ContactData["description"]}
                </p>

                <div className="contact-hero__actions">
                  {mailtoLink && (
                    <Button text="Send a message" href={mailtoLink.link} />
                  )}
                  <Button
                    text="See My Resume"
                    ghost={true}
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                </div>

                <SocialMedia theme={theme} />
              </div>
            </Fade>
          </section>

          <section className="contact-cards">
            <Fade bottom duration={900} distance="24px" delay={80}>
              <article className="contact-card">
                <div className="contact-card__art" aria-hidden="true">
                  <BlogsImg theme={theme} />
                </div>
                <div className="contact-card__body">
                  <h2 className="contact-card__title">
                    {blogSection["title"]}
                  </h2>
                  <p className="contact-card__text">
                    {blogSection["subtitle"]}
                  </p>
                  <Button
                    text="Visit My Blogsite"
                    newTab={true}
                    href={blogSection.link}
                  />
                </div>
              </article>
            </Fade>

            <Fade bottom duration={900} distance="24px" delay={200}>
              <article className="contact-card">
                <div className="contact-card__art" aria-hidden="true">
                  <AddressImg theme={theme} />
                </div>
                <div className="contact-card__body">
                  <h2 className="contact-card__title">
                    {addressSection["title"]}
                  </h2>
                  {locationParts.length > 0 && (
                    <p className="contact-card__meta">
                      {locationParts.join(" · ")}
                    </p>
                  )}
                  <p className="contact-card__text">
                    {addressSection["subtitle"]}
                  </p>
                  {phoneSection.title ? (
                    <>
                      <h3 className="contact-card__subtitle">
                        {phoneSection["title"]}
                      </h3>
                      <p className="contact-card__text">
                        {phoneSection["subtitle"]}
                      </p>
                    </>
                  ) : null}
                  {addressSection.location_map_link && (
                    <Button
                      text="Visit on Google Maps"
                      newTab={true}
                      href={addressSection.location_map_link}
                    />
                  )}
                </div>
              </article>
            </Fade>
          </section>
        </main>

        <Footer />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Contact;
