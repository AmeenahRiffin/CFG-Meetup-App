import { Link } from 'react-router-dom';
import '../Styles/registerpage.css'
import NavBar4 from '../Components/Navbar4/NavBar4';


const RegisterPage = () => {
return (
    <div>
    <main>
        <NavBar4 />
        <div className="register-form-container">
        <h2>Create an account</h2>
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="text" placeholder="Postcode" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <Link to="/login">
            <button type="submit">Register</button>
        </Link>
        </div>
    </main>
    </div>
);
};


export default RegisterPage;