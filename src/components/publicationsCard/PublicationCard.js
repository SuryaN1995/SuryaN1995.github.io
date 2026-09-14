import React from "react";
import "./PublicationCard.css";
import { Fade } from "../reveal/Reveal";

export default function PublicationCard({ pub }) {
  return (
    <Fade bottom duration={1200} distance="30px">
      <a
        className="publication-card-div"
        href={pub.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="publication-name">{pub.name}</p>
        <p className="publication-description">{pub.description}</p>
        <div className="publication-details">
          <p className="publication-creation-date subTitle">
            Published on {pub.createdAt.split("T")[0]}
          </p>
        </div>
      </a>
    </Fade>
  );
}
