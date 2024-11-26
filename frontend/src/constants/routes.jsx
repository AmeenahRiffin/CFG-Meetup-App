import { Routes, Route } from 'react-router-dom';
import { Home, Explore, Saved, CreatePost, EditPost, Profile, Marketplace, AuthenLayout, ProtectedLayout, PostDetails, Events } from './pages';
import './App.css'
import SigninForm from './pages/forms/SigninForm';
import SignupForm from './pages/forms/SignupForm';
import AuthenLayout from './pages/forms/AuthenLayout';

const Pathway = () => {
  return (
    <main>

      <Routes>

        {/* Public Routes */}
        <Route path='/' element={<AuthenLayout />} >
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
        <Route path="/events" element={<Events />} />

        </Route>


      </Routes>
      
      
      
      
      
      
      
    </main>
  )
}

export default Pathway