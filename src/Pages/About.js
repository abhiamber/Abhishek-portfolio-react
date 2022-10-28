import style from "../Style/about.module.css";
import { useLocation } from "react-router-dom";
import profile from "../image/profile.png";

function About() {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === "/about" ? style.about : style.containers
      }
    >
      <div className={style.titles}>
        <p>About me</p>
        <div className={style.profiles}>
            {" "}
            <img
              src={profile}
              alt="AbhishekImage"
              width="350px"
              style={{ borderRadius: "50%" }}
            />

            <h3> I'm Abhishek Kumar Amber and I'm a Problem Solver | Coder | Web Developer
            <p>
            A passionate Full Stack Web Developer, Dedicated to developing robust applications. Extensive expertise in website architecture, design, and web design, and web API designs. Problem-solving mindset with a goal to optimize my application for better stability and speed. Love to work in a team.
          </p>

            
            
            </h3>
                   </div>
      </div>
    </div>
  );
}
export default About;
