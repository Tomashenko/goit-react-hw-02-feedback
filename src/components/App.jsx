import React, {Component} from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions ";
import Notiflix from 'notiflix';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

 goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    
};
 neutralIncrement = () => {
   this.setState(prevState => ({
     neutral: prevState.neutral + 1,
    }));
  };

badIncrement = () => {
   this.setState(prevState => ({
    bad: prevState.bad + 1,
    }));
};

countTotalFeedback = () => {
 const total = this.state.good + this.state.neutral + this.state.bad;
 if (this.total > 0){
  Notiflix.Notify.failure('There is no feedback');
};
return total;
};

countPositiveFeedbackPercentage = () => {

  const positivePercentage = Math.round((this.state.good/this.total) * 100);
   return positivePercentage;
}
 
  render() {
console.log(this.countPositiveFeedbackPercentage());

  return (
    < >

      <h1>Please leave feedback</h1>

    <FeedbackOptions onGoodIncrement={this.goodIncrement} onNeutralIncrement={this.neutralIncrement} onBadIncrement={this.badIncrement}/>
   
    <Statistics good={this.state.good} 
       neutral={this.state.neutral} 
       bad={this.state.bad}
       total={this.countTotalFeedback()} 
       positivePercentage={this.countPositiveFeedbackPercentage()} />

    </>
  );
  }
};

export default App;
