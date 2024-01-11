"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const images = [
  { url: "/logoipsum-237.svg", alt: "log" },
  // { url: "/logoipsum-297.svg", alt: "log" },
  { url: "/logoipsum-285.svg", alt: "log" },
  { url: "/logoipsum-250.svg", alt: "log" },
  { url: "/logoipsum-260.svg", alt: "log" },
  { url: "/logoipsum-261.svg", alt: "log" },
  { url: "/logoipsum-264.svg", alt: "" },
  { url: "/logoipsum-265.svg", alt: "" },
  { url: "/logoipsum-297.svg", alt: "" },
];

const Caroussel = () => {
  const [Img, setImg] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImg((prev) => (prev === images.length ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="mt-10">
      <div className="bg-clip-text pb-14 text-transparent bg-gradient-to-r from-blue-500 to-teal-400 font-bold text-3xl">
        More than 100+ brands have built thier business with Bird Software
      </div>
      <AnimatePresence>
        <div className="grid grid-cols-3 md:flex gap-4 justify-between">
          {images.map((image, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              key={index}
              animate={{
                opacity: index === Img ? 1 : 0.6,
                scale: index === Img ? 1.5 : 1,
              }}
              transition={{
                opacity: { duration: 0.5 },
              }}
            >
              <Image src={image.url} alt={image.alt} width={110} height={120} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Caroussel;
