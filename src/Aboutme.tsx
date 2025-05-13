import yy from "../src/img/picture-yy2-Photoroom.png";
import { Timeline } from "antd";
import call from "../src/img/icons8-call-64.png";
import email from "../src/img/icons8-email-48 (1).png";
import line from "../src/img/icons8-line-50 (1).png";
import facebook from "../src/img/icons8-facebook-50 (3).png";
import ig from "../src/img/icons8-ig-50 (3).png";
import coffee from "../src/img/icons8-coffee-beans-50.png";
import exercise from "../src/img/icons8-exercise-48.png";
import cooking from "../src/img/icons8-cooking-64.png";

function Aboutme() {
  return (
    <>
      <div className="bg-[#E6D8C7] h-100vh text-[#0B1957] font-Prompt">
        <div className="pt-10">
          <div className="flex ">
            <div className="bg-[#909eaf] rounded-tr-full rounded-tl-full shadow-2xl"></div>
            <img src={yy} className="h-96 ml-40" />
            <div className="ml-8">
              <p className="text-5xl font-Prompt font-semibold text-[#0B1957] mt-20">
                Pattaraporn Sritirat
              </p>
              <p className="font-Prompt text-sm">Font-End Developer</p>
              <p className="text-2xl font-Prompt font-semibold mt-5">
                About me
              </p>
              <p className="w-[780px] mt-2">
                สวัสดีค่ะ ดิฉันนางสาวภัทราพร ศรีธิราช ชื่อเล่น ยาหยี
                จบการศึกษาจากมหาวิทยาลัยขอนแก่น วิทยาลัยการคอมพิวเตอร์
                สาขาภูมิสารสนเทศศาสตร์
                ดิฉันมีความหลงไหลในงานด้านการพัฒนาเว็บไซต์
                และมีเป้าหมายในอาชีพที่จะเป็นนักพัฒนาเว็บไซต์ (Web Developer)
                โดยเฉพาะอย่างยิ่งในด้านการพัฒนาเว็บไซต์ฝั่งผู้ใช้งาน (Font-End
                Developer)
                ดิฉันสนุกกับการออกแบบและพัฒนาเว็บไซต์ที่ใช้งานง่ายและตอบโจทย์ผู้ใช้งาน
                พร้อมทั้งมุ่งมั่นที่จะเรียนรู้เทคโนโลยีใหม่ๆ
                อย่างต่อเนื่องเพื่อพัฒนาตนเอง
              </p>
              <hr className="border-[1px] border-[#353e68] mt-5" />

              {/* contact */}
              <div className="">
                <p className="text-2xl font-Prompt font-semibold mt-5 mb-5">
                  Contact
                </p>
                <p className="flex">
                  <img src={call} className="h-5 mr-3" />
                  093-3286263
                </p>
                <p className="flex mt-2">
                  <img src={email} className="h-5 mr-3" />
                  Pattaraporn.sri@kkumail.com
                </p>
                <p className="flex mt-2">
                  <img src={line} className="h-5 mr-3" />
                  yaryeepattaraporn
                </p>
                <p className="flex mt-2">
                  <img src={facebook} className="h-5 mr-3" />
                  Pattaraporn Sritirat
                </p>
                <p className="flex mt-2">
                  <img src={ig} className="h-5 mr-3" />
                  _yypatt_
                </p>
              </div>
              <hr className="border-[1px] border-[#353e68] mt-5" />

              {/* personality */}
              <p className="text-2xl font-Prompt font-semibold mt-5 mb-3">
                Personality
              </p>
              <li>มีความรับผิดชอบและสามารถทำงานภายใต้ความกดดันได้ดี</li>
              <li>
                มีทักษะในการแก้ไขปัญหาเชิงเทคนิค
                และสามารถวิเคราะห์ระบบหรือข้อผิดพลาดได้อย่างเป็นเหตุเป็นผล
              </li>
              <li>
                ทำงานร่วมกับทีมได้ดี
                มีความยืดหยุ่นในการสื่อสารกับทั้งเพื่อนร่วมงานและฝ่ายอื่น ๆ
              </li>
              <li>
                พร้อมพัฒนาทักษะทั้งด้าน Technical และ Soft Skills อย่างต่อเนื่อง
              </li>
              <li>
                ชอบการเรียนรู้เทคโนโลยีใหม่ ๆ
                และสามารถปรับตัวเข้ากับเครื่องมือหรือ Framework
                ที่เปลี่ยนแปลงได้อย่างรวดเร็ว
              </li>
              <hr className="border-[1px] border-[#353e68] mt-5" />

              {/* Education */}
              <p className="font-Prompt font-semibold text-2xl mt-5">
                Education
              </p>
              <Timeline
                items={[
                  {
                    color: "#909eaf",
                    children: (
                      <>
                        <p className="text-xs">2016-2021</p>
                        <p className="text-lg">โรงเรียนขอนแก่นวิทยายน</p>
                      </>
                    ),
                  },
                  {
                    color: "#909eaf",
                    children: (
                      <>
                        <p className="text-xs">2021-2024</p>
                        <p className="text-lg">มหาวิทยาลัยขอนแก่น</p>
                        <p className="text-xs">
                          วิทยาลัยการคอมพิวเตอร์ สาขาวิชาภูมิสารสนเทศศาสตร์
                        </p>
                      </>
                    ),
                  },
                ]}
                className="text-[#0B1957] font-Prompt mt-5"
              />
              <hr className="border-[1px] border-[#353e68]" />

              {/* hobby */}
              <div className="text-2xl font-semibold mt-5">Hobbies</div>
              <div className="mt-3 flex mb-10">
                <p className="">
                  <img src={coffee} className="h-8 ml-3" />
                  ทำกาแฟ
                </p>
                <p className="ml-5">
                  <img src={exercise} className="h-8 ml-8" />
                  ออกกำลังกาย
                </p>
                <p className="ml-5">
                  <img src={cooking} className="h-8 ml-3" />
                  ทำอาหาร
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
