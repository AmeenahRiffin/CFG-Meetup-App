import PostDisplayView from '../components/PostDisplayView'

const Posts = () => {
    return (
    <>
        <div className="container">
        <h1>Latest Posts</h1>

        <button>Create New Post</button>

        <PostDisplayView postsPerPage={3} />
            
        </div>
    </>
    );
};

export default Posts;