import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault(); //this will prevent quick scrolling or jatak se janese rokega
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h5>Web Developer</h5>
      </div>

      <div className={styles.navLinks}>
        <a
          className={styles.hover}
          onClick={(e) => scrollToSection(e, "about")}
        >
          About
        </a>
        <a
          className={styles.hover}
          onClick={(e) => scrollToSection(e, "project")}
        >
          Project
        </a>

        <a
          className={styles.hover}
          onClick={(e) => scrollToSection(e, "contact")}
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
