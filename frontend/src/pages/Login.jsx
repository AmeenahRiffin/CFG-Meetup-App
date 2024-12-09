import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";




        const Login = () => {

            const [values, setValues] = useState({
                username: '',
                password: '',
            });
        
            const navigate = useNavigate();
            axios.defaults.withCredentials = true;
            const handleSubmit = async (e) => {
                e.preventDefault();
                axios.post('http://localhost:3000/login', values)
                .then((response) => {
                    if (response.data.status === 200) {
                        navigate('/');
                    } else {
                        alert(res.data.Error)
                    };
                });
            
    return (
        <div className="container">

            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Username:</label>
                <input 
                type="text" 
                placeholder="Enter username"
                onChange={e => setValues({...values, username: e.target.value})}
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input 
                type="password" 
                placeholder="Enter password"
                onChange={e => setValues({...values, password: e.target.value})}
                />
            </div>
            <br /><br />
            <button type="submit">
                Login
            </button>

            </form>
            <br /><br />
            <button type="register" onClick={() => window.location.href = '/register'}>
                Register
            </button>        
        </div>
    );
    };
    }; 
     
    export default Login;
