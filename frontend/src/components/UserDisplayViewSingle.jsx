import PropTypes from "prop-types";
import UserDisplay from "./UserDisplay";
import { useState, useEffect } from "react";

const UserDisplayViewSingle = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:9001/users/user_id/${userId}`);
                if (!response.ok) {
                    throw new Error('User not found');
                }
                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <UserDisplay 
            key={user.user_id} 
            user_f_name={user.user_f_name} 
            user_l_name={user.user_l_name} 
        />
    );
};

UserDisplayViewSingle.propTypes = {
    userId: PropTypes.string.isRequired,
};

export default UserDisplayViewSingle;
