import Navbar from "./Navbar";
import VeggiesImage from "../images/veggies-hero-image.webp";

const Homepage = () => {
  return (
    <div className="min-h-screen relative flex flex-col">
      <div className="absolute top-0 left-0 w-3/5 h-full bg-yellow-400"></div>
      <Navbar />
      <main className="relative w-full h-[calc(100vh_-_5rem)] flex items-center">
        <div className="w-1/2 flex flex-col justify-center pl-32">
          <h1 className="text-7xl font-bold text-black">
            Where Fresh is a Lifestyle
          </h1>
          <p className="mt-4 text-xl text-black">
            Join us, elevate meals, support local farmers, and reduce food
            waste.
          </p>
          <div className="mt-6">
            <button className="p-6 mr-4  font-semibold text-white bg-black rounded-full hover:bg-gray-800">
              Shop Now
            </button>
            <button className="p-6 text-lg font-semibold text-black bg-white border border-black rounded-full hover:bg-gray-200">
              Choose fresh now!
            </button>
          </div>
        </div>
        <div className="w-1/2 flex items-center">
          <img
            src={VeggiesImage}
            alt="Vegetables"
            className="relative w-full h-auto"
          />
        </div>
      </main>
    </div>
  );
};

export default Homepage;
