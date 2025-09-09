import style from "../Style/about.module.css";
import { useLocation } from "react-router-dom";
import profile from "../image/profile.png.jpg";
import { TypeAnimation } from "react-type-animation";

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
          <div className={style.textPart}>
            <div className={style.textanimation}>
              <TypeAnimation
                sequence={[
                  "I am Abhishek Kumar Amber Web Developer",
                  1000,
                  "I am Abhishek Kumar Amber and I am a Problem Solver ",
                  1000,
                  "I am Abhishek Kumar Amber and I am a Coder ",
                  1000,
                  "I am Abhishek Kumar Amber and I am a Coder ",
                  1000,
                ]}
                speed={30} // Custom Speed from 1-99 - Default Speed: 40
                style={{ fontSize: "1.1em", color: "teal", fontWeight: "700" }}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
            </div>

            <p>
              Full Stack Developer with 3.5+ years of experience, specializing in building scalable, high-performance web applications with React.js, Next.js, Node.js, Express.js, and SQL. Proficient in agile development, performance optimization, and cross-functional collaboration, focused on delivering clean, efficient code and seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
