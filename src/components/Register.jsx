import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import heroimg from "../asset/login.jpg";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
                <label className="label">
                  <span className="label-text">Name *</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email *</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password *</span>
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    placeholder="PhotoUrl"
                    className="input input-bordered"
                  />
                </div>
                <label className="label">
                  <p className="label-text-alt ">
                    Already in FoodyBD?{" "}
                    <Link to="/login" className="link link-hover text-primary">
                      Log In
                    </Link>
                  </p>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
