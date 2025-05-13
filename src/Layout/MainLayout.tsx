import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

const MainLayout= () => {
  return (
    <>
    <div className="bg-[#0B1957] h-10 flex justify-evenly items-center text-[#E6D8C7] font-Prompt">
      <Link to="/">Home</Link>
      <Link to="aboutme">About me</Link>
      <Link to="expirence">Experience</Link>
      <Link to="mywork">My work</Link>
    </div>
    
    <Outlet/>
    </>
  )
}

export default MainLayout