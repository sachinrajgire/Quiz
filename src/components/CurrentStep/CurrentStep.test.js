import React from 'react';
import ReactDOM from 'react-dom';
import CurrentStep from './CurrentStep';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CurrentStep totalQuestions="5" currentQuestion="3" />, div);
});
