import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import PostDisplay from "./PostDisplay";

const PostDisplayView = ({ apiLink = "http://localhost:9001/posts", postsPerPage = 10 }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${apiLink}`);
                if (!response.ok) {
                    throw new Error("Posts not found");
                }
                const data = await response.json();
                setPosts(data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching posts:", err);
                setError("Failed to load posts.");
                setLoading(false);
            }
        };

        fetchPosts();
    }, [apiLink, currentPage, postsPerPage]);

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>{error}</p>;

    // This uses indexing
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="post-display">
                <ul>
                    {/* We're getting all the posts we've fetched from the API and using Map (basically a for loop) to display them */}
                    {currentPosts.map((post, index) => (
                        <PostDisplay key={index} post_category={post.post_category} post_content={post.post_content} post_date={post.post_date} user_id={post.user_id} />
                    ))}
                </ul>

            </div>
            <div className="pagination">
                {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
                    <button key={index + 1} onClick={() => paginate(index + 1)} className={index + 1 === currentPage ? "active" : ""}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
};

PostDisplayView.propTypes = {
    apiLink: PropTypes.string,
    postsPerPage: PropTypes.number.isRequired,
};

export default PostDisplayView;
