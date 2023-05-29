import React from "react";
import { Route, Routes } from "react-router-dom";
//import Header from './components/Header';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Toolpage from "./pages/Toolpage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Userpage from "./pages/Userpage";
import Adminpage from "./pages/Adminpage";
import Logout from "./pages/Logout";
import Tools from "./pages/Tools";
import hAPI from "./api/hAPI";

// Route access
import AnoRoute from "./routes/AnoRoute";
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";

const HammerApp = () => {
  // Init API
  hAPI.init();

  return (
    <div className="HammerApp">
      <Header />
      <main>
        <Routes>
          {/* Accessible by authenticated users and non-authenticated users */}
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tool/:toolID" element={<Toolpage />} />

          {/* Accessible as long you are not signed in */}
          <Route element={<AnoRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Accessible by authenticated users */}
          <Route element={<UserRoute />}>
            <Route path="/user" element={<Userpage />} />
            <Route path="/user/:userID" element={<Userpage />} />
            <Route path="/logout" element={<Logout />} />
          </Route>

          {/* Accessible by authenticated admin users */}
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<Adminpage />} />
          </Route>

          {/* Page not found */}
          {/*
                    <Route path='*' element={<Error code={404}/>} />
                    */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default HammerApp;
