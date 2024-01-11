import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/logoipsum-241.svg"} width={60} height={60} alt="logo" />
    </Link>
  );
};

export default Logo;
