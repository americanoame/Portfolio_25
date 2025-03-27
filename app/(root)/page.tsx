import Image from "next/image";
import Skill from "@/components/shared/skill";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 opacity-0 animate-fadeIn px-4 sm:px-8  lg:px-16 overflow-hidden">

      
      <div className="text-left flex-1 mb-8 md:mb-0">
        <p className="text-xl sm:text-2xl font-thin text-gray-300 mt-1 sm:mt-10 md:mt-2">
          Full Stack Developer
        </p>
        <div className="w-16 border-t border-yellow-950 mt-2"></div>

        <div className="flex flex-wrap justify-start gap-4 mt-2 text-md sm:text-lg text-gray-400">
          <span>Authentication Expert</span>
          <span>| E-commerce Specialist</span>
          <span>| Problem Solver</span>
        </div>

        <div className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mt-6 text-yellow-600 drop-shadow-[2px_2px_2px_black] text-center sm:text-left leading-snug sm:leading-normal">
          <span className="text-pink-600 block sm:inline">
            Turning Challenges
          </span>
          <div className="mt-2">
            <span className="ml-0 sm:ml-4 block sm:inline">into Solutions</span>
          </div>
        </div>

        <Skill />
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-0 md:mt-0 md:ml-4">
        <Image
          priority={true}
          src="/image/me.png"
          width={600}
          height={600}
          alt="logo"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
