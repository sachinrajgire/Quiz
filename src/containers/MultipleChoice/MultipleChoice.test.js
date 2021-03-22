import React from 'react';
import ReactDOM from 'react-dom';
import MultipleChoice from './MultipleChoice';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MultipleChoice initalQuestionID="1" />, div);
});
