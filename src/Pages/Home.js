// import { Link } from "react-router-dom";
import { Footer } from "../component/footer";
import style from "../Style/Home.module.css";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./Skills"
// import pdf from "../../src/resume/resume.pdf"

function Home() {
  return (
    <div className="mainBox">
      <div className={style.container}>
        <div className={style.title}>
          <p> Hello, I'm a</p>

          <h2> Full Stack Web Developer</h2>

          <a href="https://drive.google.com/file/d/1M3hLDMToWV3vpjh5AjfpCT48AN1DyFgE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button>Resume</button>
          </a>
        </div>
      </div>

      <div className="abooutSection">
      
        <About  className={style.about}/>
        <Skills className={style.Skills}/>
        <Project className={style.Project}/>
        <Contact className={style.Contact}/>
        <Footer className={style.Footer}/>
      </div>
    </div>
  );
}
export default Home;

// https://drive.google.com/file/d/1M3hLDMToWV3vpjh5AjfpCT48AN1DyFgE/view?usp=sharing