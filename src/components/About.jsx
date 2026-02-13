import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.content}>
        <h3>About Me</h3>
        <hr />
        <p className={styles.maincontent}>
          I am a passionate web developer learning new concept <br></br>with
          handling all my college stuffs and home tution
        </p>
        <p>Age.......20</p>
        <p>Education.....Ty BSC IT</p>
        <p>Residence........India</p>
      </div>
    </div>
  );
};

export default About;
