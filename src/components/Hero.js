import React, { useState } from "react";
import profilePic from "../assets/images/my-profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import blobshape from "blobshape";
import ParallaxTilt from "react-parallax-tilt";

const Hero = () => {
  // Generate initial blob path
  const [blob, setBlob] = useState(
    blobshape({
      size: 300,
      complexity: 0.8,
      contrast: 0.6,
    })
  );

  // Generate a new blob shape on hover or every few seconds
  const generateNewBlob = () => {
    setBlob(
      blobshape({
        size: 300,
        complexity: 0.8,
        contrast: 0.6,
      })
    );
  };

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-12">
      {/* Text */}
      <motion.div
        className="text-center md:text-left max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Hi, I'm Jeevitha
        </h1>
        <h2 className="text-lg sm:text-2xl mb-6 text-gray-200">
          <Typewriter
            words={["Web Developer", "React Enthusiast"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </h2>
        <a
          href="#projects"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-100 transition duration-300"
        >
          View My Work
        </a>
      </motion.div>

      {/* Profile Image with Animated Blob */}
      <motion.div
        className="w-72 h-72 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onHoverStart={generateNewBlob} // Animate on hover
        whileHover={{ scale: 1.05 }} // Slightly scale up on hover
      >
        {/* Animated Blob SVG */}
        <ParallaxTilt>
          <img
            src={profilePic}
            alt="Custom Shape"
            className="w-full h-full object-cover"
            style={{
              clipPath:
                "polygon(  0% 0%,   100% 0%,   100% 85%,  50% 85%, 25% 95%, 0% 85%",
            }}
          />
        </ParallaxTilt>
      </motion.div>
    </section>
  );
};

export default Hero;
