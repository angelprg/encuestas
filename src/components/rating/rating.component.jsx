import React from "react";
import RatingButtons from "./../rating-buttons/rating-buttons.component";

import "./rating.styles.scss";

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      current: 0,
      lastRating: 5
    };
  }

  submitRates = () =>{
    console.log('To Submit: ',this.state);
  }

  saveSelected = selected => {
    this.setState(prevState => {
      const newQuestions = [ ...prevState.questions ];
      newQuestions[prevState.current].selected = selected;
      return { questions: newQuestions, current: prevState.current + 1 };
    });
  };
  clearSelected = () =>{
    this.setState(prevState =>{
      const newQuestions = prevState.questions.map(q => ({...q,selected:null}))
      return {questions:newQuestions, current:0}
    })
  }

  handleRatingClick = selected => {
    this.saveSelected(selected);
    if (this.state.current === this.state.questions.length - 1) {
      this.submitRates();
      this.clearSelected();
    } 
  };
  render() {
    const { questions, current } = this.state;
    return (
      <div className="rating">
        <div className="question">{questions[current].question}</div>
        <RatingButtons
          current={this.state.current}
          handleRatingClick={this.handleRatingClick}
        />
      </div>
    );
  }
}

export default Rating;
