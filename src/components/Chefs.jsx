import { useEffect, useState } from "react";
import bgimg from "../asset/chef.jpg";
import ChefCard from "./ChefCard";

const Chefs = () => {
  const [chefsdata, setChefsdata] = useState([]);

  useEffect(() => {
    const fetchChefs = async () => {
      const response = await fetch("https://foody-bd-server.vercel.app/chef/");
      const data = await response.json();
      setChefsdata(data);
    };
    fetchChefs();
  }, []);
  if (chefsdata.length < 1) {
    return <div className='text-5xl text-center py-5 my-2 bg-primary'>Loading...</div>;
  }
  return (
    
    <div
      className="hero "
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <div className=" hero-overlay pt-8">
        <div className="text-center">
        <h1 className=" font-bold text-4xl glass px-5 rounded-2xl text-secondary font-raleway inline-block py-3">Meet Our best Chef</h1>
        </div>
        <div className="flex flex-wrap justify-evenly">
          {chefsdata.map((chef, index) => (
            <ChefCard chef={chef} key={index}></ChefCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;
