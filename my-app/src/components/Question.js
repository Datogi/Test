import { useState } from "react";

export default function Question({ el, result, number, setNumber }) {
  console.log(result);
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(true);
  const [clicked2, setClicked2] = useState(true);
  const [clicked3, setClicked3] = useState(true);
  const [score, setScore] = useState(0);
  return (
    <div className="">
      <div className="text-center w-1/2 bg-9 bg-cover mx-auto my-5 border-2 border-black">
        <div>
          <div className=" bg-blend-darken h-20">
            <h1 className="mt-2 text-xl font-medium text-black">
              {el.question}
            </h1>
          </div>
          <div className="mt-6 ml-3 justify-between  ">
            <div className=" flex  ">
              <div
                onClick={() => {
                  setClicked(false);
                  setClicked1(true);
                  setClicked2(true);
                  setClicked3(true);
                }}
                className={
                  clicked
                    ? "h-5 w-5 mt-1 mr-2 border-black border-2 rounded-full "
                    : "h-5 w-5  mr-2 border-black mt-1 border-2 rounded-full bg-blue-500"
                }
              ></div>
              <h1
                onClick={() => {
                  setClicked(false);
                  setClicked1(true);
                  setClicked2(true);
                  setClicked3(true);
                }}
                className="text-lg text-black"
              >
                {" "}
                {result[0]}
              </h1>
            </div>
            <div className=" flex  ">
              <div
                onClick={() => {
                  setClicked1(false);
                  setClicked(true);
                  setClicked2(true);
                  setClicked3(true);
                }}
                className={
                  clicked1
                    ? "h-5 w-5 mr-2 mt-1 border-black border-2 rounded-full "
                    : "h-5 w-5 mr-2 mt-1 border-black border-2 rounded-full bg-blue-500"
                }
              ></div>
              <h1
                onClick={() => {
                  setClicked1(false);
                  setClicked(true);
                  setClicked2(true);
                  setClicked3(true);
                }}
                className="text-lg text-black"
              >
                {result[1]}
              </h1>
            </div>
            {el.type != "boolean" && (
              <>
                <div className=" flex ">
                  <div
                    onClick={() => {
                      setClicked2(false);
                      setClicked(true);
                      setClicked1(true);
                      setClicked3(true);
                    }}
                    className={
                      clicked2
                        ? "h-5 w-5 mr-2 mt-1  border-black border-2 rounded-full "
                        : "h-5 w-5 mr-2 mt-1  border-black border-2 rounded-full bg-blue-500"
                    }
                  ></div>
                  <h1
                    onClick={() => {
                      setClicked2(false);
                      setClicked(true);
                      setClicked1(true);
                      setClicked3(true);
                    }}
                    className="text-lg text-black"
                  >
                    {result[2]}
                  </h1>
                </div>
                <div className="flex ">
                  <div
                    onClick={() => {
                      setClicked3(false);
                      setClicked(true);
                      setClicked1(true);
                      setClicked2(true);
                    }}
                    className={
                      clicked3
                        ? "h-5 w-5 mr-2 mt-1 border-black border-2  rounded-full "
                        : "h-5 w-5 mr-2 mt-1 border-black border-2  rounded-full bg-blue-500"
                    }
                  ></div>
                  <h1
                    className="text-lg text-black"
                    onClick={() => {
                      setClicked3(false);
                      setClicked(true);
                      setClicked1(true);
                      setClicked2(true);
                    }}
                  >
                    {result[3]}
                  </h1>
                </div>
                <div className="w-full">
                  <button
                    onClick={() => {
                      number < 9 &&
                        document
                          .querySelector(".bg-blue-500")
                          .parentElement.querySelector("h1").innerText ==
                          el.correct_answer &&
                        setScore(score + 1);

                      number < 9 && setNumber(number + 1);
                      number == 9 &&
                        document.querySelector(".h-10").classList.add("hidden");
                      number == 9 &&
                        document
                          .querySelector(".score")
                          .classList.remove("hidden");
                    }}
                    className="h-10 w-40 -ml-3 mt-2 mb-3 rounded-full bg-green-500 text-white"
                  >
                    {number < 9 ? "proceed" : "submit"}
                  </button>
                  <div
                    className={
                      score > 5
                        ? "text-2xl -ml-1 score text-green-500"
                        : "text-2xl -ml-1 score text-red-500"
                    }
                  >
                    {score}
                    <span className="text-black">/10</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
