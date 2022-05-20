import "./App.css";
import { useState } from "react";

import Categories from "./components/Categories";
import Question from "./components/Question";
import DragDrop from "./components/DragDrop";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Picture from "./components/Picture";

function App() {
  const characters = [
    {
      id: "Depp",
      img: "https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_.jpg",
    },
    {
      id: "Orlando",
      img: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwOTI0NDI0NDA3NDkxNjcy/gettyimages-1188892214.jpg",
    },
    {
      id: " Cumberbatch",
      img: "https://headcurve.com/wp-content/uploads/2020/01/benedict-cumberbatch-hairstyle-2016-jan232020-06-min.jpg",
    },
    {
      id: "strong",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZnMolIG7Doj1QrA1hVu-QnqjbH7zjweTDe7lSBy2w5K5bXTZ",
    },
  ];
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
    "Entertainment: Board Games",
  ];
  const insert = (arr, index, newItem) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index),
  ];

  const [number, setNumber] = useState(0);
  return (
    <div
      className={
        startButton
          ? "bg-white min-h-screen   bg-transparent min-w-screen bg-no-repeat   bg-cover background"
          : "bg-0 h-screen  bg-transparent min-w-screen bg-no-repeat   bg-cover background"
      }
    >
      <div className="categories  flex flex-wrap  justify-center ">
        <div className=" flex justify-between  m-2" id="categories">
          {categoryArr.slice(0, 4).map((el, index) => (
            <div className="">
              <Categories
                questions={questions}
                setQuestions={setQuestions}
                name={el}
                index={index}
                setButton={setButton}
                url={index + 1}
                category={index + 9}
              />
            </div>
          ))}
        </div>
        <div className="categories mt-4  flex flex-wrap ">
          {categoryArr.slice(4, 8).map((el, index) => (
            <Categories
              questions={questions}
              setQuestions={setQuestions}
              name={el}
              index={index + 4}
              setButton={setButton}
              url={index + 5}
              category={index + 13}
            />
          ))}
        </div>
      </div>
      <div className="categories mt-4 Drag flex flex-wrap justify-center">
        <DragDrop index={8} />
      </div>

      {startButton &&
        [questions[number]].map((el) => {
          console.log(el);
          const random = Math.floor(Math.random() * 3);
          const result = insert(
            el.incorrect_answers,
            random,
            el.correct_answer
          );
          return (
            <Question
              el={el}
              result={result}
              setNumber={setNumber}
              number={number}
            />
          );
        })}
    </div>
  );
}

export default App;
