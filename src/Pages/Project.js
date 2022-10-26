import style from "../Style/project.module.css";
import { useLocation } from "react-router-dom";

function Project() {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === "/project" ? style.about : style.containers
      }
    >
      <div className={style.titles}>
        <p>Projects</p>
        <div className={style.profiles}>
          <div>
            <img
              src="https://www.kindmeal.my/photos/article/20/20186-l.jpg"
              alt="KindMeal"
            />
            <h1>Kindmeal.my</h1>
            <p>KindMeal is Malaysia's pioneering meat-free lifestyle platfom. </p>
            Tech Stack: <span>HTML5, CSS 3, JavaScript</span>
            <br /> <br />
            <div  className={style.hoisting}>
            
            <button>  <a href="https://github.com/abhiamber/knowing-kiss-8592" target="_blank" rel="noopener noreferrer">  Git Repo</a></button>
            <button>  <a href="https://kind-mealclone.netlify.app/" target="_blank" rel="noopener noreferrer">Live Site </a>  </button>
            </div>
            
            </div>

          <div>
            <img
              src="https://media.istockphoto.com/photos/children-visiting-the-library-picture-id1421824569?b=1&k=20&m=1421824569&s=170667a&w=0&h=LrBS7IR6nlDn1mi-_W5j1inArGZnG-nsgYSq7kF7okU="
              alt="IdeaKart"
            />
            <h1>IdeaKart</h1>
            <p>Ideakart is a site that gives u an idea about the book you want to buy. </p>
            Tech Stack: <span>HTML5, CSS 3, JavaScript</span>
            
            <br /> <br />
            <div  className={style.hoisting}>
            
            <button> <a  href="https://github.com/abhiamber/fabulous-vest-203-"  target="_blank" rel="noopener noreferrer"> Git Repo</a></button>
            <button> <a  href="https://fabulous-vest-203.vercel.app/"   target="_blank" rel="noopener noreferrer">Live Site</a> </button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="TripVilaas"
            />
            <h1>Tripvillas</h1>
            <p>Tripvillas is one of Asia's largest Holiday Home Rental Companies.</p>
            Tech Stack: <span>HTML5, CSS 3, JavaScript, React Js</span>
            
            <br /> <br />
            <div  className={style.hoisting}>
            
            <button> <a href="https://github.com/abhiamber/enchanted-pest-5256" target="_blank" rel="noopener noreferrer"> Git Repo</a> </button>
            <button> <a href="https://tripvillascloneproject.netlify.app/index.html" target="_blank" rel="noopener noreferrer">Live Site</a> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
