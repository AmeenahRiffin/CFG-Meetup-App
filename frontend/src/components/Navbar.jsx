// TODO: Add conditional for logged in users, so different options show up.
const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="navbar-logo">
            <div>NeighbourHub</div>
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