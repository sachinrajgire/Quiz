import React from 'react';
import MultipleChoice from './../src/containers/MultipleChoice/MultipleChoice';
import './App.css';
import './index.css';


class App extends React.Component {

  /* Initialize to first question */
  constructor(props) {
      super(props);
      this.state = {
        initalQuestionID : 1
      }
    }

  /* MultipleChoice is the main coponent which has all the childs required  */  
  render() {
    return (
      <div className='App'>
        <div className="topDiv" > Welcome Robert Ferraro </div>
        <MultipleChoice initalQuestionID={this.state.initalQuestionID} />
      </div>
    );
  }
}

export default App;
