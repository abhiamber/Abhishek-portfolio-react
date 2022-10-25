import { Link } from "react-router-dom";
import style from "../Style/Home.module.css";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./Skills"

function Home() {
  return (
    <div className="mainBox">
      <div className={style.container}>
        <div className={style.title}>
          <p> Hello, I'm a</p>

          <h2> Full Stack Web Developer</h2>

          <Link>
            <button>Resume</button>
          </Link>
        </div>
      </div>

      <div className="abooutSection">
        <About />
        <Skills/>
        <Project/>
        <Contact/>
      </div>
    </div>
  );
}
export default Home;
