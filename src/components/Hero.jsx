import heroimg from "../asset/heroimg.jpg";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${heroimg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-1 text-5xl font-bold">
              Welcome To <span className="text-primary font-raleway">FoodyBd</span>
            </h1>
            <p className="mb-8 text-right font-raleway">- Embark on a flavorful journey</p>
            <p className="mb-5 text-lg">
              Discover the bold and delicious flavors of Bangladeshi cuisine on
              our FoodyBD. From savory curries to sweet desserts, our recipes
              celebrate the unique blend of spices, herbs, and fresh ingredients
              that make this cuisine a culinary adventure. Join us and explore
              the secrets of Bangladeshi cuisine!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
