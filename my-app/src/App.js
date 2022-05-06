import "./App.css";
import { useState } from "react";

import Categories from "./components/Categories";
import Question from "./components/Question";

function App() {
  const [questions, setQuestions] = useState([]);
  const [startButton, setButton] = useState(false);
  const categoryArr = [
    "General Knowledge",
    "Entertainment: Books",
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Musicals & Theatres",
    "Entertainment: Television",
    "Entertainment: Video Games",
  ];

  return (
    <>
      <div className="categories">
        <div className=" flex justify-between m-2" id="categories">
          {categoryArr.slice(0, 4).map((el, index) => (
            <div className="">
              <Categories
                questions={questions}
                setQuestions={setQuestions}
                name={el}
                index={index}
                setButton={setButton}
              />
            </div>
          ))}
        </div>
        <div className="flex  justify-center mt-2">
          {categoryArr.slice(4, 7).map((el, index) => (
            <Categories
              questions={questions}
              setQuestions={setQuestions}
              name={el}
              index={index + 4}
              setButton={setButton}
            />
          ))}
        </div>
      </div>
      {startButton &&
        questions.map((el) => {
          return <Question el={el} />;
        })}
    </>
  );
}

export default App;
