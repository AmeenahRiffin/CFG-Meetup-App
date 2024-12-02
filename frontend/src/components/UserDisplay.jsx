// This is just the display for user data, isn't intended to be used directly, try to use the UserDisplayView component instead
// if you're looking to display a list of users. 

import PropTypes from "prop-types";
const UserDisplay = ({ user_f_name, user_l_name }) => {

    const avatarUrl = `https://avatar.iran.liara.run/username?username=${user_f_name}+${user_l_name}`;

    return (
        <div className="user-card">
            <h3>
                {user_f_name} {user_l_name}
            </h3>
            <div className="banner">User</div>
            <br />
            <br />
            <img src={avatarUrl} width="90px" height="90px" alt="User Avatar" />
            <br />
            <br />

        </div>
    );
};


UserDisplay.propTypes = {
    user_f_name: PropTypes.string, 
    user_l_name: PropTypes.string,
};


export default UserDisplay;

