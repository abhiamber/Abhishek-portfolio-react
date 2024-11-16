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
              src="https://user-images.githubusercontent.com/102507444/210265588-bf6a5fe7-62ae-4269-9197-bbbb0b1bdc63.png"
              alt="KindMeal"
            />
            <h1>Kindmeal.my</h1>
            <p>
            Developed a clone of KindMeal, a meal-sharing platform, with a focus on replicating its core features and functionality.
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
              src="https://github.com/user-attachments/assets/ab7af35f-ab06-4fa9-a70b-46d031aa96e9"
              alt="Ideakart"
            />
            <h1>Task Management</h1>
            <p>
            Built a task management web application with intuitive user interfaces and robust functionality. Features include task creation, categorization, prioritization, deadline tracking, and user collaboration. Integrated real-time updates for seamless team productivity. Designed with scalability and a focus on user experience.
            </p>
            Tech Stack:{" "}
            <span>HTML5, CSS 3, React Js, Express JS, MongoDb</span>
            <br /> <br />
            <div className={style.hoisting}>
              <button>
                {" "}
                <a
                  href="https://github.com/abhiamber/Task-management-web-application"
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
                  href="https://task-management-web-application-beige.vercel.app/"
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
            Developed an instant communication platform with user authentication, supporting real-time one-to-one/group
            chats and video calls, with call management features like ring notifications, call control.
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
                  href="https://chatapp2121.netlify.app/"
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
              src="https://user-images.githubusercontent.com/102507444/213928090-cbaf214f-8d71-4e0a-b569-4fc2a0e71889.png"
              alt="Purpelbeauty"
            />
            <h1>Purplle</h1>
            <p>
            Developed a full-stack e-commerce platform with advanced user and admin functionalities. Features include dynamic product catalog, secure checkout, real-time order tracking, and an admin panel for inventory, orders and user management. Designed for scalability and seamless user experience.
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
                  href="https://github.com/abhiamber/Purpple.com-Clone"
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
                  href="https://frontend-lyart-alpha.vercel.app/"
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
