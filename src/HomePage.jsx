// På Quizz-sidan ska man kunna starta ett quizz och sen få ett resultat.
// 4. startQuizz ->
// sätt quizzStarted = true, showResult = false,
// currentQuestion = 0, score = 0

// Data för frågorna och quizzet:

import "./assets/redux/quizz";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  function startQuizz() {
    navigate("/QuizPage");
  }
  return (
    <div>
      <h2>Welcome!</h2>
      <button onClick={startQuizz}>Start Quizz</button>
    </div>
  );
}
