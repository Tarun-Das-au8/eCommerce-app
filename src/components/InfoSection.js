import FreshBucket from "../images/fresh-bucket.jpg";
import ReCycle from "../images/recycle-process.jpg";
import DeliveryTruck from "../images/delivery-truck-large.jpg";
import Globe from "../images/globe.jpg";

const InfoSection = () => {
  return (
    <div className="relative flex">
      <div className="grid grid-cols-4 gap-32 mx-auto my-24">
        <div className="w-full max-w-32 flex flex-col items-center justify-between gap-4">
          <div className="w-20 h-full">
            <img
              src={FreshBucket}
              alt="fresh-bucket"
              className="object-cover"
            />
          </div>
          <p className="text-center text-lg font-medium">
            As Fresh as the golden days
          </p>
        </div>
        <div className="w-full max-w-32 flex flex-col items-center justify-between gap-4">
          <div className="w-20 h-full">
            <img src={ReCycle} alt="fresh-bucket" className="object-cover" />
          </div>
          <p className="text-center text-lg font-medium">
            Zero Waste Management
          </p>
        </div>
        <div className="w-full max-w-32 flex flex-col items-center justify-between gap-4">
          <div className="w-20 h-full">
            <img
              src={DeliveryTruck}
              alt="fresh-bucket"
              className="object-cover"
            />
          </div>
          <p className="text-center text-lg font-medium">
            Transparent Supply Chain
          </p>
        </div>
        <div className="w-full max-w-32 flex flex-col items-center justify-between gap-4">
          <div className="w-20 h-full">
            <img src={Globe} alt="fresh-bucket" className="object-cover" />
          </div>
          <p className="text-center text-lg font-medium">Sourced Globally</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
