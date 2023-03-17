import React from 'react';
import { Route, Routes } from 'react-router-dom';
//import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Toolpage from './pages/Toolpage';
import Header from './components/Header';
import Footer from './components/Footer';
import Userpage from './pages/Userpage';
import Adminpage from './pages/Adminpage';
import Logout from './pages/Logout';
import Tools from './pages/Tools';


// Route access
// import AnoRoute from './routes/AnoRoute';
// import UserRoute from './routes/UserRoute';
// import AdminRoute from './routes/AdminRoute';

const HammerApp = () => {
    
    // Init our API - if not already initialized
    //HammerAPI.init();

    return (
        <div className="HammerApp">
            <Header/>
            <main>
                <Routes>
                    {/* Accessible by authenticated users and non-authenticated users */}
                    <Route path="/" element={<Home/>} />
                    <Route path="/tools" element={<Tools/>} />
                    <Route path="/tool/:toolID" element={<Toolpage/>} />
                    
                    {/* Accessible as long you are not signed in */}

                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />

                    {/*
                    <Route element={<AnoRoute/>}>
                        
                        <Route path="/about" element={<About/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/activate/:userId" element={<ActivateUser/>}/>
                    </Route>
                    */}

                    {/* Accessible by authenticated users */}

                    <Route path="/user" element={<Userpage/>} />

                    {/*
                    <Route element={<UserRoute/>}>
                        <Route path="/logout" element={<Logout/>} />
                    </Route>
                    */}

                    <Route path="/logout" element={<Logout/>} />

                    {/* Accessible by authenticated admin users */}

                    <Route path="/admin" element={<Adminpage/>} />

                    {/*
                    <Route element={<AdminRoute/>}>
                        
                    </Route>
                    */}

                    {/* Page not found */}
                    {/*
                    <Route path='*' element={<Error code={404}/>} />
                    */}
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}

export default HammerApp;