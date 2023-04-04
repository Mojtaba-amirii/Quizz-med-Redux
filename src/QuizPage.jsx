// 5. answerQuestion ->
// kolla om det var rätt svar då öka score med 1
// kolla om det var sista frågan (Kolla om
//    currentQuestion är == questions.length - 1)
//    då ändra showResult = true.
// Öka currentQuestion med 1.

import { answerQuestion, useQuizz } from "./assets/redux/quizz";

export default function QuizPage() {
  const { questionData, currentQuestion, showResult, quizzStarted } =
    useQuizz();
  const question = questionData[currentQuestion];

  function handleAnswer(answer) {
    answerQuestion(answer);
  }

  return (
    <div>
      <h2>Quizz Started! {question.title}</h2>
      <h3>Please select the correct answer!</h3>
      <button value={question.alt1} onClick={() => handleAnswer(question.alt1)}>
        {question.alt1}
      </button>
      <button value={question.alt2} onClick={() => handleAnswer(question.alt2)}>
        {" "}
        {question.alt2}
      </button>
      <button value={question.alt3} onClick={() => handleAnswer(question.alt3)}>
        {question.alt3}
      </button>
    </div>
  );
}
