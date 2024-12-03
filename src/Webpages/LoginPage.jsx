import { Link } from 'react-router-dom';
import '../Styles/loginpage.css'
import NavBar5 from '../Components/Navbar5/navbar5';

const LoginPage = () => {
return (
<div>
<main>
<NavBar5 />
<div className="login-form-container">
<h2>Login</h2>
<input type="text" placeholder="username" required />
<input type="password" placeholder="password" required />
<Link to="/message-board">
<button type="submit">Login</button>
</Link>
</div>
</main>
</div>
);
};

export default LoginPage;