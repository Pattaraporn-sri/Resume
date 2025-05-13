import certificate from "../src/img/Certificate2.jpg";
import Github from "../src/img/icons8-github-logo-94.png";
import Postman from "../src/img/postman.webp";
import MongDB from "../src/img/thumbnail-formio-partner-mongodb.webp";
import clickup from "../src/img/clickup-logo-png_seeklogo-389752.png";
import figma from "../src/img/icons8-figma-96 (1).png";
import mockoon from "../src/img/mockoon.webp";
import tailwindcss from "../src/img/icons8-tailwind-css-96.png";
import express from "../src/img/icons8-express-js-50.png";
import node from "../src/img/icons8-node-js-64.png";
import gitLab from "../src/img/icons8-git-96.png";
import html from "../src/img/icons8-html-96.png";
import css from "../src/img/icons8-css-96.png";
import js from "../src/img/icons8-js-96.png";
import react from "../src/img/icons8-react-50.png";
import typescript from "../src/img/icons8-typescript-96.png";
import redux from "../src/img/icons8-redux-96.png";
import { Button, Modal } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

function Expirence() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#E6D8C7] h-100vh text-[#0B1957] font-Prompt pb-20">
      <p className="text-3xl font-bold ml-[700px] pt-14 mb-8">My Experience</p>
      <div className="shadow-[0px_4px_18px_0px_rgba(0,_0,_0,_0.1)] w-[1200px] ml-44 rounded-xl flex justify-center p-10">
        <div>
          <li className="font-semibold text-lg">2024-2025</li>

          <p className="ml-10 text-xs">
            บริษัท วันจีโอเซอร์เวย์ จำกัด (One Geo Survey Co., Ltd.)
          </p>
          <p className="ml-10 text-xs">
            ช่วงเวลา 18 พ.ย. 2567 - 14 มี.ค. 2568 (ระยะเวลา 4 เดือน)
          </p>
          <p className="ml-10 text-xs">ฝึกตำแหน่ง Font-End Developer</p>
        </div>

        <div className="text-sm ml-10">
          <div className="text-lg font-medium">What I Learned</div>
          <p className="mt-2 w-[730px]">
            <li>พัฒนาเว็บไซต์โดยใช้ React และ TypeScript</li>
            <li>เชื่อมต่อ API กับ Backend Developer</li>
            <li>จัดการ UI ให้ตรงตาม Figma ที่ได้รับจาก UX/UI Designer</li>
            <li>
              เรียนรู้การทำงานเป็นทีม การสื่อสารกับทางําน Back-End Developer และ
              UX/UI Designer
            </li>
            <li>การทำงานแบบ Scrum</li>
            <li>
              เรียนรู้การจัดการเวลา และทำงานที่ได้รับมอบหมายตรงตามเวลาที่กำหนด
            </li>
          </p>

          <Button
            className="bg-[#A0B2C2] border-2 border-[#353e68] mt-3 w-24 h-8 rounded-lg hover:bg-[#353e68] hover:text-white hover:duration-300 font-Prompt"
            onClick={showModal}
          >
            Certiificate
          </Button>
          <Modal
            title={
              <p className="text-[#0B1957] text-center text-xl">Certificate</p>
            }
            open={isModalOpen}
            onCancel={handleOk}
            footer={null}
          >
            <img src={certificate} />
          </Modal>

          <hr className="border-[1px] border-[#353e68] mt-5" />

          <div className="mt-4 text-lg font-medium">Responsibilities</div>
          <div className="mt-2">
            <li>พัฒนา Frontend ด้วย React และ TypeScript</li>
            <li>ทำงานร่วมกับ UX/UI Designer และ Backend Developer</li>
            <li>ใช้ GitLab/GitHub ในการจัดการเวอร์ชันและ pull request</li>
            <li>เขียนโค้ดตามแนวทาง Component-Based</li>
            <li>เชื่อมต่อ API และจัดการ State ด้วย Context API</li>
          </div>
          <hr className="border-[1px] border-[#353e68] mt-5" />

          <div className="mt-5 text-lg font-medium">Skills</div>
          <div className="flex flex-wrap justify-evenly w-[700px] text-center h-52 mt-5">
            <div>
              <img src={Github} className="h-16" />
              <p>GitHub</p>
            </div>
            <div>
              <img src={gitLab} className="h-16" />
              <p>GitLab</p>
            </div>
            <div>
              <img src={tailwindcss} className="h-16" />
              <p>TailwindCSS</p>
            </div>
            <div>
              <img src={figma} className="h-16" />
              <p>figma</p>
            </div>
            <div>
              <img src={mockoon} className="h-16 rounded-2xl" />
              <p>Mockoon</p>
            </div>
            <div>
              <img src={clickup} className="h-16 rounded-2xl" />
              <p>ClickUp</p>
            </div>
            <div>
              <img src={Postman} className="h-16 rounded-2xl" />
              <p>Postman</p>
            </div>
            <div>
              <img src={MongDB} className="h-16 rounded-2xl" />
              <p>MongoDB</p>
            </div>
            <div>
              <img src={node} className="h-16" />
              <p>Node.js</p>
            </div>
            <div>
              <img src={express} className="h-16" />
              <p>Express.js</p>
            </div>
            <div>
              <img src={html} className="h-16" />
              <p>HTML</p>
            </div>
            <div>
              <img src={css} className="h-16" />
              <p>CSS</p>
            </div>
            <div>
              <img src={react} className="h-16" />
              <p>React</p>
            </div>
            <div>
              <img src={typescript} className="h-16" />
              <p>TypeScript</p>
            </div>
            <div>
              <img src={js} className="h-16" />
              <p>JavaScript</p>
            </div>
            <div>
              <img src={redux} className="h-16" />
              <p>Redux</p>
            </div>
          </div>
          <hr className="border-[1px] border-[#353e68] mt-5" />

          <div className="mt-5 text-lg font-medium">Methodology</div>
          <p className="mt-3  w-[720px]">
            ใช้แนวทางการทำงานแบบ Scrum ซึ่งเป็นหนึ่งในรูปแบบของ Agile
            Methodology โดยเน้นการทำงานเป็น Sprint ซึ่งแต่ละ Sprint
            จะมีระยะเวลาประมาณ 2 สัปดาห์ โดยมีการประชุม Stand-up ทุกเช้า, วางแผน
            Sprint อย่างเป็นระบบ และจัด Sprint Review & Retrospective
            เพื่อประเมินและปรับปรุงกระบวนการทำงานอย่างต่อเนื่อง
          </p>
          <hr className="border-[1px] border-[#353e68] mt-8" />

          <Link to="/mywork">
            <button className="bg-[#A0B2C2] border-2 border-[#353e68] mt-3 w-20 h-8 rounded-lg hover:bg-[#353e68] hover:text-white hover:duration-300">
              My work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Expirence;
