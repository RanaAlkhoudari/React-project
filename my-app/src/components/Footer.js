import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <p className="footer">
      Made with <FontAwesomeIcon icon={faHeart} className="icon" /> By Rana
      Alkhoudari
    </p>
  );
}

export default Footer;
