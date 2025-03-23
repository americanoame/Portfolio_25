"use client";

import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { FaLaptopCode, FaShoppingCart, FaLock } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="animate-fadeIn flex flex-wrap justify-center gap-4 lg:mt-4 relative">
      {/* "My Service" Text - Responsive */}
      <div className="absolute top-[50px] sm:top-[70px] md:top-[80px] lg:top-[70px] left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl font-bold text-center">
        My Services
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-4 mt-[100px] sm:mt-[110px] md:mt-[120px] lg:mt-[120px]">
        <Card className="w-60  p-4 shadow-lg hover:shadow-xl transition-shadow relative border-1 border-gray-300 ">
          <CardHeader className="flex flex-col items-center relative">
            <FaLaptopCode className="text-2xl absolute top-2 left-2" />
            <h2 className="text-[15px] font-semibold mt-12">
              Full Stack Developer
            </h2>
          </CardHeader>
          <div className="px-4 text-sm text-center">
            <p>
              As a Full Stack Developer, I specialize in building robust web
              applications using React, Node.js, Express, and MongoDB.
            </p>
          </div>
        </Card>

        <Card className="w-60 bg-pink-600 text-white p-4 shadow-lg hover:shadow-xl transition-shadow relative">
          <CardHeader className="flex flex-col items-center relative">
            <FaLock className="text-2xl absolute top-2 left-2" />
            <h2 className="text-[15px] font-semibold mt-12">
              Authentication Expert
            </h2>
          </CardHeader>
          <div className="px-4 text-sm text-center">
            <p>
              I implement secure authentication solutions like **JWT** and
              **NextAuth**, managing user sessions and OAuth integrations.
            </p>
          </div>
          <CardFooter className="flex justify-center">
            <button className="text-blue-200 hover:underline text-sm cursor-pointer">
              Learn More
            </button>
          </CardFooter>
        </Card>

        <Card className="w-60 bg-yellow-600 p-4 shadow-lg hover:shadow-xl transition-shadow relative">
          <CardHeader className="flex flex-col items-center relative">
            <FaShoppingCart className="text-2xl absolute top-2 left-2" />
            <h2 className="text-[15px] font-semibold mt-12">
              E-commerce Specialist
            </h2>
          </CardHeader>
          <div className="px-4 text-sm text-center">
            <p>
              I optimize online stores by developing custom shopping carts,
              integrating payment gateways, and enhancing product management.
            </p>
          </div>
          <CardFooter className="flex justify-center">
            <button className="text-blue-200 hover:underline text-sm cursor-pointer">
              Learn More
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
