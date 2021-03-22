import React from 'react';

class FinalScore extends React.Component {
  constructor() {
    super();
    this.state = {finalScore : 0}
  }

  /* Calcuate final score based on the selections made, final score is in % */

  finalScore()
  {
      let totalQuestions = this.props.totalQuestions;
      let correctAnswers = 0;
      let questionID ;
      let answerID;
      let correctAnswerID;
      Object.keys(this.props.selectedChoices).forEach ((key, item) =>
      {
        questionID = this.props.selectedChoices[key].questionID;
        answerID = this.props.selectedChoices[key].answerID;
        correctAnswerID = this.props.allQuestionsAndAns[questionID-1].correctAnswerID;

          if ( correctAnswerID === answerID)
            {
                correctAnswers++;
            }
      })
    let finalScore = parseFloat(correctAnswers  / totalQuestions ) * 100
    return finalScore;
}

  render() {
    return (
      <div className="finalScoreSection">
        Assessment has been completed, Your Fincal Score:
         <div className="finalScore"> { this.finalScore() } % </div>
      </div>
    );
  }
}

export default FinalScore;
