import "./Login.css";
import { useContext } from "react";
import AuthContext from "../providers/AuthProvider";

function Login() {
  const authContext = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email.length > 0 && password.length >= 8) {
      try {
        await authContext.login(email, password);
      } catch (error) {
        // Error message
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="background">
        <div className="section--login--container">
          <form autoComplete="on" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="Email" />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <button type="submit" id="login">
              Login
            </button>
            <p>
              Or register an account <a href="/register">here</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
