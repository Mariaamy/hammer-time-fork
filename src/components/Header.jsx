import './Header.css';

function Header() {
    return (
        <div className="header">
            
           
            <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5.5 22a3.5 3.5 0 0 1-3.5-3.5v-5.5H5v5.5a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V7.5a1.5 1.5 0 0 0-1.5-1.5h-11a1.5 1.5 0 0 0-1.5 1.5V14H2V8.5A3.5 3.5 0 0 1 5.5 5h11a3.5 3.5 0 0 1 3.5 3.5v9a3.5 3.5 0 0 1-3.5 3.5h-11z"/>
  <path d="M4 4v4.5a.5.5 0 0 0 .5.5H9"/>
  <path d="M20 20v-4.5a.5.5 0 0 0-.5-.5H15"/>
  <path d="M8 16v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/>
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
        </div>

    );
}

export default Header;