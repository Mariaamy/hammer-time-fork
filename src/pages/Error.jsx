import { NavLink } from "react-router-dom";

function Error(props) {
  switch (props.code) {
    // Handling error code '403' (No access)
    case 403:
      return (
        <div heading="Error 403">
          <h1>Error 403</h1>
          <p>You have no access to this page.</p>
          <NavLink to="/" className="error-link">
            Go home
          </NavLink>
        </div>
      );
    // Handling error code '404' (Not found)
    case 404:
      return (
        <div heading="Error 404">
          <h1>Error 404</h1>
          <p>This is not the web page you are looking for.</p>
          <NavLink to="/" className="error-link">
            Go home
          </NavLink>
        </div>
      );
    default:
      return (
        <div heading="Error">
          <h1>Error</h1>
          <p>An error has occurred.</p>
          <NavLink to="/" className="error-link">
            Go home
          </NavLink>
        </div>
      );
  }
}

export default Error;
