import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const Register = () => {
    const{createUser}  = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setEmail(email);
        setPassword(password);
        console.log(email,password);
        createUser(email,password).then(
            result => {console.log(result.user);
            
            }
        
        ).catch(error => console.log(error) );
    }
  
    return (
        <div className="hero min-h-screen text-gray-600 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold whitespace-nowrap">Sign-up!</h1>
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
                          
                        </div>
                        <label className="label">
                                <p  className="label-text-alt ">Already a member? you can <Link to='/login' className="link link-hover">Log in</Link></p>
                            </label>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;