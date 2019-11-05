import { createStore } from "react-redux";

const initialState = {
  questions: [
    {
      _id: 1,
      question: "¿Qué te pareció la limpieza de las instalaciones?",
      selected: null
    },
    { _id: 2, question: "¿Qué te parece la atención?", selected: null },
    { _id: 3, question: "¿Qué tal las instalaciones?", selected: null },
    { _id: 4, question: "¿Cuál es tu opinión general?", selected: null },
    { _id: 5, question: "¿Qué piensas de Sports World?", selected: null }
  ],
  current: 0
};

const questionsReducer = (state = initialState, action) => {
  console.log("questions");
  return state;
};

const questionsState = createStore();

export default questionsState;
