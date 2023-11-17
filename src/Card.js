import React from "react";
import profil from "./astro.png";
import bg from "./bg.jpg"

export const Card = () => {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      <div className="flex border-white border-4 rounded-xl shadow-[0px_2px_20px_1px_white] p-6 w-[30rem] justify-between">
        <div className="">
          <h1 className="text-2xl text-indigo-300 font-bold mb-1">Siti Fajriyatis Solikha</h1>
          <h1 className="text-2xl text-indigo-300 font-bold mb-5">ichaa</h1>
          <p className="text-indigo-100 font-semibold">Jakarta timur</p>
          <p className="text-indigo-100 font-semibold">fajriyatisolikha@gmail.com</p>
        </div>
        <div className="w-[10rem]">
          <img src={profil} alt="Profil" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};
