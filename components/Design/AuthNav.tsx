import React from "react";
import { Button } from "../ui/button";

const AuthNav = () => {
  return (
    <div className="flex gap-6">
      <Button variant={"outline"}>Sign In</Button>
      <Button variant={"default"}>Sign Up</Button>
    </div>
  );
};

export default AuthNav;
