import React from "react";
import styles from "./Project.module.css";

const projectData = [
  {
    title: "Minimalist Task Manager",
    description:
      "An interactive task manager built using React Hooks to handle component state and form handling. It demonstrates effective CRUD (Create, Read, Update, Delete) operations.",
    techStack: "Javascript,React,Html,Css",
    livelink: "",
  },
  {
    title: "Netflix Clone",
    description:
      "A responsive, component-driven layout designed to mimic a popular streaming service interface",
    techStack: "Javascript,Html,Css",
    livelink: "",
  },
];
const Projects = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "40px" }}>Projects</h1>
      <div id="project" className={styles.cardContainer}>
        {projectData.map((item, id) => {
          return (
            <div className={styles.cards}>
              <div key={id} className={styles.cardContent}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h4>TechStack:{item.techStack}</h4>
                <button onclick={item.livelink}>Livelink</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
