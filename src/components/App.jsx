import React, {Component} from "react";
import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions ";
import Notification from './Notification'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

handleIncrement = ({ target: {name } }) => {
    this.setState(prevState => ({
        [name]: prevState[name] + 1
    }))
}

countTotalFeedback = () => {
 const total = this.state.good + this.state.neutral + this.state.bad;
 return total;
};

countPositiveFeedbackPercentage = () => {
  const positivePercentage = Math.round((this.state.good/this.countTotalFeedback()) * 100);
   return positivePercentage;
}
 
  render() {

    return (
     <Section title = {'Please leave feedback'}>    

    <FeedbackOptions 
      options={['good', 'neutral', 'bad'] }
      onLeaveFeedback={this.handleIncrement}
    />

    {this.countTotalFeedback() > 0 ?
    <Statistics 
      good={this.state.good} 
      neutral={this.state.neutral} 
      bad={this.state.bad}
      total={this.countTotalFeedback()} 
      positivePercentage={this.countPositiveFeedbackPercentage() }/>
      : <Notification message={"There is no feedback"}/> 
    }

   </Section>
  );
  }
};

export default App;
