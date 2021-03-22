import React from 'react';
import ReactDOM from 'react-dom';
import Answers from './Answers';
import multipleChoice from './multipleChoice.json';

let results = multipleChoice.options.filter( item => ( item.questionID== 2)  );

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Answers questionAndAnswers={results}  />, div);
});
