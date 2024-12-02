import React from 'react';
import '../Styles/loginpage.css'
import Navbar4 from '../Navbar4/Navbar4'


const RegisterPage = () => {
return (
<div>
<main>
<Navbar4 />
<div className="register.form-container">
<h2>Create an account</h2>
<input type="text" placeholder="first name" required />
<input type="text" placeholder="last name" required />
<input type="text" placeholder="postcode" required />
<input type="email" placeholder="email address" required />
<input type="text" placeholder="username" required />
<input type="password" placeholder="password" required />
<button onClick={() => window.location.href = '/login'} type="submit">
Register
</button>
</div>
</main>
</div>
);
};




export default RegisterPage;