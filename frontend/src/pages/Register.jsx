import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        postcode: '',
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages
        try {
            const response = await fetch('http://localhost:9001/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.text();
            setMessage(result);

            if (response.ok) {
                setFormData({
                    firstName: '',
                    lastName: '',
                    dob: '',
                    postcode: '',
                    email: '',
                    password: '',
                });
            }
        } catch (error) {
            setMessage('An error occurred while registering.');
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Postcode:</label>
                    <input
                        type="text"
                        name="postcode"
                        placeholder="Enter postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email Address:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <button type="submit">Register</button>
            </form>
            <p dangerouslySetInnerHTML={{ __html: message }}></p>
        </div>
    );
};

export default Register;
