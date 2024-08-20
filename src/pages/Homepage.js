import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Categories from "../components/Categories";

const Homepage = () => {
  return (
    <>
      <div className="min-h-screen relative flex flex-col">
        <div className="absolute top-0 left-0 w-3/5 h-full bg-yellow-400"></div>
        <Navbar />
        <HeroSection />
      </div>
      <InfoSection />
      <Categories />
    </>
  );
};

export default Homepage;
