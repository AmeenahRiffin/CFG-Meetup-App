import { Link } from "react-router-dom"
const topbar = () => {
  return (

    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img src="" alt="logo" width={130} height={325}/>
        </Link>
        <div className="flex gap-4">
          <button>Login</button>
          {/* <Link to={'/profile/${user.id'} className="flex-center gap-3"><img src="" alt="" /></Link> */}
           
        </div>
      </div>
    </section>
  )
}

export default topbar

//create signout async function for button w/ useEffect ifSuccess = signoutFunction, navigate from React
//Link to profile with profile image after button