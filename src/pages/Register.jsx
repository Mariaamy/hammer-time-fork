import './Login.css';

function Register() {
  return <>
    <div className="section--login--container">
        <form method='POST'>
        <h1>Register a new user here!</h1>
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email"/>
            <label for="password">Password</label>
            <input type="password" id="password" name="password"/>
            <button type="submit" id="register">Register</button>
            <p>Or log in to an existing account <a href="/login">here</a></p>
        </form>
    </div>
  </>;
}

export default Register;