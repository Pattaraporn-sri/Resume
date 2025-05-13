import { Link } from "react-router-dom";
import todolist from "../src/img/ToDoList.png";
import DailyNems from "../src/img/DailyNews.png";
import demonslayer from "../src/img/Screenshot 2025-05-08 180630.png";
import framework from "../src/img/Framework.png";
import redux from "../src/img/Redux.png";
import tailwind from "../src/img/Tailwind.png";
import portfolio from "../src//img/portfolio.png";
import ModuleUI from "../src/img/ModuleUI.png";
import Game from "../src/img/React-Game.png";
import DremProperty from "../src/img/DreamProperties.png";

function Mywork() {
  return (
    <div className="bg-[#E6D8C7] h-full font-Prompt text-[#0B1957]">
      <p className="text-3xl font-semibold text-center pt-10 mb-8">
        My Project
      </p>
      {/* โปรเจคอสังหาริมทรัพย์ */}
      <div className="flex w-[1300px] pb-5 pt-1 mb-10 bg-slate-200 rounded-xl mt-10 ml-32 hover:scale-105 transition-transform duration-300">
        <img src={DremProperty} className="w-[500px] rounded-lg ml-4 mt-5" />
        <div className="ml-5">
          <p className="mt-12 text-2xl">โปรเจคคอสังหาริมทรัพย์</p>
          <p className="w-[700px] mt-3">
            เว็บไซต์สำหรับซื้ออสังหาฯในจังหวัดขอนแก่น ในส่วนของ Front-End ใช้
            React TypeScript JavaScript และในส่วนของ Back-End ใช้ Node.js
            Express โดยเชื่อมต่อข้อมูลกับ MongoDB Compass
          </p>
          <button className="bg-slate-300 w-52 h-9 mt-10 rounded-2xl border-2 border-gray-500 hover:bg-gray-400">
            <Link to="https://github.com/Pattaraporn-sri/DreamProperty-Frontend">source code Front-end</Link>
          </button>
          <button className="ml-5 bg-slate-300 w-52 h-9 rounded-2xl border-2 border-gray-500 hover:bg-gray-400">
            <Link to="https://github.com/Pattaraporn-sri/DreamProperty-Backend">source code Back-end</Link>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap flex-2 ml-10 justify-evenly pb-20">
        {/* To Do List */}
        <div className="w-96 pb-5 bg-slate-200 rounded-xl hover:scale-105 transition-transform duration-300">
          <img src={todolist} className="w-[350px] h-40 rounded-lg ml-4 mt-5" />
          <div>
            <p className="ml-5 mt-2 mb-2">TO DO LIST - MY REACT APP</p>
            <button className="bg-slate-300 ml-5 w-32 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
              <Link to="https://github.com/Pattaraporn-sri/To-Do-List">
                source code
              </Link>
            </button>
            <button className="bg-slate-300 ml-5 w-20 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
              <Link to="https://to-do-list-dusky-three-80.vercel.app/">
                Demo
              </Link>
            </button>
          </div>
        </div>

        {/* React Router DOM */}
        <div className="w-96 pb-5 bg-slate-200 rounded-xl hover:scale-105 transition-transform duration-300">
          <img
            src={DailyNems}
            className="w-[350px] h-40 rounded-lg ml-4 mt-5"
          />
          <p className="ml-5 mt-2 mb-2">Daily News - React Router dom</p>
          <button className="bg-slate-300 ml-5 w-32 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
            <Link to="https://github.com/Pattaraporn-sri/Daily-News">
              Source code
            </Link>
          </button>
          <button className="bg-slate-300 ml-5 w-20 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
            <Link to="https://daily-news-hazel.vercel.app/">Demo</Link>
          </button>
        </div>

        {/* Demon Slayer */}
        <div className="w-96 pb-5  bg-slate-200 rounded-xl hover:scale-105 transition-transform duration-300">
          <img
            src={demonslayer}
            className="w-[350px] h-40 rounded-lg ml-4 mt-5"
          />
          <p className="ml-5 mt-2 mb-2">Demon Slayer - API</p>
          <button className="bg-slate-300 ml-5 w-32 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
            <Link to="https://github.com/Pattaraporn-sri/API-Demon-Slayer">
              Source code
            </Link>
          </button>
          <button className="bg-slate-300 ml-5 w-20 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
            <Link to="https://api-demon-slayer-five.vercel.app/">Demo</Link>
          </button>
        </div>

        {/* React Framwork */}
        <div className="w-96 pb-5 bg-slate-200 rounded-xl mt-10 hover:scale-105 transition-transform duration-300">
          <img
            src={framework}
            className="w-[350px] h-40 rounded-lg ml-4 mt-5"
          />
          <div>
            <p className="ml-5 mt-2 mb-2">React Framework</p>
            <button className="bg-slate-300 ml-5 w-32 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
              <Link to="https://github.com/Pattaraporn-sri/React-Framework">
                source code
              </Link>
            </button>
            <button className="bg-slate-300 ml-5 w-20 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
              <Link to="https://react-framework-six.vercel.app/">Demo</Link>
            </button>
          </div>
        </div>

        {/* Redux */}
        <div className="w-96 pb-5 bg-slate-200 rounded-xl mt-10 hover:scale-105 transition-transform duration-300">
          <img src={redux} className="w-[350px] h-40 rounded-lg ml-4 mt-5" />
          <div>
            <p className="ml-5 mt-2 mb-2">Register - Redux</p>
            <button className="bg-slate-300 ml-5 w-32 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
              <Link to="https://github.com/Pattaraporn-sri/React-Redux">
                source code
              </Link>
            </button>
            <button className="bg-slate-300 ml-5 w-20 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
              <Link to="https://react-redux-six-ruddy.vercel.app/">Demo</Link>
            </button>
          </div>
        </div>

        {/* TailwindCSS */}
        <div className="w-96 pb-5 bg-slate-200 rounded-xl mt-10 hover:scale-105 transition-transform duration-300">
          <img src={tailwind} className="w-[350px] h-40 rounded-lg ml-4 mt-5" />
          <div>
            <p className="ml-5 mt-2 mb-2">TailwindCSS</p>
            <button className="bg-slate-300 ml-5 w-32 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
              <Link to="https://github.com/Pattaraporn-sri/React-tailwind">
                source code
              </Link>
            </button>
            <button className="bg-slate-300 ml-5 w-20 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
              <Link to="http://react-tailwind-blush.vercel.app/">Demo</Link>
            </button>
          </div>
        </div>

        {/* Portfolio */}
        <div className="w-96 pb-5 bg-slate-200 rounded-xl mt-10 hover:scale-105 transition-transform duration-300">
          <img
            src={portfolio}
            className="w-[350px] h-40 rounded-lg ml-4 mt-5"
          />
          <div>
            <p className="ml-5 mt-2 mb-2">Portfolio</p>
            <button className="bg-slate-300 ml-5 w-32 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
              <Link to="https://github.com/Pattaraporn-sri/Portfolio">
                source code
              </Link>
            </button>
            <button className="bg-slate-300 ml-5 w-20 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
              <Link to="https://portfolio-1ym7u4w2n-pattras-projects.vercel.app/">
                Demo
              </Link>
            </button>
          </div>
        </div>

        {/* Module Stytle & UI */}
        <div className="w-96 pb-5 bg-slate-200 rounded-xl mt-10 hover:scale-105 transition-transform duration-300">
          <img src={ModuleUI} className="w-[350px] h-40 rounded-lg ml-4 mt-5" />
          <div>
            <p className="ml-5 mt-2 mb-2">TailwindCSS</p>
            <button className="bg-slate-300 ml-5 w-32 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
              <Link to="https://github.com/Pattaraporn-sri/React-UI-Module">
                source code
              </Link>
            </button>
            <button className="bg-slate-300 ml-5 w-20 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
              <Link to="https://react-ui-module.vercel.app/">Demo</Link>
            </button>
          </div>
        </div>

        {/* React volcabulary Game */}
        <div className="w-96 pb-5 bg-slate-200 rounded-xl mt-10 hover:scale-105 transition-transform duration-300">
          <img src={Game} className="w-[350px] h-40 rounded-lg ml-4 mt-5" />
          <div>
            <p className="ml-5 mt-2 mb-2">Volcabulary - React Game</p>
            <button className="bg-slate-300 ml-5 w-32 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
              <Link to="https://github.com/Pattaraporn-sri/React-Game">
                source code
              </Link>
            </button>
            <button className="bg-slate-300 ml-5 w-20 h-8 rounded-xl border-2 border-gray-500 hover:bg-gray-400">
              <Link to="https://react-game-psi.vercel.app/">Demo</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mywork;
