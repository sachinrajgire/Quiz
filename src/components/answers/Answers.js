import React from 'react';

class Answers extends React.Component {
  constructor() {
    super();
    this.answerSelected = this.answerSelected.bind(this);
    this.getSelectedAttribute = this.getSelectedAttribute.bind(this);
  }

  getSelectedAttribute(target, value){
    let result =  target.getAttribute(value);
    return parseInt(result, 10);
  }

  /* Move on to the next question after answer is selected */
  answerSelected(event, i)
  {
    let questionId = this.getSelectedAttribute(i.target, 'questionid');
    let answerId = this.getSelectedAttribute(i.target, 'answerid');
    this.props.updateSelectedOption(questionId, answerId);
    this.props.nextQuestion(questionId+1);
  }

  render() {
    return (
      <ul >
      {this.props.questionAndAnswers[0] && this.props.questionAndAnswers[0].answers.map((item) =>
        <li key={item.id} questionid={this.props.questionAndAnswers[0].questionID} answerid={item.id}  className="answer" onClick={this.answerSelected.bind(this,this.props.questionAndAnswers[0])} > {item.answer} </li> ) }
      </ul>
    );
  }
}

export default Answers;
