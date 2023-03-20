import {createContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {

    const getUser = () => {
        return {};
    }

    const isAdmin = () => {
        return true;
    }

    const contextData = {
        // functions to export
        getUser,
        isAdmin
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}