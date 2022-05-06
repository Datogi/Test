/* This example requires Tailwind CSS v2.0+ */

export default function Question({ el }) {
  console.log(el);
  return (
    <div className="text-center  questions">
      <div>
        <div className="bg-gray-300 h-20">
          <h1 className="mt-2 text-xl font-medium text-gray-900">
            {el.question}
          </h1>
        </div>
        <div className="mt-6 flex justify-between  ">
          <div className="w-1/4">
            <h1 className="text-lg"> {el.correct_answer}</h1>
          </div>
          <div className="w-1/4">
            <h1 className="text-lg">{el.incorrect_answers[0]}</h1>
          </div>
          <div className="w-1/4">
            <h1 className="text-lg">{el.incorrect_answers[1]}</h1>
          </div>
          <div className="w-1/4">
            <h1 className="text-lg">{el.incorrect_answers[2]}</h1>
          </div>
        </div>
      </div>
      )
    </div>
  );
}
