import { useContext} from "react";
import heroimg from "../asset/login.jpg";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Login Success");
      })
      .catch((error) => {
        
        toast.error(error.message);
      });
  };

  return (
    <div
      className="hero min-h-screen pt-20 sm:pt-20"
      style={{
        backgroundImage: `url(${heroimg})`,
      }}
    >
      <div className="">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="card flex-shrink-0 w-full lg:w-96 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control ">
                <a
                  onClick={handleGoogleSignIn}
                  className="btn btn-primary btn-outline"
                >
                  Login With Google
                </a>
              </div>
              <div className="form-control ">
                <a className="btn btn-primary btn-outline">Login With Github</a>
              </div>
              <div className="flex items-center lg:my-4">
                <div className="w-full h-[1.5px] bg-primary"></div>
                <span className="mx-3">OR</span>
                <div className="w-full h-[1.5px] bg-primary"></div>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;