import { useLoaderData } from "react-router-dom";
import chefBg from "../asset/chef.jpg";

const ChefDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const {chef_picture, chef_name ,description ,likes, number_of_recipes, years_of_experience} = data;
    
  return (
    <div 
        style={{
            backgroundImage: `url(${chefBg}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
    >
        <div className="hero min-h-screen pt-14">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chef_picture}
          className=" w-[500px] rounded-lg shadow-2xl"
        />
        <div className="backdrop-blur-md p-4 font-raleway">
          <h1 className="text-5xl font-bold">{chef_name}</h1>
          <p className="py-6">
            {description}
          </p>
          <div className="font-semibold">
          <p>
           Likes: {likes}
          </p>
          <p>
            Number Of Recipes: {number_of_recipes}
          </p>
          <p>
            Years Of Experience: {years_of_experience}
          </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChefDetails;
