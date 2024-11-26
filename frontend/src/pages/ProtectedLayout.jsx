import React from 'react'
import { Outlet } from 'react-router-dom'


//import and enter sidebar, topbar, or bottombar elements here to link them and create an overall layout
//let me know if you would like me to add these in

const ProtectedLayout = () => {
  return (
    <div>
        {/*sidebar*/}
        {/*topbar*/}

    <section>
        <Outlet />
    </section>  

    { /*bottombar*/}
    
    </div>
  )
}

export default ProtectedLayout