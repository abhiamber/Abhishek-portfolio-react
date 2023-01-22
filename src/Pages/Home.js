// import { Link } from "react-router-dom";
import { Footer } from "../component/footer";
import GIthub from "../component/GIthub";
import style from "../Style/Home.module.css";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./Skills";
// import Abhishek_Amber_Resume from "../resume/Abhishek_ Amber_Resume.pdf"

import { TypeAnimation } from "react-type-animation";

function Home() {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1M3hLDMToWV3vpjh5AjfpCT48AN1DyFgE/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div className="mainBox">
      <div className={style.container}>
        <div className={style.title}>
          <p> Hello, I'm a</p>

          <h2>
            <TypeAnimation
              sequence={["Full Stack Web Developer", 100, ""]}
              speed={35}
              wrapper="h3"
              repeat={Infinity}
            />
          </h2>

          <a
            href="https://drive.google.com/uc?id=1M3hLDMToWV3vpjh5AjfpCT48AN1DyFgE&export=download"
            // target="_blank"
          >
            <button onClick={handleClick}>Resume</button>
          </a>
        </div>
      </div>

      <div className="abooutSection">
        <About className={style.about} />
        <Skills className={style.Skills} />
        <Project className={style.Project} />
        <GIthub />
        <Contact className={style.Contact} />
        <Footer className={style.Footer} />
      </div>
    </div>
  );
}
export default Home;

// https://drive.google.com/file/d/1M3hLDMToWV3vpjh5AjfpCT48AN1DyFgE/view?usp=sharing

// https://drive.google.com/uc?id=1M3hLDMToWV3vpjh5AjfpCT48AN1DyFgE&export=download
