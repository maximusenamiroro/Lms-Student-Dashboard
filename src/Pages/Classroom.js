import React from "react";
import { Link, Outlet } from "react-router-dom";
import Modulepic from "../Components/Assets/img/Modulepic.png";
import Player from "../Components/Assets/img/player.svg";
import "../App.css";

const Classroom = () => {
  return (
    <>
      <div className="mt-4 pb-4 bg-white xs:hidden md:hidden">
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

      <div className=" pb-4 hidden md:hidden bg-white xs:block px-2  ">
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

                      {/* TABLET */}

                      <div className="hidden xs:hidden md:block pb-4 bg-white w-[95vw]">
        {/* box1 */}
        <div className="">
          <div className="font-medium text-3xl">Lesson1</div>
          <div className="box flex justify-between h-32 items-center rounded-lg mt-4">
            {/* Left container  */}
            <div className="flex ml-10">
              <div>
                <img className="w-[10em] h-[7.5em]" src={Modulepic} alt="" />
              </div>
              <div className="ml-9 mt-2">
                <p className="text-2xl font-medium">Introduction to UIUX</p>
                <p className="text-xl">20 Min</p>
              </div>
            </div>

            {/* right container */}
            <div className="mr-20">
              <div>
                <img className="w-[2.5em]" src={Player} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Box2 */}

        <div className=" mt-4">
          <div className="font-medium text-3xl">Lesson2</div>
          <div className="box flex justify-between h-32 items-center rounded-lg mt-4 ">
            {/* Left container  */}
            <div className="flex ml-10">
              <div>
                <img className="w-[10em] h-[7.5em]" src={Modulepic} alt="" />
              </div>
              <div className="ml-9">
                <p className="text-2xl font-semibold">Introduction to UIUX</p>
                <p className="text-xl">20 Min</p>
              </div>
            </div>

            {/* right container */}
            <div className="mr-20">
              <div>
                <img className="w-[2.5em]" src={Player} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Box3 */}

        <div className="mt-4">
          <div className="font-medium text-3xl">Lesson3</div>
          <div className="box flex justify-between h-32 items-center rounded-lg mt-4">
            {/* Left container  */}
            <div className="flex ml-10">
              <div>
                <img className="w-[10em] h-[7.5em]" src={Modulepic} alt="" />
              </div>
              <div className="ml-9">
                <p className="text-2xl font-medium">Introduction to UIUX</p>
                <p className="text-xl">20 Min</p>
              </div>
            </div>

            {/* right container */}
            <div className="mr-20">
              <div>
                <img className="w-[2.5em]" src={Player} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Box4 */}

        <div className="mt-4">
          <div className="font-medium text-3xl">Lesson4</div>
          <div className="box flex justify-between h-32 items-center rounded-lg mt-4">
            {/* Left container  */}
            <div className="flex ml-10">
              <div>
                <img className="w-[10em] h-[7.5em]"  src={Modulepic} alt="" />
              </div>
              <div className="ml-9">
                <p className="text-2xl font-medium">Introduction to UIUX</p>
                <p className="text-xl">20 Min</p>
              </div>
            </div>

            {/* right container */}
            <div className="mr-20">
              <div>
                <img className="w-[2.5em]" src={Player} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Box5 */}

        <div className="mt-4">
          <div className="font-medium text-3xl">Lesson5</div>
          <div className="box flex justify-between h-32 items-center rounded-lg mt-4">
            {/* Left container  */}
            <div className="flex ml-10">
              <div>
                <img className="w-[10em] h-[7.5em]" src={Modulepic} alt="" />
              </div>
              <div className="ml-9">
                <p className="text-2xl font-medium">Introduction to UIUX</p>
                <p className="text-xl">20 Min</p>
              </div>
            </div>

            {/* right container */}
            <div className="mr-20">
              <div>
                <img className="w-[2.5em]" src={Player} alt="" />
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
