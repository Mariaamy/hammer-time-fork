import './Login.css';

function Login() {
  return <>
  <div class="background"> 
    <div className="section--login--container">
        <form method='POST'>
        <h1>Login</h1>
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder='Email'/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder='Password'/>
            <button type="submit" id="login">Login</button>
            <p>Or register an account <a href="/register">here</a></p>
        </form>
    </div>
    </div>
  </>;
}

export default Login;