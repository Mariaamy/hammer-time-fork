import React from 'react';
import { Route, Routes } from 'react-router-dom';
//import Header from './components/Header';
import Home from './pages/Home';
import Tool from './pages/Tool';

// Route access
//import AnoRoute from './routes/AnoRoute';
//import UserRoute from './routes/UserRoute';
//import AdminRoute from './routes/AdminRoute';

const HammerApp = () => {
    
    // Init our API - if not already initialized
    //HammerAPI.init();

    return (
        <div className="HamerApp">
            {/*<Header/>*/}
            <main>
                <Routes>
                    {/* Accessible by authenticated users and non-authenticated users */}
                    <Route path="/" element={<Home/>} />
                    <Route path="/tools" element={<Tool/>} />
                    
                    {/* Accessible as long you are not signed in */}
                    {/*
                    <Route element={<AnoRoute/>}>
                        
                        <Route path="/about" element={<About/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/activate/:userId" element={<ActivateUser/>}/>
                    </Route>
                    */}

                    {/* Accessible by authenticated users */}
                    {/*
                    <Route element={<UserRoute/>}>
                        <Route path="/logout" element={<Logout/>} />
                    </Route>
                    */}

                    {/* Accessible by authenticated admin users */}
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
        </div>
    )
}

export default HammerApp;