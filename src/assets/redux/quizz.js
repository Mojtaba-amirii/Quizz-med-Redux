import { createReduxModule } from "hooks-for-redux";

const initialStateQuestion = {
  questionData: [],

  quizzStarted: false,
  showResult: false,
  currentQuestion: 0,
  score: 0,
};

export const [
  useQuizz,
  { addQuestion, removeQuestion, updateQuestion, answerQuestion },
] = createReduxModule("Quizz", initialStateQuestion, {
  addQuestion: (state, question) => {
    return { ...state, questionData: [...state.questionData, question] };
  },
  removeQuestion: (state, title) => {
    return {
      ...state,
      questionData: state.questionData.filter(
        (question) => question.title !== title
      ),
    };
  },
  updateQuestion: (state, question) => {
    const newList = [...state.questionData];

    for (let i = 0; i < newList.length; i++) {
      const item = newList[i];
      if (item.title == question.title) {
        item.updated = !question.updated;
      }
    }
    return { ...state, newList };
  },
  answerQuestion: (state, answer) => {
    const correctAnswer =
      state.questionData[state.currentQuestion].correctAnswer;
    let score = state.score;
    let showResult = false;
    let currentQuestion = state.currentQuestion;
    let quizzStarted = state.quizStarted;

    if (correctAnswer == answer) {
      score++;
    }

    if (state.currentQuestion == state.questionData.length - 1) {
      showResult = true;
      currentQuestion = 0;
      quizzStarted = false;
    } else {
      currentQuestion++;
    }

    return {
      ...state,
      score,
      showResult,
      currentQuestion,
      quizzStarted,
    };
  },
});
