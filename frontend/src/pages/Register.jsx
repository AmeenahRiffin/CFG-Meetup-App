const Register = () => {
return (
    <div className="container">

        <h2>Register</h2>
        <form>
        <div className="form-group">
            <label>First Name:</label>
            <input 
            type="text" 
            placeholder="Enter first name"
            />
        </div>
        <div className="form-group">
            <label>Last Name:</label>
            <input 
            type="text" 
            placeholder="Enter last name"
            />
        </div>
        <div className="form-group">
            <label>Postcode:</label>
            <input 
            type="text" 
            placeholder="Enter postcode"
            />
        </div>
        <div className="form-group">
            <label>Email Address:</label>
            <input 
            type="email" 
            placeholder="Enter email address"
            />
        </div>
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
            Register
        </button>
        </form>

    </div>
);
};

export default Register;
