import style from "../Style/project.module.css";
import { useLocation } from "react-router-dom";
// import skincareimg from "../image/Skincarescreenshot.png";
// import chatappimg from "../image/chatpp.png";

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
              src="https://user-images.githubusercontent.com/102507444/213923487-91c88f80-7d1f-49db-9e7b-66c1d0659cab.png"
              alt="TripVilaas"
            />
            <h1>Tripvillas</h1>
            <p>
              Tripvillas is one of Asia's largest Holiday Home Rental Companies.
            </p>
            Tech Stack: <span >HTML5, CSS 3, JavaScript</span>
            <br /> <br />
            <div className={style.hoisting}>
              <button>
                {" "}
                <a
                  href="https://github.com/abhiamber/enchanted-pest-5256"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Git Repo
                </a>{" "}
              </button>
              <button>
                {" "}
                <a
                  href="https://tripvillascloneproject.netlify.app/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>{" "}
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://user-images.githubusercontent.com/102507444/210265588-bf6a5fe7-62ae-4269-9197-bbbb0b1bdc63.png"
              alt="KindMeal"
            />
            <h1>Kindmeal.my</h1>
            <p>
              KindMeal is Malaysia's pioneering meat-free lifestyle platfom.{" "}
            </p>
            Tech Stack: <span>HTML5, CSS 3, JavaScript, React Js</span>
            <br /> <br />
            <div className={style.hoisting}>
              <button>
                {" "}
                <a
                  href="https://github.com/abhiamber/knowing-kiss-8592"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Git Repo
                </a>
              </button>
              <button>
                {" "}
                <a
                  href="https://kind-mealclone.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site{" "}
                </a>{" "}
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://i.postimg.cc/bN0yLgLP/Screenshot-1075.png"
              alt="IdeaKart"
            />
            <h1>IdeaKart</h1>
            <p>
              Ideakart is a site that gives you an idea about the book you want
              to buy.{" "}
            </p>
            Tech Stack: <span>HTML5, CSS 3, JavaScript</span>
            <br /> <br />
            <div className={style.hoisting}>
              <button>
                {" "}
                <a
                  href="https://github.com/abhiamber/fabulous-vest-203-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Git Repo
                </a>
              </button>
              <button>
                {" "}
                <a
                  href="https://fabulous-vest-203.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>{" "}
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://i.postimg.cc/bN0yLgLP/Screenshot-1075.png"
              alt="Ideakart"
            />
            <h1>Ideakart</h1>
            <p>
              Ideakart is a site that gives you an idea about the book you want
              to buy.
            </p>
            Tech Stack:{" "}
            <span>HTML5, CSS 3, React Js, Chakra UI, Express JS, MongoDb</span>
            <br /> <br />
            <div className={style.hoisting}>
              <button>
                {" "}
                <a
                  href="https://github.com/Anukriti-Nawani/IdeaKart-hilarious-flame-4763"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Git Repo
                </a>{" "}
              </button>
              <button>
                {" "}
                <a
                  href="https://playful-hummingbird-6d8d46.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>{" "}
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://i.postimg.cc/Zq4CZvmD/Web-capture-19-12-2022-173114-timely-cucurucho-1b7757-netlify-app.jpg"
              alt="SkinCare"
            />
            <h1>Skin Store</h1>
            <p>
              Skin Store is the online platform to buy your best skin care, hair
              care, hair growth and makeup products,
            </p>
            Tech Stack:{" "}
            <span>
              HTML5, CSS 3, React Js, Chakra UI, Express JS, MongoDb, JWT
            </span>
            <br /> <br />
            <div className={style.hoisting}>
              <button>
                {" "}
                <a
                  href="https://github.com/AnasQu7/-organic-horn-8005"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Git Repo
                </a>{" "}
              </button>
              <button>
                {" "}
                <a
                  href="https://timely-cucurucho-1b7757.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>{" "}
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://user-images.githubusercontent.com/102507444/210861508-43008ca8-8f9f-490e-ae88-658e0c0aae9f.png"
              // src={chatappimg}
              alt="chatapp"
            />
            <h1>Chat Application</h1>
            <p>
              This is the chat application where user can create chat one to one
              and in group as well.
            </p>
            Tech Stack:{" "}
            <span>
              HTML5, CSS 3, React Js, Chakra UI, Express JS, MongoDb,
              JWT,socket.io
            </span>
            <br /> <br />
            <div className={style.hoisting}>
              <button>
                {" "}
                <a
                  href="https://github.com/abhiamber/chat-application"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Git Repo
                </a>{" "}
              </button>
              <button>
                {" "}
                <a
                  href="https://gleeful-marigold-cd7ebf.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
