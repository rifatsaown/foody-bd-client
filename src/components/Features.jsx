import chef from "../asset/chef.svg";
import foodlist from "../asset/food-list.svg";
import food from "../asset/food.svg";

const Features = () => {
  return (
    <div className="pb-8">
      <h1 className="text-5xl font-bold text-center pt-10 pb-3">
        Why you will choose us?
      </h1>
      <div className="flex justify-center">
        <div className="card w-96 bg-base-100 ">
          <figure className="px-10 pt-10">
            <img src={chef} alt="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-3xl font-bold">Menu for every taste</h2>
            
          </div>
        </div>
        <div className="card w-96 bg-base-100 ">
          <figure className="px-10 pt-10">
            <img src={foodlist} alt="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-3xl font-bold">Fresh ingredients</h2>
            
          </div>
        </div>
        <div className="card w-96 bg-base-100 ">
          <figure className="px-10 pt-10">
            <img src={food} alt="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-3xl font-bold">Experienced chefs
</h2>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
