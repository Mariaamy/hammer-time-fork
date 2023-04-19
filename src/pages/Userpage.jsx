import UserProfile from "../components/User/UserProfile";
import hAPI from "../api/hAPI";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../providers/AuthProvider";

function Userpage() {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const user = authContext.getUser();
    if (user) {
      hAPI.users.getUser(user.sub).then((response) => {
        setUser(response.data);
      });
    }
  }, [authContext]);

  return (
    <>
      <section>
        <UserProfile data={user} />
      </section>
    </>
  );
}

export default Userpage;
