import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent";
import Event from "./pages/Event";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="font-sans xxl:max-w-screen-xxl mx-auto min-h-screen bg-bgColor">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/event" element={<Event />} />
          <Route path="/edit" element={<CreateEvent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
