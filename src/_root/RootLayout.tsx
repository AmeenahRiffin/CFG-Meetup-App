import { Outlet } from "react-router-dom"

import Topbar from "./layout/TopBar";
import SideBar from "./layout/SideBar"
import BottomBar from "./layout/BottomBar"


const RootLayout = () => {
  return (
    <div className=" w-full md:flex">
      <Topbar />
      <SideBar />

      <section className="flex flex-1 h-full">
        <Outlet />
        </section> 
      <BottomBar />

    </div>
  )
}

export default RootLayout