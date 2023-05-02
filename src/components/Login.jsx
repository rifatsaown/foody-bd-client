import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import heroimg from "../asset/login.jpg";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { signInWithGoogle , signInWithGithub} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // Create sign in with github function
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then(() => {})
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Create sign in with google function
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {})
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
                <a onClick={handleGithubSignIn} className="btn btn-primary btn-outline">Login With Github</a>
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
                  <p  className="label-text-alt ">
                    New in FoodyBD? <Link to='/register' className="link link-hover text-primary">Register Now</Link>
                  </p>
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
