import style from "../Style/about.module.css";
import { useLocation } from "react-router-dom";
import profile from "../image/profile.png.jpg";
import { TypeAnimation } from 'react-type-animation';

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

           
            <h3>
             

            <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'I m Abhishek Kumar Amber Web Developer',
    1000,
    'I m Abhishek Kumar Amber and I m a Problem Solver ',
    1000,
    'I m Abhishek Kumar Amber and I m a Coder ',
    1000,
    'I m Abhishek Kumar Amber and I m a Coder ',
    1000,
    ]}
    speed={30} // Custom Speed from 1-99 - Default Speed: 40
    style={{ fontSize: '1.2em' }}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />

            <p>
            A passionate Full Stack Web Developer, Dedicated to robust applications. Extensive expertise in website architecture and web design ans web API design. Problem-solving mindset with a goal to optimize my application for better stability.
            </p>
            
            </h3>




                   </div>
      </div>
    </div>
  );
}
export default About;
