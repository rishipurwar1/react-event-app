import React, { useEffect, useState } from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const Event = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const event = JSON.parse(localStorage.getItem("event"));
    setData(event);
  }, []);
  return data ? (
    <div className="flex flex-col-reverse xl:items-start xl:flex-row xl:justify-between min-h-screen px-0 py-0 sm:px-32 md:px-44 sm:py-20 xl:p-44">
      <div className="px-7 sm:px-0 self-start">
        <h1 className="text-primary text-5xl font-bold mb-4">{data.event}</h1>
        <p className="text-neutral text-lg">
          Hosted by <span className="font-bold">{data.host}</span>
        </p>
        <div className="mt-16">
          <div className="flex items-center gap-x-5">
            <span className="bg-white p-4 inline-block rounded-lg shadow-sm">
              <HiOutlineCalendar className="text-[#8456EC] w-6 h-6" />
            </span>
            <div>
              <p className="text-primary font-bold text-lg">{data.startTime}</p>
              <p className="text-secondary">
                to <span className="font-bold">{data.endTime} </span>
                UTC +10
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-5 mt-8">
            <span className="bg-white p-4 inline-block rounded-lg shadow-sm">
              <HiOutlineLocationMarker className="text-[#8456EC] w-6 h-6" />
            </span>
            <div>
              <p className="text-primary font-bold text-lg">Street Name</p>
              <p className="text-secondary">{data.location}</p>
            </div>
          </div>
        </div>
        <Link
          to="/edit"
          className="inline-block text-normal text-white bg-gradient-to-r from-gradientOne to-gradientTwo p-4 mt-14 rounded-xl"
        >
          ✏️ Edit event details
        </Link>
      </div>
      <div className="mb-9 xl:mb-0">
        <img className="w-[500px]" src={data.photo} alt="event" />
      </div>
    </div>
  ) : (
    <h1>Event doest not exist!</h1>
  );
};

export default Event;
