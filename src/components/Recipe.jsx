import { useState } from "react";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { toast } from "react-toastify";
/* eslint-disable react/prop-types */
const Recipe = ({ recipe }) => {
  const [isFav, setIsFav] = useState(false);
    const handleFav = () => {
    setIsFav(true);

    toast.info("Added to your favorite list!");
    };

  const { recipe_name, cooking_method, rating, ingredients } = recipe;
  return (
    <div className="card w-96 glass shadow-xl my-8">
      <div className="card-body">
        <h2 className="text-3xl font-bold text-center">{recipe_name}</h2>
        <div className="pb-3">
          <h3 className="text-lg font-semibold inline">Ingredients: </h3>
          <span>
            {ingredients.map((ingredient, index) => (
              <span key={index}>{ingredient}, </span>
            ))}
          </span>
        </div>
        <p className="pb-3">
          <span className="font-semibold">Cooking Mathod: </span>{" "}
          {cooking_method}
        </p>
        <p> Ratting: {rating}</p>
        <div className="text-right">
          <button onClick={handleFav} className={isFav?"text-primary btn-disabled btn btn-outline":"text-primary btn btn-outline "}>
            {isFav ? <><MdOutlineFavorite className="text-xl"/></> : <MdOutlineFavoriteBorder className="text-2xl" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
