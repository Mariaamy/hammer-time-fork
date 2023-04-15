import {useContext} from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import AuthContext from '../providers/AuthProvider';
import Error from '../pages/Error';

const AdminRoute = ({children}) => {
    const context = useContext(AuthContext);
    const user = context.getUser();
    
    if(!user)
        return <Navigate to="/login" replace/>;
    else if(user.role!==2)
        return <Error code={403}/>

    return children ? children : <Outlet/>;
}

export default AdminRoute;