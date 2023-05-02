import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext, } from "../../Providers/AuthProviders";

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
   
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        loginUser(email,password).then(result=> {console.log(result);
            navigate(location?.state?.pathname||'/');
        }).catch(error => console.log(error));

    }
  
    

    return (
        <div className="hero min-h-screen text-gray-600 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold whitespace-nowrap">Login Please</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered bg-transparent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name = 'password' placeholder="password" className="input input-bordered bg-transparent" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <p  className="label-text-alt ">New Here? you can <Link to='/register' className="link link-hover">Sign Up</Link></p>
                            </label>

                     
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;