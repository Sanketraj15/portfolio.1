import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
// FIX: Replaced the incorrect "figma:asset" import with a correct relative path
import profilePicture from "../assets/profile-picture.png";

// 🖼️ SANKET RAJ'S PROFILE PICTURE
// Using your professional headshot with 3D geometric background elements
// Perfect match for your 3D modeller & game developer portfolio theme!

interface AnimatedProfilePictureProps {
  imageUrl?: string;
  altText?: string;
}

export function AnimatedProfilePicture({
  // FIX: Updated the default image to use the new 'profilePicture' variable
  imageUrl = profilePicture,
  altText = "Sanket Raj - 3D Modeller & Game Developer",
}: AnimatedProfilePictureProps = {}) {
  return (
    <div className="relative flex items-center justify-center">
            {/* Outer Rotating Ring System */}     {" "}
      <motion.div
        className="absolute w-80 h-80 md:w-96 md:h-96"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
                {/* Rainbow Outer Ring */}       {" "}
        <div
          className="w-full h-full rounded-full border-4 opacity-60"
          style={{
            borderImage:
              "linear-gradient(45deg, #ff006e, #fb5607, #ffbe0b, #8338ec, #3a86ff, #06ffa5) 1",
            borderStyle: "solid",
            background:
              "linear-gradient(45deg, #ff006e20, #fb560720, #ffbe0b20, #8338ec20, #3a86ff20, #06ffa520)",
            boxShadow:
              "0 0 30px rgba(255, 0, 110, 0.3), inset 0 0 30px rgba(6, 255, 165, 0.2)",
          }}
        />
                {/* Orbital Elements */}       {" "}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full"
            style={{
              background: [
                "#ff006e",
                "#fb5607",
                "#ffbe0b",
                "#8338ec",
                "#3a86ff",
                "#06ffa5",
              ][i],
              boxShadow: `0 0 15px ${
                [
                  "#ff006e",
                  "#fb5607",
                  "#ffbe0b",
                  "#8338ec",
                  "#3a86ff",
                  "#06ffa5",
                ][i]
              }`,
              top: "50%",
              left: "50%",
              transformOrigin: "0 0",
            }}
            animate={{
              rotate: 360,
              x: Math.cos((i * 60 * Math.PI) / 180) * 180,
              y: Math.sin((i * 60 * Math.PI) / 180) * 180,
            }}
            transition={{
              duration: 8 + i,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        ))}
             {" "}
      </motion.div>
            {/* Middle Rotating Ring */}     {" "}
      <motion.div
        className="absolute w-64 h-64 md:w-80 md:h-80"
        animate={{ rotate: -360 }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      >
               {" "}
        <div
          className="w-full h-full rounded-full border-2 opacity-40"
          style={{
            borderColor: "#3a86ff",
            background:
              "radial-gradient(circle at 30% 30%, #3a86ff30, transparent)",
            boxShadow: "0 0 20px #3a86ff50",
          }}
        />
                {/* Geometric Shapes */}       {" "}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2"
            style={{
              width: "20px",
              height: "20px",
              borderColor: ["#ff006e", "#06ffa5", "#ffbe0b", "#8338ec"][i],
              top: "50%",
              left: "50%",
              transformOrigin: "0 0",
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              x: Math.cos((i * 90 * Math.PI) / 180) * 140,
              y: Math.sin((i * 90 * Math.PI) / 180) * 140,
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
             {" "}
      </motion.div>
            {/* Inner Hexagonal Frame */}     {" "}
      <motion.div
        className="absolute w-52 h-52 md:w-64 md:h-64"
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: {
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          },
          scale: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
               {" "}
        <div
          className="w-full h-full"
          style={{
            clipPath:
              "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
            background:
              "linear-gradient(135deg, #ff006e40, #06ffa540, #3a86ff40)",
            border: "3px solid",
            borderImage: "linear-gradient(45deg, #ff006e, #06ffa5, #3a86ff) 1",
            boxShadow:
              "0 0 25px rgba(255, 0, 110, 0.4), inset 0 0 25px rgba(6, 255, 165, 0.3)",
          }}
        />
             {" "}
      </motion.div>
            {/* Glowing Profile Picture Container */}     {" "}
      <motion.div
        className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden z-10"
        animate={{
          boxShadow: [
            "0 0 30px #ff006e80, 0 0 60px #ff006e40, 0 0 90px #ff006e20",
            "0 0 30px #06ffa580, 0 0 60px #06ffa540, 0 0 90px #06ffa520",
            "0 0 30px #3a86ff80, 0 0 60px #3a86ff40, 0 0 90px #3a86ff20",
            "0 0 30px #ffbe0b80, 0 0 60px #ffbe0b40, 0 0 90px #ffbe0b20",
            "0 0 30px #ff006e80, 0 0 60px #ff006e40, 0 0 90px #ff006e20",
          ],
          scale: [1, 1.02, 1],
        }}
        transition={{
          boxShadow: {
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          },
          scale: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
      >
                {/* Profile Picture */}       {" "}
        <motion.div
          className="w-full h-full rounded-full overflow-hidden border-4"
          style={{
            borderImage:
              "linear-gradient(45deg, #ff006e, #06ffa5, #3a86ff, #ffbe0b) 1",
            borderStyle: "solid",
          }}
          animate={{
            borderImage: [
              "linear-gradient(45deg, #ff006e, #06ffa5, #3a86ff, #ffbe0b) 1",
              "linear-gradient(45deg, #06ffa5, #3a86ff, #ffbe0b, #ff006e) 1",
              "linear-gradient(45deg, #3a86ff, #ffbe0b, #ff006e, #06ffa5) 1",
              "linear-gradient(45deg, #ffbe0b, #ff006e, #06ffa5, #3a86ff) 1",
            ],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
                   {" "}
          <ImageWithFallback
            src={imageUrl}
            alt={altText}
            className="w-full h-full object-cover"
          />
                    {/* Hover Overlay */}         {" "}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-transparent to-cyan-500/20 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
                 {" "}
        </motion.div>
             {" "}
      </motion.div>
            {/* Floating Particles */}     {" "}
      <div className="absolute inset-0">
               {" "}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: [
                "#ff006e",
                "#fb5607",
                "#ffbe0b",
                "#8338ec",
                "#3a86ff",
                "#06ffa5",
              ][i % 6],
              boxShadow: `0 0 6px ${
                [
                  "#ff006e",
                  "#fb5607",
                  "#ffbe0b",
                  "#8338ec",
                  "#3a86ff",
                  "#06ffa5",
                ][i % 6]
              }`,
              left: `${30 + Math.random() * 40}%`,
              top: `${30 + Math.random() * 40}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              ease: "easeInOut",
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
             {" "}
      </div>
            {/* Scanning Line Effect */}     {" "}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(6, 255, 165, 0.3) 50%, transparent 100%)",
          width: "100%",
          height: "2px",
          top: "50%",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        }}
      />
            {/* 3D Coordinate System */}     {" "}
      <div className="absolute -bottom-8 -right-8 opacity-60">
               {" "}
        <div className="flex space-x-2">
                   {" "}
          {["X", "Y", "Z"].map((axis, i) => (
            <motion.div
              key={axis}
              className="w-6 h-6 border-2 flex items-center justify-center text-xs font-mono"
              style={{
                borderColor: ["#ff006e", "#06ffa5", "#3a86ff"][i],
                backgroundColor: [`#ff006e20`, `#06ffa520`, `#3a86ff20`][i],
                color: ["#ff006e", "#06ffa5", "#3a86ff"][i],
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
                            {axis}           {" "}
            </motion.div>
          ))}
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </div>
  );
}
