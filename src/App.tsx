import { Routes, Route  } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import { AllUsers, CreatePost, EditPosts, Events, Explore, Home, Marketplace, PostDetails, Profile, SavedPosts, Settings, UpdateProfile } from "./_root/pages/index"

const App = () => {
  return (
   <main className="flex h-screen">
    <Routes>


        {/* Public */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-u" element={<SignupForm />} />
        </Route>

        {/* Private */ }
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/AllUsers" element={<AllUsers />} />
          <Route path="/CreatePost" element={<CreatePost />} />
          <Route path="/EditPosts/:id" element={<EditPosts />}/>
          <Route path="/Events" element={<Events />}/>
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Marketplace" element={<Marketplace />} />
          <Route path="/Post-Details/:id" element={<PostDetails />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/SavedPosts" element={<SavedPosts />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/UpdateProfile/:id" element={<UpdateProfile />} />
        </Route>
        


    </Routes>

   </main>
  )
}

export default App