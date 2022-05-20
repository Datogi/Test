import React from "react";
import { useState } from "react";

function DragDrop({ index }) {
  let [number, setNumber] = useState(true);

  function hide(index) {
    console.log("a");
    setNumber(false);

    [0, 1, 2, 3, 4, 5, 6, 7, 8].map((el) => {
      console.log(document.getElementById(el));
      document.getElementById(el).children[0].classList.remove("hidden");
      document.getElementById(el).children[1].classList.add("hidden");
      document.getElementById(el + "button").classList.add("hidden");
    });

    document.getElementById(index).children[0].classList.add("hidden");
    document.getElementById(index).children[1].classList.remove("hidden");

    document.getElementById(index + "button").classList.remove("hidden");
  }
  return (
    <div className="">
      <div
        onClick={() => {
          number && hide(index);
        }}
        className={`bg-10 w-60 bg-cover ml-3  h-40 border-2 border-gray-300 border-dashed rounded-lg p-10 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}
      >
        <div id={index}>
          <span className="mt-2 block text-sm font-medium text-white">
            DragDrop
          </span>
          <select className="hidden" id="999">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button
          id={index + "button"}
          onClick={() => {
            document.querySelector(".categories").classList.add("hidden");
            document.querySelector(".Drag")?.classList.add("hidden");
            document.querySelector(".DragDroping")?.classList.remove("hidden");
            const difficulty = document.getElementById("999").value;
          }}
          className="-ml-1 mr-2  hidden start text-white"
        >
          Start Test
        </button>
      </div>
    </div>
  );
}

export default DragDrop;
