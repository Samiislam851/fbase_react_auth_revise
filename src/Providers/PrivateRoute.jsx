import React, { useContext } from 'react';
import { AuthContext } from './AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log('user :', user, 'Loading :', loading);
    const location= useLocation();

    if (loading) {
        return (
            <>     <progress className="progress w-10"></progress> </>
        )
    }

    if (user) {

        return (
            <div>
                {children}
            </div>
        );
    }

    else {
        console.log('Please Log in');
        return <Navigate to='/login' state={location}></Navigate>
    }
}



export default PrivateRoute;