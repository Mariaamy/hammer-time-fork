import "./Adminpage.css";
import User from "../components/User";
import Tool from "../components/Tool";
import hammerimg from "../media/hammer.png";
import axios from "axios";
import hAPI from "../api/hAPI";

import { useEffect, useState } from "react";

function Adminpage() {
  const [toolinputs, setToolinputs] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    hAPI.users.getUsers().then((data) => {
      setUsers(data.data);
    });
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setToolinputs((values) => ({ ...values, [name]: value }));
  };

  const handleToolSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/tools", {
        name: toolinputs.toolname,
        information: toolinputs.information,
        availability: toolinputs.quantity,
        requiredCourses: toolinputs.requiredcourses,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [userinputs, setUserInputs] = useState({});

  const handleUserChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInputs((values) => ({ ...values, [name]: value }));
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/users", {
        name: userinputs.firstname,
        surname: userinputs.surname,
        email: userinputs.email,
        password: userinputs.password,
        courses: userinputs.approvedcourses,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <section class="section">
        <div className="adminpage--intro">
          <h1>Administrative page</h1>
          <p>
            Here you can create new, as well as edit existing users and tools
          </p>
        </div>
        <div className="adminpage--user">
          <h2 class="h2">User overview</h2>
          <div className="adminpage--users">
            {users.map((user) => {
              return <User variant="card" data={user} />;
            })}
          </div>
          <div className="adminpage--add-users">
            <h3>Add new user</h3>
            <form
              className="adminpage--add-users-form"
              onSubmit={handleUserSubmit}
            >
              <label for="firstname">First name:</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First name..."
                value={userinputs.firstname || ""}
                onChange={handleUserChange}
              />
              <label for="surname">Last name:</label>
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Last name..."
                value={userinputs.surname || ""}
                onChange={handleUserChange}
              />
              <label for="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail..."
                value={userinputs.email || ""}
                onChange={handleUserChange}
              />
              <label for="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password..."
                value={userinputs.password || ""}
                onChange={handleUserChange}
              />
              <label for="approvedcourses">Approved courses:</label>
              <input
                type="text"
                id="approvedcourses"
                name="approvedcourses"
                placeholder="Course(s) separated with comma , "
                value={userinputs.approvedcourses || ""}
                onChange={handleUserChange}
              />
              <button type="submit" id="usersubmit" name="usersubmit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="adminpage--tool">
          <h2>Tool overview (tools listed as broken or missing?)</h2>
          <div className="adminpage--tools">
            {/* Toollist where tools.broken >= 1 or tools.missing >= 1 */}
            <Tool variant="card" />
            <Tool variant="card" />
          </div>

          <div className="adminpage--reports">
            <h2>Reports on broken or missing tools</h2>
            <div className="adminpage--reports--report">
              <p>DB reports displayed here with text and image?</p>

              <button>Resolve/delete</button>
            </div>
            <div className="adminpage--reports--report">
              <p>
                DB reports displayed here with text and image? DB reports
                displayed here with text and image? DB reports displayed here
                with text and image? DB reports displayed here with text and
                image? DB reports displayed here with text and image? DB reports
                displayed here with text and image? DB reports displayed here
                with text and image? DB reports displayed here with text and
                image? B reports displayed here with text and image? B reports
                displayed here with text and image? B reports displayed here
                with text and image? B reports displayed here with text and
                image?
              </p>

              <button>Resolve/delete</button>
            </div>
          </div>
          <hr></hr>
          <div className="adminpage--add-tools">
            <h3>Add new tool</h3>
            <form
              className="adminpage--add-tools-form"
              onSubmit={handleToolSubmit}
            >
              <label for="toolname">Tool name:</label>
              <input
                type="text"
                id="toolname"
                name="toolname"
                placeholder="Tool name..."
                value={toolinputs.toolname || ""}
                onChange={handleChange}
              />
              <label for="information">Information:</label>
              <textarea
                id="information"
                name="information"
                placeholder="Information..."
                value={toolinputs.information || ""}
                onChange={handleChange}
              />
              <label for="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Quantity..."
                value={toolinputs.quantity || ""}
                onChange={handleChange}
              />
              <label for="requiredcourses">Required courses:</label>
              <input
                type="text"
                id="requiredcourses"
                name="requiredcourses"
                placeholder="Course(s) separated with comma , "
                value={toolinputs.requiredcourses || ""}
                onChange={handleChange}
              />
              <button type="submit" name="submit" id="submit">
                Add new tool
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Adminpage;
