import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>c.michealworrell@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/michealworrell" target="_blank">
            <Gitub color="white" size={"3rem"} />
          </a>
          {/* <a href="https://github.com/" target="_blank">
            <LinkedIn color="white" size={"3rem"} />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
