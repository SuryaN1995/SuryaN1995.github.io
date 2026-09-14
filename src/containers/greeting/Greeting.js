import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "../../components/reveal/Reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={1200} distance="30px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            {greeting.nickname && (
              <span className="greeting-nickname">{greeting.nickname}</span>
            )}
            <h1 className="greeting-text">{greeting.title}</h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <SocialMedia theme={theme} />
            <div className="portfolio-repo-btn-div">
              <Button text="Resume" newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
