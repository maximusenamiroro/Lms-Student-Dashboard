import React from "react";
import { Link } from "react-router-dom";

const Task = () => {
  return (
                 
                          //  LARGE SCREEN    
       
    <div>
      <div className=" lg:block bg-slate-300 rounded xs:hidden md:hidden ">
        <div className="w-[95%] m-auto">
          <div className="flex justify-between pt-4">
            <p className="mb-3 text-primary font-semibold">Week 1</p>
            <p className="text-green-700 bg-completedBG h-7 px-2 rounded-md">
              Completed
            </p>
          </div>

          <p>
            Write a summary of what you understand by design process using a
            product as case study{" "}
          </p>

          <div className="mt-4">
            <p className="mb-1 text-primary font-normal">Url link</p>
            <div className="mb-7 pt-0">
              <input
                type="text"
                placeholder="Placeholder"
                className="px-3 py-3 mb-4 rounded-md border-slate-500 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border focus:border-none border-slate-300 outline-none focus:outline-none focus:ring w-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <-----       -----> */}

      <div className=" bg-slate-300 rounded xs:hidden md:hidden">
        <div className="w-[95%] m-auto">
          <div className="flex justify-between pt-4">
            <p className="mb-3 text-primary font-semibold">Week 1</p>
            <p className=" text-yellow-500 bg-reviewBG h-7 px-2 rounded-md">
              In Review
            </p>
          </div>

          <p>
            Write a summary of what you understand by design process using a
            product as case study{" "}
          </p>

          <div className="mt-4">
            <p className="mb-1 text-primary font-normal">Url link</p>
            <div className="mb-7 pt-0">
              <input
                type="text"
                placeholder="Placeholder"
                className="px-3 py-3 mb-4 rounded-md border-slate-500 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border focus:border-none border-slate-300 outline-none focus:outline-none focus:ring w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <-----       -----> */}

      <div className=" bg-slate-300 rounded xs:hidden md:hidden">
        <div className="w-[95%] m-auto">
          <div className="flex justify-between pt-4">
            <p className="mb-3 text-primary font-semibold">Week 1</p>
            <p className=" text-red-600 bg-expiredBG h-7 px-2 rounded-md">
              Expired
            </p>
          </div>

          <p>
            Write a summary of what you understand by design process using a
            product as case study{" "}
          </p>

          <div className="mt-4">
            <p className="mb-1 text-primary font-normal">Url link</p>
            <div className="mb-7 pt-0">
              <input
                type="text"
                placeholder="Placeholder"
                className="px-3 py-3 mb-4 rounded-md border-slate-500 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border focus:border-none border-slate-300 outline-none focus:outline-none focus:ring w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <-----       -----> */}

      <div className=" bg-slate-300 rounded xs:hidden md:hidden">
        <div className="w-[95%] m-auto">
          <div className="flex justify-between pt-4">
            <p className="mb-3 text-primary font-semibold">Week 1</p>
            <p className="text-primary bg bg-redoBG h-7 px-2 rounded-md">
              Redo
            </p>
          </div>

          <p>
            Write a summary of what you understand by design process using a
            product as case study{" "}
          </p>

          <div className="mt-4">
            <p className="mb-1 text-primary font-normal">Url link</p>
            <div className="mb-7 pt-0">
              <input
                type="text"
                placeholder="Placeholder"
                className="px-3 py-3 mb-4 rounded-md border-slate-500 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border focus:border-none border-slate-300 outline-none focus:outline-none focus:ring w-full"
              />
            </div>
          </div>
        </div>
      </div>
     
                              {/* TABLET */}


      <div className=" hidden md:block xs:hidden mb-8 bg-slate-300 rounded h-[13EM] w-[95vw]">
        <div className="w-[95%] m-auto ">
          <div className="flex justify-between pt-4">
            <p className="mb-3 text-xl font-semibold">Week 1</p>
            <p className=" text-lg text-green-700 bg-completedBG h-7 px-2 rounded-md">
              Completed
            </p>
          </div>

          <p className="text-lg">
            Write a summary of what you understand by design process using a
            product as case study{" "}
          </p>

          <div className="mt-4">
            <p className="mb-1 text-lg font-normal">Url link</p>
            <div className="mb-7 pt-0">
              <input
                type="text"
                placeholder="Placeholder"
                className="px-3 py-3 mb-4 rounded-md border-slate-500 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border focus:border-none border-slate-300 outline-none focus:outline-none focus:ring w-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <-----       -----> */}

      <div className="  hidden md:block xs:hidden bg-slate-300 rounded w-[95vw]">
        <div className="w-[95%] m-auto">
          <div className="flex justify-between pt-4">
            <p className="mb-3 text-xl font-semibold">Week 1</p>
            <p className="text-lg text-yellow-500 bg-reviewBG h-7 px-2 rounded-md">
              In Review
            </p>
          </div>

          <p className="text-lg">
            Write a summary of what you understand by design process using a
            product as case study{" "}
          </p>

          <div className="mt-4">
            <p className="mb-1 text-lg font-normal">Url link</p>
            <div className="mb-7 pt-0">
              <input
                type="text"
                placeholder="Placeholder"
                className="px-3 py-3 mb-4 rounded-md border-slate-500 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border focus:border-none border-slate-300 outline-none focus:outline-none focus:ring w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <-----       -----> */}

      <div className="  hidden md:block xs:hidden bg-slate-300 rounded w-[95vw]">
        <div className="w-[95%] m-auto">
          <div className="flex justify-between pt-4">
            <p className="mb-3 text-xl font-semibold">Week 1</p>
            <p className="text-lg text-red-600 bg-expiredBG h-7 px-2 rounded-md">
              Expired
            </p>
          </div>

          <p className="y">
            Write a summary of what you understand by design process using a
            product as case study{" "}
          </p>

          <div className="mt-4">
            <p className="mb-1 text-primary font-normal">Url link</p>
            <div className="mb-7 pt-0">
              <input
                type="text"
                placeholder="Placeholder"
                className="px-3 py-3 mb-4 rounded-md border-slate-500 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border focus:border-none border-slate-300 outline-none focus:outline-none focus:ring w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <-----       -----> */}

      <div className="  hidden md:block xs:hidden bg-slate-300 rounded w-[95vw]">
        <div className="w-[95%] m-auto">
          <div className="flex justify-between pt-4">
            <p className="mb-3 text-xl font-semibold">Week 1</p>
            <p className="text-lg bg bg-redoBG h-7 px-2 rounded-md">
              Redo
            </p>
          </div>

          <p className="text-lg">
            Write a summary of what you understand by design process using a
            product as case study{" "}
          </p>

          <div className="mt-4">
            <p className="mb-1 text-lg font-normal">Url link</p>
            <div className="mb-7 pt-0">
              <input
                type="text"
                placeholder="Placeholder"
                className="px-3 py-3 mb-4 rounded-md border-slate-500 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border focus:border-none border-slate-300 outline-none focus:outline-none focus:ring w-full"
              />
            </div>
          </div>
        </div>
      </div>
                                     
                                     {/* mobile */}

        <div className="hidden xs:block mb-8 bg-slate-300 rounded w-[95vw]">
        <div className="w-[95%] m-auto ">
          <div className="flex justify-between pt-4">
            <p className="mb-3 text-xl font-semibold">Week 1</p>
            <p className=" text-lg text-green-700 bg-completedBG h-7 px-2 rounded-md">
              Completed
            </p>  
          </div>

          <p className="text-lg">
            Write a summary of what you understand by design process using a
            product as case study{" "}
          </p>

          <div className="mt-4">
            <p className="mb-1 text-lg font-normal">Url link</p>
            <div className="mb-7 pt-0">
              <input
                type="text"
                placeholder="Placeholder"
                className="px-3 py-3 mb-4 rounded-md border-slate-500 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border focus:border-none border-slate-300 outline-none focus:outline-none focus:ring w-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <-----       -----> */}

      <div className="  hidden xs:block bg-slate-300 rounded w-[95vw]">
        <div className="w-[95%] m-auto">
          <div className="flex justify-between pt-4">
            <p className="mb-3 text-xl font-semibold">Week 1</p>
            <p className="text-lg text-yellow-500 bg-reviewBG h-7 px-2 rounded-md">
              In Review
            </p>
          </div>

          <p className="text-lg">
            Write a summary of what you understand by design process using a
            product as case study{" "}
          </p>

          <div className="mt-4">
            <p className="mb-1 text-lg font-normal">Url link</p>
            <div className="mb-7 pt-0">
              <input
                type="text"
                placeholder="Placeholder"
                className="px-3 py-3 mb-4 rounded-md border-slate-500 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border focus:border-none border-slate-300 outline-none focus:outline-none focus:ring w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <-----       -----> */}

      <div className="  hidden xs:block bg-slate-300 rounded w-[95vw]">
        <div className="w-[95%] m-auto">
          <div className="flex justify-between pt-4">
            <p className="mb-3 text-xl font-semibold">Week 1</p>
            <p className="text-lg text-red-600 bg-expiredBG h-7 px-2 rounded-md">
              Expired
            </p>
          </div>

          <p className="y">
            Write a summary of what you understand by design process using a
            product as case study{" "}
          </p>

          <div className="mt-4">
            <p className="mb-1 text-primary font-normal">Url link</p>
            <div className="mb-7 pt-0">
              <input
                type="text"
                placeholder="Placeholder"
                className="px-3 py-3 mb-4 rounded-md border-slate-500 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border focus:border-none border-slate-300 outline-none focus:outline-none focus:ring w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <-----       -----> */}

      <div className="  hidden xs:block bg-slate-300 rounded w-[95vw]">
        <div className="w-[95%] m-auto">
          <div className="flex justify-between pt-4">
            <p className="mb-3 text-primary font-semibold">Week 1</p>
            <p className="text-primary bg bg-redoBG h-7 px-2 rounded-md">
              Redo
            </p>
          </div>

          <p>
            Write a summary of what you understand by design process using a
            product as case study{" "}
          </p>

          <div className="mt-4">
            <p className="mb-1 text-primary font-normal">Url link</p>
            <div className="mb-7 pt-0">
              <input
                type="text"
                placeholder="Placeholder"
                className="px-3 py-3 mb-4 rounded-md border-slate-500 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border focus:border-none border-slate-300 outline-none focus:outline-none focus:ring w-full"
              />
            </div>
          </div>
        </div>
      </div>

      </div>

  );
};

export default Task;
