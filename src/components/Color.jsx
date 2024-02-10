import { useState } from "react";

export const Color = () => {
  const [color, setColor] = useState("olive");

  return (
    <>
      <section style={{ backgroundColor: color }} className="h-screen">
        <div className="bg-orange-100 rounded-lg absolute ml-[20%] top-10 mb-20 w-3/5 p-2 flex justify-evenly   flex-wrap ">
          <p
            className="bg-white w-26 text-center mb-2 p-2 h-10 rounded-2xl"
            onClick={(event) => {
              setColor("green");
              event.preventDefault();
            }}
          >
            <a
              href=" "
              className="  p-1  pl-5 pr-5 rounded-xl text-black font-bold"
              style={{ backgroundColor: "Green" }}
            >
              Green
            </a>
          </p>
          <p
            className="bg-white  p-2 h-10 rounded-2xl mb-2"
            onClick={(event) => {
              setColor("red");
              event.preventDefault();
            }}
          >
            <a
              href=" "
              style={{ backgroundColor: "red" }}
              className=" p-1 pl-5 pr-5 rounded-xl text-black font-bold"
            >
              Red
            </a>
          </p>
          <p
            className="bg-white mb-2  p-2 h-10 rounded-2xl"
            onClick={(event) => {
              setColor("orange");
              event.preventDefault();
            }}
          >
            <a
              href=" "
              className=" p-1  rounded-xl pl-5 pr-5
          bg-orange-500 text-black font-bold"
            >
              Orange
            </a>
          </p>

          <p
            className="bg-white mb-2  p-2 h-10 rounded-2xl"
            onClick={(event) => {
              setColor("teal");
              event.preventDefault();
            }}
          >
            <a
              href=" "
              className=" p-1 pl-5 pr-5  rounded-xl
          bg-teal-500 text-black font-bold"
            >
              Teal
            </a>
          </p>

          <p
            className="bg-white mb-2  p-2 h-10 rounded-2xl"
            onClick={(event) => {
              setColor("pink");
              event.preventDefault();
            }}
          >
            <a
              href=" "
              className=" p-1 pl-5 pr-5 rounded-xl
          bg-pink-200 text-black font-bold"
            >
              Pink
            </a>
          </p>

          <p
            className="bg-white mb-2  p-2 h-10 rounded-2xl"
            onClick={(event) => {
              setColor("skyblue");
              event.preventDefault();
            }}
          >
            <a
              href=" "
              className=" p-1 pl-5 pr-5 rounded-xl
          bg-blue-200 text-black font-bold"
            >
              Blue
            </a>
          </p>
        </div>
      </section>
    </>
  );
};
