import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';


const HomePage = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h1>Welcome {user ? user.email: 'User'}</h1>
        </div>
    );
};

export default HomePage;