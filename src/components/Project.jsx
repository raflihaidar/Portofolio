import React from "react";
import BookingStore from "../img/booking-store.png";
import OnlineStore from "../img/online-store.png";
import Starbucks from "../img/starbucks.png";
import Weather from "../img/weather.png";
import Modals from "./Modals";
import { useState } from "react";

const dataProject = [
  {
    name: BookingStore,
    title: "Booking Hotel Web Store",
    link: "https://github.com/raflihaidar/Booking-Store",
    tech: "(html, js, css)",
    desc: "The hotel booking website program is a web-based application designed to allow users to search, compare, and book hotel accommodations online.",
  },
  {
    name: OnlineStore,
    title: "Online Web Store",
    link: "https://github.com/raflihaidar/Online-Store",
    tech: "(React js, Redux, bootstrap)",
    desc: "The program includes a user-friendly interface, where customers can browse products or services, view photos and descriptions, and add them to their cart for checkout.",
  },
  {
    name: Starbucks,
    title: "Starbucks Web Clone",
    link: "https://github.com/raflihaidar/Sturbucks-Web-Clone",
    tech: "(html, CSS)",
    desc: "A Starbucks web clone program is a web-based application designed to replicate the functionality of the Starbucks website.",
  },
  {
    name: Weather,
    title: "Weather App",
    link: "https://github.com/raflihaidar/Weather-App",
    tech: "(React js, Tailwind css)",
    desc: "Application to search and analyze the weather in different regions. The technology used is react js and tailwind css for styling",
  },
];

const Project = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  const handleModals = (item) => {
    setOpen(true);
    setModalContent([item]);
  };

  return (
    <div className="w-4/5 mx-auto my-28 p-10" id="Projects">
      <p className="text-center text-3xl font-semibold my-16">Project</p>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10">
        {dataProject.map((item, index) => (
          <div>
            <div
              className="group relative w-full cursor-pointer shadow-lg "
              onClick={() => handleModals(item)}
              key={index}
            >
              <div className="w-full h-full mx-auto">
                <img
                  src={item.name}
                  alt="booking store"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black opacity-0 xl:group-hover:opacity-80 xl:transition-opacity"></div>
              <div className="absolute w-4/5 p-5 mx-auto flex flex-col gap-y-5 item-center justify-center inset-0 text-white -z-10 xl:group-hover:z-0">
                <h1 className="text-lg text-center font-semibold">
                  {item.title}
                </h1>
                <p className="text-center hidden xl:block">{item.tech}</p>
                <button className="w-32 bg-gray-600 hover:bg-slate-800 py-3 px-3 rounded-full text-sm mx-auto block transition-colors">
                  <a href={item.link}>View github</a>
                </button>
              </div>
            </div>
            <div>
              <Modals
                open={open}
                onClose={() => setOpen(false)}
                modalContent={modalContent}
              ></Modals>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
