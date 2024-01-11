import Image from "next/image";
import React from "react";

const Third = () => {
  return (
    <section className="my-10">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col gap-6">
          <div className="rounded-lg flex-[2] overflow-hidden">
            <video src="/coding.mp4" autoPlay muted loop />
          </div>
          <div className="flex-1 border rounded-lg p-3">
            <h1 className="text-4xl text-center font-bold bg-gradient-to-r from-sky-500 to-yellow-400 text-transparent bg-clip-text mb-10">
              Fully Customizable eCommerce
            </h1>

            <div className="flex font-bold mb-6 items-center gap-3">
              <div className="flex-auto mr-3">
                <Image
                  src={"/logoipsum-241.svg"}
                  alt="imaje"
                  width={100}
                  height={100}
                />
              </div>
              <h3>
                Track your products Lorem ipsum, dolor is iusto explicabo?
              </h3>
            </div>
            <div className="flex font-bold mb-6 items-center gap-3">
              <div className="flex-auto mr-3">
                <Image
                  src={"/logoipsum-234.svg"}
                  alt="imaje"
                  width={100}
                  height={100}
                />
              </div>
              <h3>
                Track your products Lorem ipsum, dolor is iusto explicabo?
              </h3>
            </div>
            <div className="flex font-bold items-center gap-3">
              <div className="flex-auto mr-3">
                <Image
                  src={"/logoipsum-225.svg"}
                  alt="imaje"
                  width={100}
                  height={100}
                />
              </div>
              <h3>
                Track your products Lorem ipsum, dolor is iusto explicabo?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
