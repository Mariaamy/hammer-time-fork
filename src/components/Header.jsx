import './Header.css';

function Header() {
    return (
        <header>
            <div class="logo">
            <svg width="189" height="169" viewBox="0 0 189 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70 52L98 31L63 3L50 31L36 45L3 64L42 94L56 73M70 52L56 73M70 52L148 116L186 135L161 166L137 135L56 73" stroke="black" stroke-width="3"/>
            </svg>
            <h1>Hammer Time</h1>
            </div>
            <nav class="nav">
                <a href="/">Home</a>
                {/* Need authentication restrictions */}
                <a href="/user">User profile</a>
                <a href="/admin">Admin page</a>
                <a href="/login" class="login-link">Login</a>
            </nav>
        </header>
    );
}

export default Header;