import './Header.css';

function Header() {
    return (
        <div className="header">
                <a href="/">Home</a>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
                {/* Need authentication restrictions */}
                <a href="/user">User profile</a>
                <a href="/admin">Admin page</a>
        </div>
    );
}

export default Header;