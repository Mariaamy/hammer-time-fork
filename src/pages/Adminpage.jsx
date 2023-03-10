import User from "../components/User";
import Tool from "../components/Tool";

function Adminpage() {
  return <>
    <section>
        <div>
            <h1>Administrator page</h1>
            <p>Here you can create new, as well as edit existing users and tools</p>
        </div>
        <div>
            <h2>User overview</h2>
            <User variant="card"/>
            <User variant="card"/>
            <User variant="card"/>
            <button>Edit existing user on the users page?</button>
            <h3>Add new user</h3>
            <form method="POST">
                <label for="name">First name:</label>
                <input type="text" id="name" name="name" placeholder="First name..."/>
                <label for="lastname">Last name:</label>
                <input type="text" id="lastname" name="lastname" placeholder="Last name..."/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Password..."/>
                <label for="course">Approved courses:</label>
                <p>If there's several courses, please separate these with a comma ','</p>
                <input type="text" id="course" name="course" placeholder="Course(s)..."/>
                <button type="submit">Submit</button>
            </form>
        </div>
        <h2>Tool overview</h2>
        <Tool variant="card"/>
        <button>Edit existing tool on the tool page?</button>
        <button>Remove existing tool on the tool page?</button>
        <h3>Add new tool</h3>
        <form method="POST">
            <label for="name">Tool name:</label>
            <input type="text" id="name" name="name" placeholder="Tool name..."/>
            <label for="information">Information:</label>
            <textarea id="information" name="information" placeholder="Information..."/>
            <label for="availability">Quantity:</label>
            <input type="number" id="quantity" name="quantity" placeholder="Quantity..."/>
            <button>Add new tool</button>
        </form>
    </section>
  </>;
}

export default Adminpage;