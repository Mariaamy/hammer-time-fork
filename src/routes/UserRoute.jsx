import {useContext} from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import AuthContext from '../providers/AuthProvider';

const UserRoute = ({children}) => {
    const context = useContext(AuthContext);
    const user = context.getUser();
    
    if(!user)
        return <Navigate to="/login" replace/>;

    return children ? children : <Outlet/>;
}

export default UserRoute;