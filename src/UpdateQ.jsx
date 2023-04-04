import { updateQuestion } from "./assets/redux/quizz";
import { useState } from "react";

function UpdateQ({ question }) {
  const [title, setTitle] = useState(question.title);
  const [alt1, setAlt1] = useState(question.alt1);
  const [alt2, setAlt2] = useState(question.alt2);
  const [alt3, setAlt3] = useState(question.alt3);
  const [correctAnswer, setCorrectAnswer] = useState(question.correctAnswer);

  const [updateQq, setUpdateQq] = useState(false);

  function handleUpdateQuestion() {
    const updateObject = {
      title,
      alt1,
      alt2,
      alt3,
      correctAnswer,
    };
    updateQuestion(updateObject, setUpdateQq(true));
  }

  return (
    <div>
      <h2>Update Question</h2>
      <label>Title: {title}</label>
      {updateQq ? (
        <div>
          <input
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Alternative 1</label>
          <input
            value={alt1}
            type="text"
            onChange={(e) => setAlt1(e.target.value)}
          />

          <label>Alternative 2</label>
          <input
            value={alt2}
            type="text"
            onChange={(e) => setAlt2(e.target.value)}
          />

          <label>Alternative 3</label>
          <input
            value={alt3}
            type="text"
            onChange={(e) => setAlt3(e.target.value)}
          />

          <label>Correct Answer</label>
          <input
            value={correctAnswer}
            type="text"
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
          <button onClick={() => setUpdateQq(false)}>Save</button>
        </div>
      ) : (
        <div>
          <button onClick={handleUpdateQuestion}>Update Question</button>
        </div>
      )}
    </div>
  );
}

export default UpdateQ;
