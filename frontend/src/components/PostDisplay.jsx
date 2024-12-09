import PropTypes from "prop-types";
import UserDisplayViewSingle from "./UserDisplayViewSingle";

const PostDisplay = ({ user_id, post_category, post_content, post_date }) => (
    <div className="post-container">
        <div className="user-profile">
            <UserDisplayViewSingle userId={user_id}/>
        </div>
        <div className="post-content">
            <div className="post-category">{post_category}</div>
            <div className="post-content">{post_content}</div>
            <div className="post-date">{new Date(post_date).toLocaleDateString()}</div>
        </div>
    </div>
);

PostDisplay.propTypes = {
    post_id: PropTypes.number.isRequired,
    post_category: PropTypes.string.isRequired,
    post_content: PropTypes.string.isRequired,
    post_date: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
};

export default PostDisplay;
