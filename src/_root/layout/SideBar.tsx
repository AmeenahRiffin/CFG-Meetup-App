import { NavigationLink, sidebarLinks } from "../../constants/index"
import { Link, NavLink, useLocation } from "react-router-dom"

const sidebar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="sidebar">
      <div className="flex flex-col gap-11">
        <Link to ="/" className="flex gap-3 items-center">
          <img src="" alt="logo" width={170} height={36} />
        </Link>
      <Link to={'/profile'} className="flex gap-3 items-center"> 
      <img src="" alt="user image" className="h-14 w-14 rounded-full" />
      <div className="flex flex-col">
        <p className="body-bold">Username</p>
        <p className="small-regular">@handle</p></div>   
      </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: NavigationLink) => {
            const isActive = pathname === link.path;

            return (
              <li 
                key={link.label} 
                className={`sidebar-link group ${isActive && 'bg-primary-500'}`}>
                  
                  <NavLink to={link.path} 
                  className="flex gap-4 items-center p-4">

             <img src={link.imgUrl} 
                  alt={link.label} 
                  className={`group-hover:invert-blue'${isActive && "invert-blue"}`} /> 
                  {link.label}
                </NavLink>
              </li>
              )
          })}
        </ul>
      </div>


    </nav>
  )
}

export default sidebar

//insert icons
//Tag user into <p> ?add link
//use UserContext