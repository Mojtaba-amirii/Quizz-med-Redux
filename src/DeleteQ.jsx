import { removeQuestion } from "./assets/redux/quizz";
import { useState } from "react";

function DeleteQ({ question }) {
  const [title, setTitle] = useState(question.title);
  const [deleteQq, setDeleteQq] = useState(false);

  function handleDeleteQuestion() {
    removeQuestion(question.title);
  }

  return (
    <div>
      <h2>Delete Question</h2>
      <label>Title {title}</label>
      {deleteQq ? (
        <div>
          <input
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />

          <button onClick={() => setDeleteQq(false)}>Save</button>
        </div>
      ) : (
        <div>
          <button onClick={handleDeleteQuestion}>Delete Question</button>
        </div>
      )}
    </div>
  );
}

export default DeleteQ;
