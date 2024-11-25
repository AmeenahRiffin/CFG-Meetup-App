import { Routes, Route } from 'react-router-dom';
import { Home, Explore, Saved, CreatePost, EditPost, Profile, Marketplace, AuthLayout, ProtectedLayout, PostDetails } from './pages';
import './App.css'
import SigninForm from './pages/forms/SigninForm';
import SignupForm from './pages/forms/SignupForm';

const App = () => {
  return (
    <main>

      <Routes>

        {/* Public Routes */}
        <Route path='/' element={<AuthLayout />} >
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedLayout />}>
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/editpost/:id" element={<EditPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/post/:id" element={<PostDetails />} />

        </Route>


      </Routes>
      
      
      
      
      
      
      
    </main>
  )
}

export default App
