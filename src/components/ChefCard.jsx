import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ChefCard = ({ chef }) => {
  
  const {
    chef_id,
    chef_name,
    chef_picture,
    years_of_experience,
    number_of_recipes,
    likes,
  } = chef;
  return (
    <>
      <div className="card w-96 glass m-2 lg:m-8">
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
            <Link to={`/chef/${chef_id}`} className="btn btn-primary">Learn now!</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefCard;
