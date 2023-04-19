import UserProfile from "../components/User/UserProfile";
import hAPI from "../api/hAPI";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../providers/AuthProvider";

function Userpage() {
  const { userID } = useParams();
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (userID) {
      hAPI.users.getUser(userID).then((response) => {
        setUser(response.data);
      });
    } else {
      const user = authContext.getUser();
      if (user) {
        hAPI.users.getUser(user.sub).then((response) => {
          setUser(response.data);
        });
      }
    }
  }, [authContext, userID]);

  return (
    <>
      <section>
        <UserProfile data={user} />
      </section>
    </>
  );
}

export default Userpage;
