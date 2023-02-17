import React from "react";
import BookingStore from "../img/booking-store.png";
import OnlineStore from "../img/online-store.png";
import Starbucks from "../img/starbucks.png";
import Weather from "../img/weather.png";

const dataProject = [
  {
    name: BookingStore,
    title: "Booking Hotel Web Store",
    link: "https://github.com/raflihaidar/Booking-Store",
  },
  {
    name: OnlineStore,
    title: "Online Web Store",
    link: "https://github.com/raflihaidar/Online-Store",
  },
  {
    name: Starbucks,
    title: "Starbucks Web Clone",
    link: "https://github.com/raflihaidar/Sturbucks-Web-Clone",
  },
  {
    name: Weather,
    title: "Weather App",
    link: "https://github.com/raflihaidar/Weather-App",
  },
];

const Project = () => {
  return (
    <div className="w-4/5 mx-auto my-28 p-10" id="Projects">
      <p className="text-center text-3xl font-semibold my-16">Project</p>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10">
        {dataProject.map((item, index) => (
          <div className="group relative w-full cursor-pointer" key={index}>
            <div className="w-full h-full mx-auto">
              <img
                src={item.name}
                alt="booking store"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-0 xl:group-hover:opacity-80 xl:transition-opacity"></div>
            <div className="absolute flex flex-col gap-y-5 item-center justify-center inset-0 text-white text-center -z-10 xl:group-hover:z-0">
              <h1>{item.title}</h1>
              <button className="w-32 bg-gray-600 hover:bg-slate-800 py-3 px-3 rounded-full text-sm mx-auto block transition-colors">
                <a href={item.link} target="_blank">
                  View github
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
