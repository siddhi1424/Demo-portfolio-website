import React from "react";
import styles from "./Hero.module.css";
import profileimg from "../assets/profile.jpg";
import resumeFile from "../assets/Resume.pdf";
const Herosection = () => {
  //resume file

  return (
    <div className={styles.herosection}>
      <div>
        <h1>Malti devs</h1>
        <p>Web Developer</p>
        <a href={resumeFile} download="Resume.pdf">
          <button> ⬇️Download cv</button>
        </a>
      </div>
      <div>
        <img className={styles.img} src={profileimg}></img>
      </div>
    </div>
  );
};

export default Herosection;
