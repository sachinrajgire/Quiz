import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';
import multipleChoice from './multipleChoice.json';

let results = multipleChoice.options.filter( item => ( item.questionID== 2)  );

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Question questionAndAnswers={results} />, div);
});
