import HeroImage from "../hero-image.png";
import Image from "next/image"
const hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <Image
        src={HeroImage}
        alt="heroimage"
        className="object-cover mx-auto my-8 w-48 h-48 rounded-full transition-transform duration-300 hover:scale-105"
      />
      <h1 className="font-bold text-4xl">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-blue-600">
          rabi
        </span>
        , Front-End Developer
      </h1>
      <p className="text-gray-500 mt-4 text-lg">
        I specialize in building modern and responsive web applications.
      </p>
          <div className="space-x-2 mt-8">
              <button className="px-4 py-2 hover:scale-105 duration-300 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">Contact With Me</button>
              <button className="px-4 py-2 hover:scale-105 duration-300 bg-gradient-to-r from-orange-800 to-orange-200 rounded-full">Resume</button>
      </div>
    </div>
  );
};

export default hero;
