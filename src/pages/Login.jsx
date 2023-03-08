import './Login.css';
import Header from "../components/Header";

function Login() {
  return <>
    <Header/>
    <div class="section--login--container">
        <form method='POST'>
        <h1>Log in here!</h1>
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email"/>
            <label for="password">Password</label>
            <input type="password" id="password" name="password"/>
            <button type="submit" id="login">Login</button>
            <p>Or register an account <a href="/register">here</a></p>
        </form>
    </div>
  </>;
}

export default Login;