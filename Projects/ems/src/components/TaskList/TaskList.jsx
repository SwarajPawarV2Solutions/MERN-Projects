import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start flex-nowrap w-full py-5 mt-10 gap-5"
    >
      <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">7 jan 2025</h4>
        </div>
        <h2 className="text-2xl mt-5">I want to develop a project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempora,
          iste voluptas quaerat voluptate atque?
        </p>
      </div>

      <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">7 jan 2025</h4>
        </div>
        <h2 className="text-2xl mt-5">I want to develop a project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempora,
          iste voluptas quaerat voluptate atque?
        </p>
      </div>

      <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">7 jan 2025</h4>
        </div>
        <h2 className="text-2xl mt-5">I want to develop a project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempora,
          iste voluptas quaerat voluptate atque?
        </p>
      </div>

      <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-purple-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">7 jan 2025</h4>
        </div>
        <h2 className="text-2xl mt-5">I want to develop a project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempora,
          iste voluptas quaerat voluptate atque?
        </p>
      </div>

    </div>
  );
};

export default TaskList;
