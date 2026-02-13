import React from "react";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Herosection />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
