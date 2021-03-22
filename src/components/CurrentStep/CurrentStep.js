import React from 'react';

class CurrentStep extends React.Component {
  render() {
    return (
      <div className="alignCurrentStep">
        Step {this.props.currentQuestion} of {this.props.totalQuestions}
        </div>
    );
  }
}
export default CurrentStep;
