import { useEffect, useState } from "react";
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
    return (
      <div className="text-center py-8">
        <button className="btn loading btn-primary text-3xl">loading</button>
      </div>
    );
  }
  return (
    <div className="hero bg-orange-100 ">
      <div className=" pt-8">
        <div className="text-center">
          <h1 className=" font-bold text-4xl glass px-5 rounded-2xl  font-raleway inline-block py-3">
            Meet Our best Chef
          </h1>
        </div>
        <div className="flex flex-wrap justify-evenly">
          {chefsdata?.map((chef, index) => (
            <ChefCard chef={chef} key={index}></ChefCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;
