const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="navbar-logo">
            <div><a href="/">NeighbourHub</a></div>
        </div>
        <div className="navbar-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/events">Events</a>
            <a href="/posts">Posts</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>

        
    </nav>
    );
};

export default Navbar;