import './Header.css';

function Header() {
    return (
        <div className="header">
            <div class="logo">
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
  <path fill="#000" d="M4 7v4c0 1.105.895 2 2 2h1v3.586l-2.293 2.293c-.39.39-.39 1.023 0 1.414l.707.707c.39.39 1.023.39 1.414 0l2.293-2.293H13c.552 0 1-.448 1-1V9c0-.552-.448-1-1-1H6c-.552 0-1 .448-1 1z"/>
  <path fill="#000" d="M19 7v4c0 1.105-.895 2-2 2h-1v3.586l2.293 2.293c.39.39.39 1.023 0 1.414l-.707.707c-.39.39-1.023.39-1.414 0L15.414 16H11c-.552 0-1-.448-1-1V9c0-.552.448-1 1-1h7c.552 0 1 .448 1 1z"/>
</svg>
            </div>

            <nav class="nav">
                <a href="/">Home</a>
                {/* Need authentication restrictions */}
                <a href="/user">User profile</a>
                <a href="/admin">Admin page</a>
                <a href="/login" class="login-link">Login</a>
            </nav>
        </div>

    );
}

export default Header;