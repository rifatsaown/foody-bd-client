import Chefs from "./Chefs";
import Contact from "./Contact";
import Features from "./Features";
import Hero from "./Hero";
import useTitle from "./hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Hero/>
      <Chefs/>
      <Features/>
      <Contact></Contact>
    </>
  );
};

export default Home;
