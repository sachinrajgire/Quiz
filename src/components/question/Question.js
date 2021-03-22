import React from 'react';
import './Question.css';

class Question extends React.Component {

  render() {
    return (
      <div className='question-box'>
      <div className="question" > {this.props.questionAndAnswers[0] && this.props.questionAndAnswers[0].question} </div>
      <div className="subQuestion" > {this.props.questionAndAnswers[0] && this.props.questionAndAnswers[0].subQuestion} </div>
      </div>
    );
  }
}

export default Question;
