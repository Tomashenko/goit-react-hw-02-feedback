import { FeedbackBtn, FeedbackBtnList } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => { 
  return  <FeedbackBtnList>
      {options.map(option => {
          return <li key={option}>
              <FeedbackBtn type="button" onClick={onLeaveFeedback} name={option}> {option}</FeedbackBtn>
          </li>
       }) }
          </FeedbackBtnList>
}

export default FeedbackOptions;