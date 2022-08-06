import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedback }) {
    if(!feedback || feedback.length === 0){
        return "No feedback yet"
    }

  return (
    <div className="feedback-list">
        {feedback.map((item) =>(
            <div> {item.rating} </div>
        ))}
    </div>
  )
}

export default FeedbackList
