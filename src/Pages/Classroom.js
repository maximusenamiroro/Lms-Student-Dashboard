import React from "react";
import { Link, Outlet } from "react-router-dom";
import Modulepic from "../Components/Assets/img/Modulepic.png";
import Player from "../Components/Assets/img/player.svg";
import "../App.css";

const Classroom = () => {
  return (
    <>
      <div className="mt-4 pb-4 bg-white xs:hidden">
        {/* box1 */}
        <div className="">
          <div className="font-medium text-xl">Lesson1</div>
          <div className="box flex justify-between h-24 items-center rounded-lg mt-4">
            {/* Left container  */}
            <div className="flex ml-10">
              <div>
                <img src={Modulepic} alt="" />
              </div>
              <div className="ml-9">
                <p className="text-xl font-medium">Introduction to UIUX</p>
                <p>20 Min</p>
              </div>
            </div>

            {/* right container */}
            <div className="mr-20">
              <div>
                <img src={Player} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Box2 */}

        <div className=" mt-4">
          <div className="font-medium text-xl">Lesson2</div>
          <div className="box flex justify-between h-24 items-center rounded-lg mt-4 ">
            {/* Left container  */}
            <div className="flex ml-10">
              <div>
                <img src={Modulepic} alt="" />
              </div>
              <div className="ml-9">
                <p className="text-xl font-medium">Introduction to UIUX</p>
                <p>20 Min</p>
              </div>
            </div>

            {/* right container */}
            <div className="mr-20">
              <div>
                <img src={Player} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Box3 */}

        <div className="mt-4">
          <div className="font-medium text-xl">Lesson3</div>
          <div className="box flex justify-between h-24 items-center rounded-lg mt-4">
            {/* Left container  */}
            <div className="flex ml-10">
              <div>
                <img src={Modulepic} alt="" />
              </div>
              <div className="ml-9">
                <p className="text-xl font-medium">Introduction to UIUX</p>
                <p>20 Min</p>
              </div>
            </div>

            {/* right container */}
            <div className="mr-20">
              <div>
                <img src={Player} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Box4 */}

        <div className="mt-4">
          <div className="font-medium text-xl">Lesson4</div>
          <div className="box flex justify-between h-24 items-center rounded-lg mt-4">
            {/* Left container  */}
            <div className="flex ml-10">
              <div>
                <img src={Modulepic} alt="" />
              </div>
              <div className="ml-9">
                <p className="text-xl font-medium">Introduction to UIUX</p>
                <p>20 Min</p>
              </div>
            </div>

            {/* right container */}
            <div className="mr-20">
              <div>
                <img src={Player} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Box5 */}

        <div className="mt-4">
          <div className="font-medium text-xl">Lesson5</div>
          <div className="box flex justify-between h-24 items-center rounded-lg mt-4">
            {/* Left container  */}
            <div className="flex ml-10">
              <div>
                <img src={Modulepic} alt="" />
              </div>
              <div className="ml-9">
                <p className="text-xl font-medium">Introduction to UIUX</p>
                <p>20 Min</p>
              </div>
            </div>

            {/* right container */}
            <div className="mr-20">
              <div>
                <img src={Player} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}

      <div className=" pb-4 hidden bg-white xs:block px-2 ">
        {/* box1 */}
        <div className="">
          <div className="font-medium text-xl">Lesson1</div>
          <div className="box flex justify-between h-24 items-center rounded-lg mt-4">
            {/* Left container  */}
            <div className="flex ml-10">
              <div>
                <img src={Modulepic} alt="" />
              </div>
              <div className="ml-9">
                <p className="text-xl font-medium">Introduction to UIUX</p>
                <p>20 Min</p>
              </div>
            </div>

            {/* right container */}
            <div className="mr-20">
              <div>
                <img src={Player} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Box2 */}

        <div className=" mt-4">
          <div className="font-medium text-xl">Lesson2</div>
          <div className="box flex justify-between h-24 items-center rounded-lg mt-4 ">
            {/* Left container  */}
            <div className="flex ml-10">
              <div>
                <img src={Modulepic} alt="" />
              </div>
              <div className="ml-9">
                <p className="text-xl font-medium">Introduction to UIUX</p>
                <p>20 Min</p>
              </div>
            </div>

            {/* right container */}
            <div className="mr-20">
              <div>
                <img src={Player} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Box3 */}

        <div className="mt-4">
          <div className="font-medium text-xl">Lesson3</div>
          <div className="box flex justify-between h-24 items-center rounded-lg mt-4">
            {/* Left container  */}
            <div className="flex ml-10">
              <div>
                <img src={Modulepic} alt="" />
              </div>
              <div className="ml-9">
                <p className="text-xl font-medium">Introduction to UIUX</p>
                <p>20 Min</p>
              </div>
            </div>

            {/* right container */}
            <div className="mr-20">
              <div>
                <img src={Player} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Box4 */}

        <div className="mt-4">
          <div className="font-medium text-xl">Lesson4</div>
          <div className="box flex justify-between h-24 items-center rounded-lg mt-4">
            {/* Left container  */}
            <div className="flex ml-10">
              <div>
                <img src={Modulepic} alt="" />
              </div>
              <div className="ml-9">
                <p className="text-xl font-medium">Introduction to UIUX</p>
                <p>20 Min</p>
              </div>
            </div>

            {/* right container */}
            <div className="mr-20">
              <div>
                <img src={Player} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Box5 */}

        <div className="mt-4">
          <div className="font-medium text-xl">Lesson5</div>
          <div className="box flex justify-between h-24 items-center rounded-lg mt-4">
            {/* Left container  */}
            <div className="flex ml-10">
              <div>
                <img src={Modulepic} alt="" />
              </div>
              <div className="ml-9">
                <p className="text-xl font-medium">Introduction to UIUX</p>
                <p>20 Min</p>
              </div>
            </div>

            {/* right container */}
            <div className="mr-20">
              <div>
                <img src={Player} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Classroom;
