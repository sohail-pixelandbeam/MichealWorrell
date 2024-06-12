import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import girl from "../../img/girl.png";
import figma from "../../img/figma.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hello! I Am</span>
          <span>Micheal Worrell</span>
          <span>
            UX/UI Designer and Full Stack Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button">Hire me</button>
          {/* <input type="submit" value="Send" className="button" /> */}
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/michealworrell" target="_blank">
          <img src={Github} alt="gitHub" />
          </a>
          {/* <a href="https://github.com/" target="_blank">
          <img src={LinkedIn} alt="linkedin" />
          </a> */}
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt=""
         width="300px"
         style={{marginLeft:'-50px'}}
        />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
          // width='120px'
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={figma} imgWidth={'100px'} text1="UX/UI" text2="Designer" />
        </motion.div>

{/*         
        <motion.div
          initial={{ top: "-54%", left: "74%" }}
          whileInView={{ left: "58%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} imgWidth='80px' text1="E-Commerce" text2=" Developer" />
        </motion.div> */}

        {/* animation */}
        <motion.div
          initial={{ left: "1%", top: "75%" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={figma} imgWidth={'100px'} text1="UX/UI" text2="Designer" /> */}
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
