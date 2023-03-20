import './Adminpage.css';
import User from "../components/User";
import Tool from "../components/Tool";

function Adminpage() {
  return <>
    <section>
        <div className="adminpage--intro">
            <h1>Administrative page</h1>
            <p>Here you can create new, as well as edit existing users and tools</p>
        </div>
        <div className="adminpage--user">
        <h2>User overview</h2>
        <div className="adminpage--users">
            <User variant="card"/>
            <User variant="card"/>
            <User variant="card"/>
            <User variant="card"/>
            <User variant="card"/>
            <User variant="card"/>
            <User variant="card"/>
            <User variant="card"/>
            <User variant="card"/>
        </div>
        <div className="adminpage--add-users">
            <h3>Add new user</h3>
            <form method="POST" className="adminpage--add-users-form">
                <label for="name">First name:</label>
                <input type="text" id="name" name="name" placeholder="First name..."/>
                <label for="lastname">Last name:</label>
                <input type="text" id="lastname" name="lastname" placeholder="Last name..."/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Password..."/>
                <label for="course">Approved courses:</label>
                <input type="text" id="course" name="course" placeholder="Course(s) separated with comma , "/>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
        <div className="adminpage--tool">
        <h2>Tool overview (tools listed as broken or missing?)</h2>
        <div className="adminpage--tools">
            {/* Toollist where tools.broken >= 1 or tools.missing >= 1 */}
            <Tool variant="card"/>
            <Tool variant="card"/>
        </div>
        <div className="adminpage--add-tools">
        <h3>Add new tool</h3>
        <form method="POST" className="adminpage--add-tools-form">
            <label for="name">Tool name:</label>
            <input type="text" id="name" name="name" placeholder="Tool name..."/>
            <label for="information">Information:</label>
            <textarea id="information" name="information" placeholder="Information..."/>
            <label for="availability">Quantity:</label>
            <input type="number" id="quantity" name="quantity" placeholder="Quantity..."/>
            <button>Add new tool</button>
        </form>
        </div>
        </div>
    </section>
  </>;
}

export default Adminpage;