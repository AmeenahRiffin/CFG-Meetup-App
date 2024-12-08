

const Login = () => {
return (
    <div className="container">

        <h2>Login</h2>
        <form>
        <div className="form-group">
            <label>Username:</label>
            <input 
            type="text" 
            placeholder="Enter username"
            />
        </div>
        <div className="form-group">
            <label>Password:</label>
            <input 
            type="password" 
            placeholder="Enter password"
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

export default Login;
