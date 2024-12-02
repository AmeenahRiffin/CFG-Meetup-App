import React from 'react';
import '../Styles/loginpage.css'
import Navbar5 from '../Navbar5/Navbar5'


const LoginPage = () => {
return (
<div>
<main>
<Navbar5 />
<div className="login.form-container">
<h2>Login</h2>
<input type="text" placeholder="username" required />
<input type="password" placeholder="password" required />
<button onClick={() => window.location.href = '/message-board'} type="submit">
Login
</button>
</div>
</main>
</div>
);
};

export default LoginPage;