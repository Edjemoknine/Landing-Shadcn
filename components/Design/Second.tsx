import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const content = [
  {
    icon: "/logoipsum-224.svg",
    title: "Safety builder",
    desc: "lorem ipsum dolor sit amet",
    alt: "lorem ",
  },
  {
    icon: "/logoipsum-243.svg",
    title: "Safety builder",
    desc: "lorem ipsum dolor sit amet",
    alt: "lorem ",
  },
  {
    icon: "/logoipsum-241.svg",
    title: "Safety builder",
    desc: "lorem ipsum dolor sit amet",
    alt: "lorem ",
  },
  {
    icon: "/logoipsum-233.svg",
    title: "Safety builder",
    desc: "lorem ipsum dolor sit amet",
    alt: "lorem ",
  },
  {
    icon: "/logoipsum-234.svg",
    title: "Safety builder",
    desc: "lorem ipsum dolor sit amet",
    alt: "lorem ",
  },
  {
    icon: "/logoipsum-237.svg",
    title: "Safety builder",
    desc: "lorem ipsum dolor sit amet",
    alt: "lorem ",
  },
];
const Second = () => {
  return (
    <section>
      <div className="container mx-auto flex md:flex-row flex-col pb-10">
        <div className="p-5 justify-center flex-1 ">
          <h1 className="bg-gradient-to-r mb-8 md:text-5xl text-4xl font-bold from-blue-500 to-green-500 text-transparent bg-clip-text">
            From startup to enterprise, Bird Services is built for every type of
            business
          </h1>
          <p className="text-xl mb-8">
            Built for all business and companies that wanna grow their business
            fast and easily
          </p>
          <Button className="px-10 py-5 bg-blue-500 font-bold text-white">
            Get Started
          </Button>
        </div>
        <div className="p-5 justify-center flex-[1] overflow-hidden  ">
          <video
            className="rounded-xl"
            muted
            autoPlay
            loop
            src="/work.mp4"
          ></video>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 place-content-center gap-6">
          {content.map((di) => (
            <div
              className="border hover:scale-105 duration-300 h-52 flex justify-between flex-col rounded-lg p-6  text-gray-500"
              key={di.alt}
            >
              <Image
                src={di.icon}
                className="flex justify-center items-center "
                alt={di.alt}
                width={100}
                height={100}
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-black to-gray-400 text-transparent bg-clip-text">
                {di.title}
              </h3>
              <p className=" font-bold bg-gradient-to-r from-black to-gray-400 text-transparent bg-clip-text">
                {di.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Second;
