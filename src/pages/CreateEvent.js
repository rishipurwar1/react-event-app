import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    event: "",
    host: "",
    startTime: "2022-10-03T00:00",
    endTime: "2022-10-03T00:00",
    location: "",
    photo: "",
  });
  let navigate = useNavigate();
  const location = useLocation();

  const onInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("event", JSON.stringify(formData));
    navigate("/event");
  };

  useEffect(() => {
    const event = JSON.parse(localStorage.getItem("event"));
    if (event && location.pathname === "/edit") {
      setFormData(event);
    } else {
      localStorage.removeItem("event");
    }
  }, [location.pathname]);
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <h1 className="font-bold text-center text-6xl bg-gradient-to-r from-gradientOne to-gradientTwo bg-clip-text text-transparent">
          {`${
            formData.event && location.pathname === "/edit" ? "Edit" : "Create"
          }`}{" "}
          Event
        </h1>
        <div className="w-full mb-4">
          <label htmlFor="event" className="text-sm font-medium text-secondary">
            Event Name
          </label>
          <div className="p-1 rounded-xl max-w-sm bg-gradient-to-r from-gradientOne to-gradientTwo">
            <input
              placeholder="Enter event name"
              value={formData.event}
              onChange={onInputChange}
              type="text"
              name="event"
              id="event"
              className="w-full py-3 px-4 rounded-lg focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="w-full  mb-4">
          <label htmlFor="host" className="text-sm font-medium text-secondary">
            Host Name
          </label>
          <div className="p-1 rounded-xl max-w-sm bg-gradient-to-r from-gradientOne to-gradientTwo">
            <input
              placeholder="Enter host name"
              value={formData.host}
              onChange={onInputChange}
              type="text"
              name="host"
              id="host"
              className="w-full py-3 px-4 rounded-lg focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="startTime"
            className="text-sm font-medium text-secondary"
          >
            Start time
          </label>
          <div className="p-1 rounded-xl max-w-sm bg-gradient-to-r from-gradientOne to-gradientTwo">
            <input
              type="datetime-local"
              onChange={onInputChange}
              id="startTime"
              name="startTime"
              value={formData.startTime}
              min="2022-10-03T00:00"
              className="w-full py-3 px-4 rounded-lg focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="endTime"
            className="text-sm font-medium text-secondary"
          >
            End time
          </label>
          <div className="p-1 rounded-xl max-w-sm bg-gradient-to-r from-gradientOne to-gradientTwo">
            <input
              type="datetime-local"
              onChange={onInputChange}
              id="endTime"
              name="endTime"
              value={formData.endTime}
              min="2022-10-03T00:00"
              className="w-full py-3 px-4 rounded-lg focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="w-full  mb-4">
          <label
            htmlFor="location"
            className="text-sm font-medium text-secondary"
          >
            Location
          </label>
          <div className="p-1 rounded-xl max-w-sm bg-gradient-to-r from-gradientOne to-gradientTwo">
            <input
              placeholder="Enter location"
              onChange={onInputChange}
              type="text"
              value={formData.location}
              name="location"
              id="location"
              className="w-full py-3 px-4 rounded-lg focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="w-full  mb-4">
          <label htmlFor="photo" className="text-sm font-medium text-secondary">
            Event Photo
          </label>
          <div className="p-1 rounded-xl max-w-sm bg-gradient-to-r from-gradientOne to-gradientTwo">
            <input
              placeholder="Enter event photo url"
              onChange={onInputChange}
              type="text"
              value={formData.photo}
              name="photo"
              id="photo"
              className="w-full py-3 px-4 rounded-lg focus:outline-none"
              required
            />
          </div>
        </div>
        <button className="w-full text-xl text-white self-end bg-gradient-to-r from-gradientOne to-gradientTwo py-4 px-16 rounded-xl font-bold">
          Next 👉
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
