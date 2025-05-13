import { Link } from "react-router-dom";

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
          <img src="src/assets/icons8-github-logo-48.png" className="h-8"/>
          </Link>
          <Link to="https://www.facebook.com/pattaraporn.sritirat.2024">
          <img src="src/assets/icons8-facebook-logo-50.png" className="h-8"/>
          </Link>
          <Link to="https://www.instagram.com/_yypatt/">
          <img src="src/assets/icons8-instagram-logo-60.png" className="h-9"/>
          </Link>
          </div>
          
        </div>

        <img src="src/assets/picture-yy-Photoroom.png" className="h-[600px] -mt-20 relative -ml-72"/>
        <img src="src/assets/icons8-visual-studio-50.png" className="h-8 rotate-12 absolute ml-[1000px] mb-64"/>      
        <img src="src/assets/library.png" className="absolute h-10 -rotate-12 ml-60 mb-48"/>  
        <img src="src/assets/icons8-javascript-50.png" className="h-9 rotate-12 ml-[1000px] mb-16 absolute"/>
        <img src="src/assets/icons8-github-50 (2).png" className="h-9 absolute ml-72 mb-96"/>
        <img src="src/assets/icons8-tailwind-css-100.png" className="h-12 rotate-12 mb-[550px] absolute ml-[460px]"/>
        <img src="src/assets/icons8-figma-50.png" className="absolute h-8 rotate-12 mb-[450px] ml-[950px]"/>
        <img src="src/assets/icons8-coding-50.png" className="h-8 absolute ml-[750px] mb-[570px]"/>
      </div>
    </>
  );
}

export default Home;
