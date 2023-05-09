import { StatisticsList } from './Feedback.styled';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (

    <>
    <h2>Statistics</h2>
    <ul>
    <StatisticsList>Good: {good}</StatisticsList>
    <StatisticsList>Neutral: {neutral}</StatisticsList>
    <StatisticsList>Bad: {bad}</StatisticsList>
    <StatisticsList>Total: {total}</StatisticsList>
    <StatisticsList>Positive feedback: {positivePercentage} %</StatisticsList>
    </ul></>
  
)

export default Statistics;