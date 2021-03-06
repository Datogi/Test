import { useState } from "react";
import Question from "./Question";

/* This example requires Tailwind CSS v2.0+ */
export default function Categories({
  name,
  index,
  setButton,
  setQuestions,
  url,
  category,
}) {
  console.log(index);
  let [number, setNumber] = useState(true);
  async function fetchData(url) {
    const data = await fetch(url);
    if (data.status == 200) {
      const res = await data.json();
      setQuestions(res.results);
      setButton(true);
    } else {
      setQuestions([]);
      return [];
    }
  }

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
        className={`bg-${url} w-60 bg-cover ml-3  h-40 border-2 border-gray-300 border-dashed rounded-lg p-10 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}
      >
        <div id={index}>
          <span className="mt-2 block text-sm font-medium text-white">
            {name}
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
            document.querySelector(".Drag").classList.add("hidden");
            const difficulty = document.getElementById("999").value;
            fetchData(
              `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
            );
          }}
          className="-ml-1 mr-2  hidden start text-white"
        >
          Start Test
        </button>
      </div>
    </div>
  );
}
