import style from "../Style/skills.module.css";
import { useLocation } from "react-router-dom";
import profile from "../image/profile.png";

function Skills() {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === "/skills" ? style.about : style.containers
      }
    >
      <div className={style.titles}>
        <p>My skills</p>
        <div className={style.profiles}>
          <div>
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"
              alt="HTML5"
            />
            <h1>HTML5</h1>
          </div>

          <div>
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"
              alt="CSS3"
            />
            <h1> CSS 3</h1>
          </div>

          <div>
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"
              alt="Javascript"
            />

            <h1>JavaScript</h1>
          </div>
          <div>
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg"
              alt="React"
            />
            <h1>React Js</h1>
          </div>

          <div>
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg"
              alt="Redux"
            />
            <h1>Redux</h1>
          </div>
          <div>
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg"
              alt="Node js"
            />
            <h1>Node Js</h1>
          </div>

          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmtAv2G_LoVvYzVphgkaW6W1yj3z0tR7igw&usqp=CAU"
              alt="Express js"
            />

            <h1>Express Js</h1>
          </div>

          <div>
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg"
              alt="Mongo db"
            />
            <h1>Mongo DB</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
