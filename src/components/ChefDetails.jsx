import { useLoaderData } from "react-router-dom";
import chefBg from "../asset/chef.jpg";
import Recipe from "./Recipe";
import useTitle from "./hooks/useTitle";

const ChefDetails = () => {
  const data = useLoaderData();
  const {
    chef_picture,
    chef_name,
    description,
    likes,
    number_of_recipes,
    years_of_experience,
    recipes,
  } = data;
  return (
    useTitle(chef_name),
    <>
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
            <div className=" rounded-xl glass p-4 ">
              <h1 className="text-5xl font-bold font-raleway">{chef_name}</h1>
              <p className="py-6">{description}</p>
              <div className="font-semibold">
                <p>Likes: {likes}</p>
                <p>Number Of Recipes: {number_of_recipes}</p>
                <p>Years Of Experience: {years_of_experience}</p>
              </div>
            </div>
            <img
              src={chef_picture}
              className=" w-[500px] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className=" bg-orange-100 pb-10 pt-6">
        <h1 className="text-5xl font-bold text-center font-raleway py-5">Recipes</h1>
        <div className="flex flex-wrap justify-evenly">
        {
            recipes?.map((recipe, index) => (<Recipe recipe={recipe} key={index}/>))
        }
        </div>
      </div>
    </>
  );
};

export default ChefDetails;
