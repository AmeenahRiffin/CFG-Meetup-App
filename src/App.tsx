import { Routes, Route  } from "react-router-dom"
import SigninForm from "./_auth/forms/SigninForm"
import SignupForm from "./_auth/forms/SignupForm"
import { AllUsers, CreatePost, EditPosts, Events, Explore, Home, Marketplace, PostDetails, Profile, SavedPosts, Settings, UpdateProfile } from "./_root/pages"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_root/RootLayout"


const App = () => {
  return (
   <main className="flex h-screen">
    <Routes>


        {/* Public */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* Private */ }
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route> path="/AllUsers" element={<AllUsers />} </Route>
          <Route> path="/CreatePost" element={<CreatePost />} </Route>
          <Route> path="/EditPosts/:id" element={<EditPosts />} </Route>
          <Route> path="/Events" element={<Events />} </Route>
          <Route> path="/Explore" element={<Explore />} </Route>
          <Route> path="/Marketplace" element={<Marketplace />} </Route>
          <Route> path="/Post-Details/:id" element={<PostDetails />} </Route>
          <Route> path="/Profile" element={<Profile />} </Route>
          <Route> path="/SavedPosts" element={<SavedPosts />} </Route>
          <Route> path="/Settings" element={<Settings />} </Route>
          <Route> path="/UpdateProfile/:id" element={<UpdateProfile />} </Route>
        </Route>
        


    </Routes>

   </main>
  )
}

export default App