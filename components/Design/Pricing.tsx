import React from "react";
import { Button } from "../ui/button";
const prices = [
  {
    name: "Basic",
    price: "$40/month",
    fees: "3.7% +30£ per transaction",
    description: "lorem ipsum dolor sit amet, consectetur adip ",
  },
  {
    name: "Popular",
    price: "$70/month",
    fees: "3.9% +30£ per transaction",
    description:
      "lorem Ips incorrectly  formatted incorrectly in the description of the transaction ",
  },
  {
    name: "Premium",
    price: "$200/month",
    fees: "3.4% +30£ per transaction",
    description:
      "lorem Ips incorrectly formatted incorrectly in the description of the transaction ",
  },
];
const Pricing = () => {
  return (
    <section>
      <div className="container px-10 mx-auto my-20">
        <div className="flex flex-col justify-center text-center items-center bg-gradient-to-r bg-clip-text text-transparent to-sky-300 from-blue-950 font-bold text-4xl">
          Pricing
          <div className="text-2xl font-bold text-center md:text-xl my-10">
            Simple and transparent Pricing plan for all business customers
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {prices.map((price) => (
            <div
              className="flex flex-col space-y-6 justify-between border rounded-lg p-3"
              key={price.name}
            >
              <h2 className="font-bold text-xl">{price.name}</h2>
              <h3>{price.price}</h3>
              <span>{price.fees}</span>
              <p>{price.description}</p>
              <Button className="bg-blue-500 font-bold ">Get Started</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
