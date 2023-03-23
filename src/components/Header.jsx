import './Header.css';

function Header() {
    return (
        <header>
            <div class="logo-container">
                <div class="logo">
                    <span class="Logo-img">
                        <img class="Logo-BG" src={require("../media/makerspacelogo-bg.png")}  alt="Logo-BG"></img>
                        <img class="cog" src={require("../media/makerspacelogo-cog.png")}  alt="Logo-cog"></img>
                    </span>
                    <span class="logo-text">
                        <h1>Hammer Time</h1>
                    </span>
                </div>
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