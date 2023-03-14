import './Logout.css';

function Logout() {
  return <>
    <div className="section--logout--container">
       <p>You've been successfully logged out.</p>
       {/* go straight to route "/" ? */}
       <a href="/"></a>
    </div>
  </>;
}

export default Logout;