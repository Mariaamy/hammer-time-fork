import "./Login.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import circleSuccess from "../media/circle-success-fill.svg";
import AuthContext from "../providers/AuthProvider";

function Register() {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const surname = event.target.surname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    // Checking if the password inputs are matching
    if (password !== confirmPassword) {
      // Passwords are not matching
    } else {
      try {
        // Creating user account in DB
        await authContext.register(email, password);
        setEmail(email); // Registration successful
      } catch (error) {
        // Error here oof
      }
    }
  };

  return (
    <>
      {!email ? (
        <div class="background">
          <div className="section--login--container">
            <form autoComplete="off" onSubmit={handleSubmit} className="section--register--form">
              <h1>Register a new user here!</h1>
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Name" />
              <label for="surname">Surname:</label>
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Surname"
              />
              <label for="email">E-mail:</label>
              <input type="email" id="email" name="email" placeholder="Email" />
              <label for="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <label for="confirmPassword">Confirm password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <button type="submit" id="register">
                Register
              </button>
              <p>
                Or log in to an existing account <Link to="/login">here</Link>
              </p>
            </form>
          </div>
        </div>
      ) : (
        <div className="registered-container">
          <img src={circleSuccess} alt="" />
          <p>Successfully created your user with the email "{email}".</p>
          <Link to="/login">Go to log in</Link>
        </div>
      )}
    </>
  );
}

export default Register;
