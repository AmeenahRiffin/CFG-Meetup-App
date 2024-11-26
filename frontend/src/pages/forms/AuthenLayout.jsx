  import React from 'react'
  import { Outlet } from 'react-router-dom'

  const AuthenLayout = () => {
    return (
      <>
      <section>
      <Outlet /> 
      </section>
      
      </>
    )
  }

  export default AuthenLayout