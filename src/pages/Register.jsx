import './Login.css';

function Register() {
  return <>
  <div class="background"> 
    <div className="section--login--container">
        <form method='POST'>
        <h1>Register a new user here!</h1>
            <label for="name">Name:</label>
            <input type="name" id="name" name="name" placeholder='Name'/>
            <label for="surname:">Surname:</label>
            <input type="surname:" id="surname:" name="surname:" placeholder='Surname:'/>
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder='Email'/>
            
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder='Password'/>
            <button type="submit" id="register">Register</button>
            <p>Or log in to an existing account <a href="/login">here</a></p>
        </form>
    </div>
    </div>
  </>;
}

export default Register;