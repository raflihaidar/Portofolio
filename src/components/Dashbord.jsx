import React from "react";
import hero from "../img/hero1.png";

const Dashbord = () => {
  return (
    <div className="pt-40 w-4/5 my-auto  flex justify-between p-7 items-center">
      <div className="text-5xl font-bold text-black-100 xl:w-3/5 ml-10">
        Hi. I'm <span className="text-red-700">Ralph.</span> A Web Developer
      </div>
      <div className="xl:w-3/5 hidden xl:block group">
        <img
          src={hero}
          alt="image"
          className="group-hover:animate-bounce transition ease-in-out delay-350"
        />
      </div>
    </div>
  );
};

export default Dashbord;
