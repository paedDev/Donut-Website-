import React from "react";

const Donut = ({ img }) => {
  return (
    <div className="relative bg-white/80 rounded-3xl px-10 flex flex-col gap-4 items-center justify-center w-72">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="h-32 w-32 bg-cover bg-center"
      ></div>
      <div className="space-y-3 text-center">
        <h1 className="font-bold">Dount</h1>
        <p className="text-sm leading-6 opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nam.
        </p>
      </div>
    </div>
  );
};

export default Donut;
