import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
const ChefCard = ({ chef }) => {
  const { user } = useContext(AuthContext);
  const {
    chef_id,
    chef_name,
    chef_picture,
    years_of_experience,
    number_of_recipes,
    likes,
  } = chef;

  const handleLogin = () => {
    if (!user) {
      toast.info("You need to login first!");
    }
  };

  return (
    <>
      <div className="card lg:w-96 md:72 w-64 glass m-2 lg:m-8">
        <figure>
          <img
            className="rounded-2xl max-h-72 p-2"
            src={chef_picture || "https://picsum.photos/id/1005/400/250"}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chef_name}</h2>
          <p>Years Of Experience: {years_of_experience}</p>
          <p>Number Of Recipes: {number_of_recipes}</p>
          <p>Likes: {likes}</p>
          <div className="card-actions justify-end">
            <Link
              onClick={handleLogin}
              to={`/chef/${chef_id}`}
              className="btn btn-primary"
            >
              Learn now!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefCard;
