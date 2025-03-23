"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Tech image paths
const techImages = [
  "/image/css.png",
  "/image/git.png",
  "/image/html.png",
  "/image/javascript.png",
  "/image/mongodb.png",
  "/image/next.png",
  "/image/nodejs.png",
  "/image/reactjs.png",
  "/image/redux.png",
  "/image/typescript.png",
];

// Shuffle array helper function
const shuffleArray = (array: string[]) =>
  array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

// Circle configuration
const CIRCLE = {
  RADIUS: 90,
  PIN_RADIUS: 30,
  CENTER_X: 150,
  CENTER_Y: 150,
};

// Precomputed size
const CIRCLE_SIZE = (CIRCLE.RADIUS + CIRCLE.PIN_RADIUS) * 2;
const PIN_POSITION = {
  left: CIRCLE.CENTER_X + 20 - CIRCLE.PIN_RADIUS,
  top: CIRCLE.CENTER_Y + 15 - CIRCLE.PIN_RADIUS,
};

const Home = () => {
  const [shuffledImages, setShuffledImages] = useState<string[]>(techImages);

  useEffect(() => {
    // setMounted(true);
    const interval = setInterval(() => {
      setShuffledImages(shuffleArray(techImages));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Calculate the position for each image around the circle

  const calculatePosition = (index: number) => {
    const angle = (index / shuffledImages.length) * 2 * Math.PI;

    // Calculate the horizontal position based on the angle using cosine
    const horizontalPosition =
      CIRCLE.CENTER_X + (CIRCLE.RADIUS + CIRCLE.PIN_RADIUS) * Math.cos(angle);

    // Calculate the vertical position based on the angle using sine
    const verticalPosition =
      CIRCLE.CENTER_Y + (CIRCLE.RADIUS + CIRCLE.PIN_RADIUS) * Math.sin(angle);
    return { horizontalPosition, verticalPosition };
  };

  return (
    <div className="relative hidden md:block mt-8 h-[300px] justify-center items-center  animate-pulse">
      


      <div
        className="absolute rounded-full"
        style={{
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
          left: CIRCLE.CENTER_X - CIRCLE_SIZE / 2,
          top: CIRCLE.CENTER_Y - CIRCLE_SIZE / 2,
        }}
      />

      {/* Pin in the center */}
      <div
        className="absolute w-9 h-9 bg-pink-900 rounded-full flex items-center justify-center p-1"
        style={PIN_POSITION}
      >
        <span className="text-gray-400 text-1xl font-bold ">AS</span>
      </div>

      {/* Rotating images */}
      <div
        className="absolute w-full h-full animate-spin-slow"
        style={{
          transformOrigin: `${CIRCLE.CENTER_X}px ${CIRCLE.CENTER_Y}px`,
        }}
      >
        {shuffledImages.map((image, index) => {
          const { horizontalPosition, verticalPosition } =
            calculatePosition(index);

          return (
            <div
              key={index}
              className="absolute  transition-all duration-500"
              style={{
                left: `${horizontalPosition - 15}px`, // Centering the image
                top: `${verticalPosition - 15}px`,
              }}
            >
              <Image
                src={image}
                alt={`tech image ${index}`}
                width={30}
                height={30}
                className="object-cover rounded-full p-1 bg-black dark:bg-white"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
