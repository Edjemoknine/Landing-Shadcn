import React from "react";
import { Button } from "../ui/button";

const Newsletter = () => {
  return (
    <div className="container mx-auto px-10 mb-10 ">
      <div className="border rounded-lg p-3 mx-auto max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-6">
          Start building your online store today.{" "}
        </h1>
        <p className="max-w-3xl w-full text-gray-500 mb-6">
          Curious about how bird can help your business ? Get in Touch with our
          team to learn more about our platform and How we can help you grow
          your business.
        </p>
        <Button className="bg-blue-500 font-bold">Contact Sales</Button>
      </div>
    </div>
  );
};

export default Newsletter;
