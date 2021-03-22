import React from 'react';
import Question from './../../components/question/Question';
import Answers from './../../components/answers/Answers';
import CurrentStep from './../../components/CurrentStep/CurrentStep';
import FinalScore from './../../components/FinalScore/FinalScore';
import multipleChoice from './../../api/multipleChoice';
import logo from './../../assets/prev.jpg';

class MultipleChoice extends React.Component {
    constructor() {
      super();
      this.state = {questionAndAnswers:[], currentQuestion:0 , selectedList: [] , totalQuestions: 0};
      this.getQuestion = this.getQuestion.bind(this);
      this.updateSelectedOption = this.updateSelectedOption.bind(this);
      this.showPreviousQuestion = this.showPreviousQuestion.bind(this)
    }


/* Get the question and answer details based on the question id */
getQuestion(initalQuestionID)
{
  let results = multipleChoice.options.filter( item => ( item.questionID === initalQuestionID)  );
  this.setState({
    questionAndAnswers: results,
    currentQuestion: initalQuestionID
  })
}
/* Update all the selected options, which would be used in calculating the final score */
updateSelectedOption(questinID, answerID)
{
  let resultArray = this.state.selectedList.concat({
    questionID: questinID,
    answerID: answerID
  });
  this.setState({
    selectedList: resultArray
  });
}

/* Call a method to get the question and answer details to be shown on initial load */
componentDidMount()
{
  let noofQuestions = Object.keys(multipleChoice.options).length;
  this.setState({
    totalQuestions: noofQuestions
  });
  this.getQuestion(this.props.initalQuestionID);
}



/* To get previous question details */
showPreviousQuestion()
{
  this.getQuestion(this.state.currentQuestion-1);
}
/* img -> Show the left img to navigate to previous question
CurrentStep -> Show the current question number like Step 1 out of 5
Question -> To show the question
Answers -> To show the list the available options
FinalScore -> To show the final score */

  render() {
    let imgStype;
    if ( this.state.currentQuestion > 1 )
    {
      imgStype = {visibility: 'visible'};
    }
    else {
      imgStype = {visibility: 'hidden'};
    }
    return (
      <div className='container'>

      { this.state.currentQuestion <= this.state.totalQuestions ?

        <div className="topPanel">
        <div className="answerSection">
          <div className='questionContainer'>
          <img title="Back" alt="" onClick={this.showPreviousQuestion} className="alignImg" style={imgStype} src= {logo}/>
           <CurrentStep   totalQuestions={this.state.totalQuestions } currentQuestion={this.state.currentQuestion} />
          </div>
          <Question questionAndAnswers={this.state.questionAndAnswers}   />
        <Answers nextQuestion={this.getQuestion} updateSelectedOption={this.updateSelectedOption} questionAndAnswers={this.state.questionAndAnswers}  />
        </div> </div> :
        <FinalScore allQuestionsAndAns={multipleChoice.options} totalQuestions={this.state.totalQuestions } questionAndAnswers={this.state.questionAndAnswers}  selectedChoices={this.state.selectedList} />
        
      }
      </div>
    );
  }
}

export default MultipleChoice;
