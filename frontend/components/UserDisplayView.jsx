// UserDisplayView

// This is similar to the event display view, but for users. The apiLink is the most important part of this,
// as we'll need to specify the users we're getting all of this from. You may choose to expand this. - Ameenah


import PropTypes from "prop-types";
import UserDisplay from "./UserDisplay";
import { useState, useEffect } from "react";


const UserDisplayView = ({ apiLink = "http://localhost:5000/users", entriesPerPage = 10 }) => {
    const [users, setUsers] = useState([]); // State to hold user details
    const [loading, setLoading] = useState(true); // State to indicate loading
    const [error, setError] = useState(""); // State to handle errors
    const [page, setPage] = useState(1); // State to keep track of the current page

    useEffect(() => {
        // Fetch user details from the backend using the user id
        fetch(`${apiLink}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Users not found");
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching users:", err);
                setError("Failed to load users.");
                setLoading(false);
            });
    }, [apiLink, page, entriesPerPage]);

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>{error}</p>;


    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const totalPages = Math.ceil(users.length / entriesPerPage);

    return (
        <div className="user-display-view">

            <div className="user-list">
                {users.slice(
                    (page - 1) * entriesPerPage,
                    page * entriesPerPage
                ).map((user) => (
                    <UserDisplay 
                    key={user.user_id} 
                    user_f_name={user.user_f_name} 
                    user_l_name={user.user_l_name} />
                ))}
            </div>
            <br />
            <br />
            <div className="pagination">
                {Array.from({ length: totalPages }).map((_, idx) => (
                    <>
                        <button
                            key={idx + 1}
                            onClick={() => handlePageChange(idx + 1)}
                            className={idx + 1 === page ? "active" : ""}
                        >
                            {idx + 1}
                        </button>
                    &nbsp;&nbsp;
                    </>
                ))}
            </div>
        </div>
    );
};

UserDisplayView.propTypes = {
    apiLink: PropTypes.string, 
    entriesPerPage: PropTypes.number,
};


export default UserDisplayView;

