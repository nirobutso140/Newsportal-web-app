
import { Link } from 'react-router-dom';
import Title from '../../components/Container/Title';

const Login = () => {
    return (
        <>
            <div className="register_form">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                           <Title> Login now!</Title>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-secondary">Login</button>
                                </div>
                                <p>Are you new? please <Link to='/register'><button className="btn btn-link">Register</button> </Link></p>
                                {/* <button onClick={handleGoogleAuthentication}>google Signin</button>
                                {

                                    loginError ? <p className="text-red-600">{loginError}</p> : <p className="text-green-600">{loginSuccess}</p>
                                } */}
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;