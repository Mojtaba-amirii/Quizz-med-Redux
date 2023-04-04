import { useQuizz, addQuestion } from "./assets/redux/quizz";
import { useState } from "react";
import UpdateQ from "./UpdateQ";
import DeleteQ from "./DeleteQ";

export default function AdminPage() {
  const quizz = useQuizz();
  const [title, setTitle] = useState();
  const [alt1, setAlt1] = useState();
  const [alt2, setAlt2] = useState();
  const [alt3, setAlt3] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();

  function handleAddQuestion() {
    const Question = {
      id: Date.now(),
      title,
      alt1,
      alt2,
      alt3,
      correctAnswer,
    };

    addQuestion(Question);
  }

  return (
    <>
      <div>
        <h2>Add Question</h2>

        <label>Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />

        <label>Alternative 1</label>
        <input type="text" onChange={(e) => setAlt1(e.target.value)} />

        <label>Alternative 2</label>
        <input type="text" onChange={(e) => setAlt2(e.target.value)} />

        <label>Alternative 3</label>
        <input type="text" onChange={(e) => setAlt3(e.target.value)} />

        <label>Correct Answer</label>
        <input type="text" onChange={(e) => setCorrectAnswer(e.target.value)} />

        <button onClick={handleAddQuestion}>Add Question</button>
      </div>
      {quizz.questionData.map((question) => {
        return <UpdateQ key={question.id} question={question} />;
      })}
      <div>
        {quizz.questionData.map((question) => {
          return <DeleteQ key={question.id} question={question} />;
        })}
      </div>
    </>
  );
}
