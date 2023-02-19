import React from "react";
import MyPhoto from "../img/myphoto.png";
import Tooltip from "@mui/material/Tooltip";

const About = () => {
  return (
    <div className="w-4/5  m-auto text-center py-56" id="About">
      <div className="text-3xl  font-semibold mb-5">About Me</div>
      <div className="flex flex-col xl:flex-row md:justify-evenly items-center gap-5 md:align-middle">
        <Tooltip
          disableFocusListener
          disableTouchListener
          title="it's me, Ralph!"
          placement="left"
        >
          <div className="w-4/3 hidden md:block grayscale hover:grayscale-0 ease-out duration-300">
            <img src={MyPhoto} alt="gambar" />
          </div>
        </Tooltip>
        <div className="text-justify md:w-1/3">
          <p className="text-2xl my-2">My Name is Rafli Haidar Nashif</p>
          <p className="my-2">
            I have been working as a{" "}
            <span className="text-red-700">front-end developer </span>since
            2022. I’ve always been someone who has both a creative and a logical
            side. When I discovered web design in college, I realized it would
            be the perfect fit. I could use my creative side to design and my
            logical side to code. As a bonus, being both designer and developer
            allows me to make sure no detail is lost in translation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
