import { Link } from "react-router-dom";
import githublogo from "../src/img/icons8-github-logo-48.png"
import facebooklogo from "../src/img/icons8-facebook-logo-50.png"
import ig from "../src/img/icons8-instagram-logo-60.png"
import yy from "../src/img/picture-yy-Photoroom.png"
import visaulstudio from "../src/img/icons8-visual-studio-50.png"
import library from "../src/img/library.png"
import java from "../src/img/icons8-javascript-50.png"
import github from "../src/img/icons8-github-50 (2).png"
import tailwind from "../src/img/icons8-tailwind-css-100.png"
import figma from "../src/img/icons8-figma-50.png"
import coding from "../src/img/icons8-coding-50.png"

function Home() {
  return (
    <>
      <div className="flex justify-center items-center bg-[#E6D8C7] h-[94.5vh] text-[#0B1957]">
        <div className="w-[900px] h-[350px] flex flex-col justify-center pl-10 rounded-3xl shadow-[0px_4px_18px_0px_rgba(0,_0,_0,_0.1)]">
          <p className="text-xl"> Hi! I'm </p>
          <p className="font-CreteRound text-5xl mt-2">Pattaraporn Sritirat</p>
          <p className="mt-2 text-lg">Font End Developer</p>
          <p className="w-[580px] mt-2 font-Prompt font-light"> สนใจการพัฒนาเว็บไซต์ที่ใช้งานง่ายและตอบโจทย์ผู้ใช้ มีประสบการณ์ในการใช้ React และใส่ใจในด้าน UI/UX ตั้งใจพัฒนาทักษะเพื่อเติบโตในสายงาน Front-End Developer</p>
          <div className="flex mt-5">
            <Link to="https://github.com/Pattaraporn-sri" >
          <img src={githublogo} className="h-8"/>
          </Link>
          <Link to="https://www.facebook.com/pattaraporn.sritirat.2024">
          <img src={facebooklogo} className="h-8"/>
          </Link>
          <Link to="https://www.instagram.com/_yypatt/">
          <img src={ig} className="h-9"/>
          </Link>
          </div>
          
        </div>

        <img src={yy} className="h-[600px] -mt-20 relative -ml-72"/>
        <img src={visaulstudio} className="h-8 rotate-12 absolute ml-[1000px] mb-64"/>      
        <img src={library} className="absolute h-10 -rotate-12 ml-60 mb-48"/>  
        <img src={java} className="h-9 rotate-12 ml-[1000px] mb-16 absolute"/>
        <img src={github} className="h-9 absolute ml-72 mb-96"/>
        <img src={tailwind} className="h-12 rotate-12 mb-[550px] absolute ml-[460px]"/>
        <img src={figma} className="absolute h-8 rotate-12 mb-[450px] ml-[950px]"/>
        <img src={coding} className="h-8 absolute ml-[750px] mb-[570px]"/>
      </div>
    </>
  );
}

export default Home;
