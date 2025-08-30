import { Link, useLocation } from "react-router-dom"

const NavLink = () => {
    const links=[
        {name:"Find Job",path:"/find-job"},
        {name:"Find Talent",path:"/find-talent"},
        {name:"Upload Job",path:"/upload-job"},
        {name:"About Us",path:"/about-us"}
    ]
    const location=useLocation()
  return (
    <div className="flex gap-7 text-lg text-mine-shaft-300 h-full items-center">
   {links.map((link,index)=>(
    <div className={`${location.pathname==link.path ? "border-t-bright-sun-500 text-bright-sun-500" : "border-t-transparent text-mine-shaft-300"} border-t-[3px] h-full flex items-center`}>
         <Link key={index} to={link.path} className="hover:text-bright-sun-500 hover:scale-105 transition-all duration-300">{link.name}</Link>
    </div>
   ))}
  </div>
  )
}

export default NavLink