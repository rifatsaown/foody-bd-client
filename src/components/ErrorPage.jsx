import { Link } from "react-router-dom";
import errorimg from "../asset/error.jpg";

const ErrorPage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${errorimg})`,
      }}
    >
      <div className=" bg-opacity-60"></div>
      <Link to='/' className="btn text-2xl btn-primary absolute">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
