import style from "../Style/skills.module.css";
import { useLocation } from "react-router-dom";

function Skills() {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === "/skills" ? style.about : style.containers
      }
    >
      <div className={style.titles}>
        <p>My skills & Tools</p>
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
              src="https://www.svgrepo.com/show/330132/chakraui.svg"
              alt="Chakra Ui"
            />
            <h1>Chakra Ui</h1>
          </div>

          <div>
            <img
              src="https://www.svgrepo.com/show/354112/nextjs.svg"
              alt="Nextjs"
            />
            <h1>Next JS</h1>
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
              src="https://www.svgrepo.com/show/330398/express.svg"
              alt="Express"
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

          <div>
            <img
              src="https://www.svgrepo.com/show/354272/redis.svg"
              alt="Redis"
            />
            <h1>Redis</h1>
          </div>

          <div>
            <img
              src="https://www.svgrepo.com/show/378420/github-fill.svg"
              alt="GIthub"
            />
            <h1>GitHub</h1>
          </div>

          <div>
            <img
              src="https://www.svgrepo.com/show/452129/vs-code.svg"
              alt="VS Code"
            />
            <h1>VS Code</h1>
          </div>

          <div>
            <img
              src="https://www.svgrepo.com/show/376339/netlify.svg"
              alt="Postman"
            />
            <h1>Netlify</h1>
          </div>

          <div>
            <img
              src="https://www.svgrepo.com/show/354202/postman-icon.svg"
              alt="Postman"
            />
            <h1>Postman</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
