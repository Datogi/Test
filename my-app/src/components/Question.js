/* This example requires Tailwind CSS v2.0+ */

import { useState } from "react";

export default function Question({ el }) {
  console.log(el);
  const [clicked, setClicked] = useState(true)
  const [clicked1, setClicked1] = useState(true)
  const [clicked2, setClicked2] = useState(true)
  const [clicked3, setClicked3] = useState(true)
  return (
    <div className="text-center  questions">
      <div>
        <div className="bg-gray-300 h-20">
          <h1 className="mt-2 text-xl font-medium text-gray-900">
            {el.question}
          </h1>
        </div>
        <div className="mt-6 flex justify-between  ">
          <div className="w-1/5 flex border-2 border-black">
          <div onClick={() => {
          setClicked(false)
          setClicked1(true)
          setClicked2(true)
          setClicked3(true)}} className={clicked? "h-5 w-5 mt-1 border-black border-2 rounded-full ":"h-5 w-5 border-black mt-1 border-2 rounded-full bg-blue-500" }></div>
            <h1 className="text-lg"> {el.correct_answer}</h1>
          </div>
          <div className="w-1/4 flex border-2 border-black">
          <div onClick={() =>{ setClicked1(false)
          setClicked(true)
          setClicked2(true)
          setClicked3(true)
          }} className={clicked1? "h-5 w-5 mt-1 border-black border-2 rounded-full ":"h-5 w-5 mt-1 border-black border-2 rounded-full bg-blue-500" }></div>
            <h1 className="text-lg">{el.incorrect_answers[0]}</h1>
          </div>
          <div className="w-1/4 flex border-2 border-black">
          <div onClick={() => {setClicked2(false)
            setClicked(true)
            setClicked1(true)
            setClicked3(true)}} className={clicked2? "h-5 w-5 mt-1  border-black border-2 rounded-full ":"h-5 w-5 mt-1  border-black border-2 rounded-full bg-blue-500" }></div>
            <h1 className="text-lg">{el.incorrect_answers[1]}</h1>
          </div>
          <div className="w-1/4 flex border-2 border-black">
          <div onClick={() =>{ setClicked3(false)
           setClicked(true)
           setClicked1(true)
           setClicked2(true)}} className={clicked3? "h-5 w-5 mt-1  border-black border-2 rounded-full ":"h-5 w-5 mt-1  border-black border-2 rounded-full bg-blue-500" }></div>
            <h1 className="text-lg">{el.incorrect_answers[2]}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
