import React from 'react';
import ReactDOM from 'react-dom';
import FinalScore from './FinalScore';
import multipleChoice from './multipleChoice.json';

let results = multipleChoice.options.filter( item => ( item.questionID== 2)  );

let currentList = []
let selectionObj = {}
selectionObj.questionID = 3;
selectionObj.answerID = 1;
currentList.push(selectionObj);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FinalScore  allQuestionsAndAns={multipleChoice.options} totalQuestions="5" questionAndAnswers={results}  selectedChoices={currentList}  />, div);
});
