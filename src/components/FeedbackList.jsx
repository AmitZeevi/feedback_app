import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'
//  npm i framer-motion@4.1.17
// import {motion, animatePresence} from 'framer-motion


function FeedbackList({ feedback, handleDelet }) {
    if(!feedback || feedback.length === 0){
        return <p> No feedback yet </p>
    }

  return (
    <div className="feedback-list">
        {feedback.map((item) =>(
            <FeedbackItem 
            key={item.id} 
            item = {item}  
            handleDelet={handleDelet} />
        ))}
    </div>
  )
}

FeedbackList.propTypes ={
  feedback: PropTypes.array,
}

export default FeedbackList
