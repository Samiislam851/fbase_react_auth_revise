
import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Home = () => {
    const { user, logOut } = useContext(AuthContext);
    const manageSignOut = () => {
        logOut().then(() => {
            console.log('signOut successful');
        }).catch((error) => {
            console.log(error);
        });
    }
    console.log(user);
    return (
        <div>
            <div className='navbar bg-primary text-primary-content flex items-center justify-between p-10 '>
                <h1 className='text-5xl p-3 text-white'>Home</h1>
                <ul className=' flex gap-7 pe-6'>
                    <NavLink className='btn btn-primary text-3xl' to='/'>Home</NavLink>
                    <NavLink className='btn btn-primary text-3xl' to='/orders'>Orders</NavLink>
                    {user ? <NavLink className='btn btn-primary text-3xl' to='/login' onClick={manageSignOut}>Sign Out</NavLink> :

                        <>
                            
                            <NavLink className='btn btn-primary text-3xl' to='/register'>Sign Up</NavLink>
                            <NavLink className='btn btn-primary normal-case text-xl ' to='/login'>Login</NavLink>
                        </>
                    }
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;